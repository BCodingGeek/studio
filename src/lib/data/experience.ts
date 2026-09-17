export interface ExperienceRole {
  title: string;
  employmentType?: string;
  dateRange: string;
  duration: string;
  location?: string;
  intro?: string;
  bullets?: string[];
  skills?: string;
}

export interface ExperienceCompany {
  company: string;
  companyType?: string;
  totalDuration?: string;
  location?: string;
  roles: ExperienceRole[];
}

export const experience: ExperienceCompany[] = [
  {
    company: 'Frontwalker Sri Lanka',
    companyType: 'Contract',
    location: 'Colombo, Western Province, Sri Lanka · Hybrid',
    roles: [
      {
        title: 'Associate Technical Lead',
        dateRange: 'Jan 2026 - Present',
        duration: '9 mos',
      },
    ],
  },
  {
    company: 'Sysco LABS Sri Lanka',
    companyType: 'Contract',
    location: 'Colombo, Western Province, Sri Lanka · Hybrid',
    roles: [
      {
        title: 'Senior Software Engineer',
        dateRange: 'Jan 2026 - Present',
        duration: '9 mos',
      },
    ],
  },
  {
    company: 'Freelancer.com & OSS',
    companyType: 'Part-time',
    roles: [
      {
        title: 'Full Stack Engineer',
        dateRange: 'Mar 2020 - Present',
        duration: '6 yrs 7 mos',
        intro: 'Built and contributed to diverse freelance and open-source projects with a strong focus on performance, mobile responsiveness, and cross-platform support.',
        bullets: [
          'Integrated payment gateways and secure user authentication modules',
          'Developed responsive, high-performance e-commerce and data collection apps using Flutter and React Native',
          'Used SQL and NoSQL databases based on project scale and architecture needs',
          'Led client interactions and ensured codebase consistency via Git in agile, fully remote teams',
          'Engineered scalable cross-platform apps with responsive UIs, serving 1K+ monthly users with optimized performance',
        ],
        skills: 'Angular, React.js and +3 skills',
      },
    ],
  },
  {
    company: 'HCLTech Sri Lanka',
    totalDuration: '3 yrs 5 mos',
    location: 'Colombo, Western Province, Sri Lanka',
    roles: [
      {
        title: 'Technical Lead',
        dateRange: 'Jul 2023 - Jul 2025',
        duration: '2 yrs 1 mo',
        intro: 'Leading enterprise-grade software delivery for high-traffic systems with 24/7 availability. Drive architecture decisions, DevOps integration, and Agile planning across distributed teams.',
        bullets: [
          'Designed and deployed scalable microservices using Angular, Spring Boot, and AWS',
          'Mentored developers via structured code reviews and tailored coaching, leading to a 30% boost in delivery speed and code quality',
          'Conducted sprint planning, retrospectives, and facilitated cross-team collaboration',
          'Integrated DevOps practices: CI/CD, monitoring, and automated testing',
          'Led cross-functional architecture alignment initiatives, streamlining delivery and reducing bottlenecks by 20%',
        ],
        skills: 'Angular, Spring Boot, +3 skills',
      },
      {
        title: 'Senior Software Engineer',
        employmentType: 'Full-time',
        dateRange: 'Mar 2022 - Jun 2023',
        duration: '1 yr 4 mos',
        intro: 'Contributed to multiple enterprise-grade applications by building robust frontend modules and backend services. Worked closely with QA and product teams to ensure high-quality feature delivery.',
        bullets: [
          'Developed RESTful APIs and dynamic UI components',
          'Reduced code review time by 15% through proactive peer reviews',
          'Implemented robust automated testing suites, enhancing coverage, reducing manual QA effort, and boosting release confidence',
          'Enhanced system performance, reducing response times by 25%',
          'Owned module-level design and full lifecycle feature rollouts, ensuring on-time, high-quality deliveries',
        ],
        skills: 'Vue, Spring Boot, +9 skills',
      },
    ],
  },
  {
    company: 'FedEx',
    companyType: 'Contract',
    totalDuration: '2 yrs 9 mos',
    location: 'Remote',
    roles: [
      {
        title: 'Technical Lead',
        dateRange: 'Dec 2023 - Nov 2024',
        duration: '1 yr',
        location: 'United States',
        intro: 'Rate Visibility — Calculating and returning rates to other microservice components. Printing rates in Excel, CSV, or PDF format.',
        bullets: [
          'Participated in initial discussions and user story slicing during PI planning for new CRs, resulting in a 25% improvement in planning accuracy',
          'Developed features and reviewed PRs, leading to a 15% reduction in code review time',
          'Engaged in activities during MTPs, contributing to a 10% improvement in project delivery timelines',
          'Led Agile teams of up to 8 developers',
          'Mentored junior engineers, improving team productivity by 30%',
          'Facilitated sprint planning and retrospectives',
        ],
        skills: 'Spring Boot, iFaces, JMS, EJBs/MDBs (Active MQ), Splunk, WinSCP, SOAP Client, Bash, WebLogic, AppDynamics, AWS S3, mRemoteNG',
      },
      {
        title: 'Technical Lead',
        dateRange: 'Oct 2022 - Nov 2023',
        duration: '1 yr 2 mos',
        location: 'United States',
        intro: 'Discount Report / Discount Comparison Report — Generating a Discount Report and a Discount Comparison Report displayed on a web page, so sales executives can offer more discounts to existing customers and attract new customers with competitive rates.',
        bullets: [
          'Participated in initial discussions and user story slicing during PI planning for new CRs, ensuring clear requirements and improving planning accuracy by 25%',
          'Developed and implemented new features based on user stories, enhancing functionality and user experience',
          'Reviewed pull requests (PRs) to maintain code quality and consistency, reducing code review time by 15%',
          'Engaged in MTP activities, contributing to better project delivery timelines and alignment with business goals',
          'Collaborated with cross-functional teams to integrate new features seamlessly',
          'Mentored junior developers, leading to a 30% improvement in their coding skills and productivity',
          'Implemented automated testing frameworks, reducing manual testing efforts by 40% and increasing test coverage',
          'Facilitated sprint retrospectives, leading to a 15% increase in team efficiency',
        ],
        skills: 'Spring Boot, Angular, JMS, EJBs/MDBs (Active MQ), Splunk, WinSCP, CyberDuck, Bash, WebLogic, AWS S3',
      },
      {
        title: 'Senior Software Engineer',
        dateRange: 'Mar 2022 - Oct 2022',
        duration: '8 mos',
        location: 'Singapore',
        intro: 'PEACE Project — Streamlined invoice processing by enabling QR code scanning on invoices, redirecting users to a webpage for manual or automatic invoice entry based on invoice type.',
        bullets: [
          'Implemented payment options through credit cards and other methods, tailored to payment gateway vendors available in different countries, enhancing payment flexibility by 30%',
          "Enabled multi-language support based on the user's country, increasing user accessibility by 20%",
          'Added functionality for users to input additional invoice details and make payments, improving user satisfaction by 15%',
          'Integrated comprehensive input field validations, ensuring data accuracy and reducing errors by 35%',
          'Developed server-side validation for invoice numbers, providing immediate feedback and improving validation speed by 40%',
        ],
        skills: 'Vue, Spring Boot, Weblogic, Oracle, Postman, Chrome DevTools, Bash',
      },
    ],
  },
  {
    company: 'Bellvantage (Pvt) Ltd',
    companyType: 'Full-time',
    roles: [
      {
        title: 'Associate Full Stack Engineer',
        dateRange: 'Mar 2021 - Jun 2021',
        duration: '4 mos',
        intro: 'Developed internal tools to manage operational data with responsive frontends and secure backends.',
        bullets: [
          'Designed and built a dashboard for tea inventory and employee details',
          'Boosted client satisfaction by delivering tailored solutions before deadlines',
          'Automated dashboard workflows for operational teams, cutting manual reporting time by 40% and enhancing data accuracy',
        ],
        skills: 'Angular, Laravel and +3 skills',
      },
    ],
  },
  {
    company: 'EY',
    location: 'Sri Lanka',
    roles: [
      {
        title: 'Management Trainee - RPA',
        dateRange: 'Jan 2019 - Feb 2020',
        duration: '1 yr 2 mos',
        intro: 'Contributed to automation of financial workflows including impairment calculations and reporting processes.',
        bullets: [
          'Built and maintained RPA bots for banking operations',
          'Ensured smooth bot operation by configuring scheduling environments',
          'Used scripting and macros to support fast-paced reporting',
          'Achieved 60% faster reporting through complete RPA automation of key financial workflows',
        ],
        skills: 'Blue Prism, UiPath and +3 skills',
      },
    ],
  },
  {
    company: 'Cubo Systems International (Pvt) Ltd',
    companyType: 'Full-time',
    roles: [
      {
        title: 'Web Developer Internship',
        dateRange: 'Mar 2018 - Apr 2018',
        duration: '2 mos',
        intro: 'Assisted in building and styling static and dynamic pages for company websites.',
        bullets: [
          'Developed and tested UI components using HTML, CSS, JavaScript, and Asp.NET',
          'Assisted senior developers with seamless integration and deployment of frontend modules',
        ],
        skills: 'HTML5, css3 and +3 skills',
      },
    ],
  },
];
