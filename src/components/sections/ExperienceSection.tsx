"use client";

import { useState } from 'react';
import Section from '@/components/common/Section';
import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/data/experience';

function RoleDetails({ intro, bullets, skills }: { intro?: string; bullets?: string[]; skills?: string }) {
  if (!intro && !bullets?.length && !skills) return null;
  return (
    <div className="mt-2 space-y-2">
      {intro && <p className="text-sm text-foreground/80 leading-relaxed">{intro}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="space-y-1.5">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-sm text-foreground/75 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {skills && (
        <p className="text-xs text-foreground/60 pt-1">
          <span className="font-semibold text-foreground/70">Skills: </span>
          {skills}
        </p>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <Section id="experience" title="Experience">
      <div className="glass-card rounded-2xl divide-y divide-border/50">
        {experience.map((company, ci) => {
          const isGrouped = company.roles.length > 1;
          return (
            <div key={ci} className="p-6 flex gap-4">
              {/* Company logo avatar */}
              <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                {isGrouped ? (
                  <>
                    {/* Grouped company header */}
                    <h3 className="font-headline text-base font-bold text-foreground">
                      {company.company}
                      {company.companyType && <span className="font-normal text-foreground/60"> · {company.companyType}</span>}
                    </h3>
                    {company.totalDuration && (
                      <p className="text-xs text-foreground/60">{company.totalDuration}</p>
                    )}
                    {company.location && (
                      <p className="text-xs text-foreground/60">{company.location}</p>
                    )}

                    {/* Nested roles with timeline connector */}
                    <div className="mt-3 ml-1 space-y-4 border-l-2 border-accent/20 pl-4">
                      {company.roles.map((role, ri) => {
                        const key = `${ci}-${ri}`;
                        const isOpen = expanded.has(key);
                        return (
                          <div key={ri} className="relative">
                            <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                            <p className="text-sm font-semibold text-foreground">
                              {role.title}
                              {role.employmentType && <span className="font-normal text-foreground/60"> · {role.employmentType}</span>}
                            </p>
                            <p className="text-xs text-foreground/60">{role.dateRange} · {role.duration}</p>
                            {role.location && <p className="text-xs text-foreground/60">{role.location}</p>}
                            {(role.intro || role.bullets?.length) && (
                              <button
                                type="button"
                                onClick={() => toggle(key)}
                                className="text-xs font-semibold text-accent hover:underline mt-1"
                              >
                                {isOpen ? 'Show less' : 'Show more'}
                              </button>
                            )}
                            {isOpen && <RoleDetails intro={role.intro} bullets={role.bullets} skills={role.skills} />}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  company.roles.map((role, ri) => {
                    const key = `${ci}-${ri}`;
                    const isOpen = expanded.has(key);
                    return (
                      <div key={ri}>
                        <p className="text-sm font-semibold text-foreground">{role.title}</p>
                        <p className="text-sm text-foreground/70">
                          {company.company}
                          {(company.companyType || role.employmentType) && ` · ${company.companyType || role.employmentType}`}
                        </p>
                        <p className="text-xs text-foreground/60">{role.dateRange} · {role.duration}</p>
                        {(role.location || company.location) && (
                          <p className="text-xs text-foreground/60">{role.location || company.location}</p>
                        )}
                        {(role.intro || role.bullets?.length) && (
                          <button
                            type="button"
                            onClick={() => toggle(key)}
                            className="text-xs font-semibold text-accent hover:underline mt-1"
                          >
                            {isOpen ? 'Show less' : 'Show more'}
                          </button>
                        )}
                        {isOpen && <RoleDetails intro={role.intro} bullets={role.bullets} skills={role.skills} />}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
