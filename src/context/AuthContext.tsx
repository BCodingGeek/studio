'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { User } from 'firebase/auth';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  signOut: async () => {},
});

// Auto sign-out after inactivity, with a heads-up toast shortly before it happens.
const SESSION_TIMEOUT_MS = 15 * 60 * 1000;
const WARNING_BEFORE_MS = 60 * 1000;
const ACTIVITY_EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'] as const;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const warningTimer = useRef<ReturnType<typeof setTimeout>>();
  const logoutTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signOut = () => firebaseSignOut(auth);

  useEffect(() => {
    if (!user) return;

    const clearTimers = () => {
      clearTimeout(warningTimer.current);
      clearTimeout(logoutTimer.current);
    };

    const resetTimers = () => {
      clearTimers();
      warningTimer.current = setTimeout(() => {
        toast({
          title: 'Session expiring soon',
          description: "You've been inactive. You'll be signed out in 1 minute.",
        });
      }, SESSION_TIMEOUT_MS - WARNING_BEFORE_MS);
      logoutTimer.current = setTimeout(() => {
        firebaseSignOut(auth);
      }, SESSION_TIMEOUT_MS);
    };

    resetTimers();
    ACTIVITY_EVENTS.forEach((event) => window.addEventListener(event, resetTimers));

    return () => {
      clearTimers();
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, resetTimers));
    };
  }, [user, toast]);

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
