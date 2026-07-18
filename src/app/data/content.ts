// Single source of truth for all site content.
// Sourced from Ishan Bhat's resume (SWE 2026). Update here to update the site.

export const profile = {
  name: "Ishan Bhat",
  role: "Software Engineer",
  tagline:
    "I build distributed systems and agentic AI infrastructure — from LLM inference schedulers to real-time telemetry platforms.",
  location: "Seattle, WA",
  email: "ibhat.141004@gmail.com",
  work_status: "U.S. Permanent Resident (Green Card) — authorized to work without sponsorship.",
  resumeHref: "/Ishan_Bhat_Resume.pdf",
  socials: {
    github: "https://github.com/ishanbhat2004",
    linkedin: "https://www.linkedin.com/in/ishan-bhat14/",
  },
  // Rotating strings for the hero typewriter.
  heroStrings: [
    "Hello, I'm Ishan Bhat.",
    "Software Engineer @ Amazon Prime Air.",
    "Distributed systems, agentic AI, and everything in between.",
  ],
} as const;

export type Education = {
  institution: string;
  degree: string;
  detail: string;
  timeframe: string;
  gpa: string;
  highlights: string[];
};

export const education: Education[] = [
  {
    institution: "Purdue University",
    degree: "Master of Science",
    detail: "Computer Science",
    timeframe: "Expected May 2027",
    gpa: "3.6 / 4.0",
    highlights: [
      "Agentic Systems research under Prof. Vamsi Addanki",
      "Focus: LLM inference serving & distributed scheduling",
    ],
  },
  {
    institution: "Purdue University",
    degree: "Bachelor of Science",
    detail: "Computer Science, Mathematics & Statistics",
    timeframe: "Dec 2025",
    gpa: "3.8 / 4.0",
    highlights: [
      "Dean's List — all semesters",
      "Coursework: Compilers, Distributed Systems, ML Systems, Stochastic Calculus, Real Analysis",
    ],
  },
];

export type Experience = {
  company: string;
  team?: string;
  role: string;
  location: string;
  timeframe: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Amazon",
    team: "Prime Air",
    role: "Software Engineering Intern",
    location: "Seattle, WA",
    timeframe: "Apr 2026 – Present",
    current: true,
    bullets: [
      "Engineered a full-stack, self-service web platform that unified real-time telemetry from 15+ drone and ground systems into one dashboard, giving engineers live visibility into fleet health and navigation state.",
      "Designed scalable data schemas and metric models (e.g., cost-per-package) that standardized measurement across teams, eliminating hours of manual analysis per release cycle.",
      "Built an agentic natural-language query interface (LLM-backed) over operational data, cutting multi-hour debugging investigations to seconds.",
    ],
  },
  {
    company: "Purdue University",
    team: "Prof. Vamsi Addanki's Lab",
    role: "Graduate Researcher, Agentic Systems",
    location: "West Lafayette, IN",
    timeframe: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Designed an Earliest-Deadline-Late (EDL) scheduling policy for LLM inference serving, improving goodput and deadline adherence for multi-step, latency-sensitive agent workflows.",
      "Architected a KV-cache-aware request router that tracked cache locality across distributed nodes, raising simulated cache-hit rate by 8% and cutting redundant computation.",
    ],
  },
  {
    company: "Capital One",
    role: "Software Engineering Intern",
    location: "Dallas, TX",
    timeframe: "Jun 2025 – Aug 2025",
    bullets: [
      "Built an automation framework that parsed Infrastructure-as-Code repositories via the GitHub GraphQL API, surfacing cross-team cloud service ownership and dependencies at scale.",
      "Designed a recursive parser that mapped 10+ AWS service relationships into a containerized DynamoDB (NoSQL) pipeline, consolidating scattered infrastructure metadata.",
      "Shipped a full-stack Vue.js dashboard and companion CLI for resource monitoring, adopted by 50+ engineers and cutting incident-investigation time by 2+ hours per case.",
    ],
  },
  {
    company: "Cylus",
    team: "Railway Cybersecurity",
    role: "Software Engineering Intern",
    location: "Remote",
    timeframe: "May 2024 – Aug 2024",
    bullets: [
      "Built a real-time packet-capture (pcap) streaming tool in Elixir and Phoenix, cutting R&D analysis turnaround time by 50%.",
      "Reduced annual AWS spend by $3K through PostgreSQL index tuning, AWS Lambda refactoring, and S3 storage optimization.",
      "Engineered a multithreaded Driver-Machine Interface (DMI) server, demoed live to prospective enterprise clients at InnoTrans 2024.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Distributed Key-Value Store (Raft Consensus)",
    blurb:
      "Implemented the Raft consensus protocol across a multi-node cluster — leader election, log replication, and heartbeat-based failure detection to keep replicas in sync. Added log compaction and snapshotting to bound memory, with a client API for linearizable reads and writes.",
    tech: ["Python", "Docker", "Kubernetes", "AWS", "GitLab CI/CD"],
  },
  {
    title: "Optimizing Compiler",
    blurb:
      "Built an SSA-based optimizing compiler implementing liveness analysis, dead-code elimination, constant folding, and loop-invariant code motion. Designed a register allocator using interference graphs to handle variable spilling.",
    tech: ["C++", "LLVM", "Compiler Optimizations"],
  },
  {
    title: "mnk-player",
    blurb:
      "An intelligent Monte Carlo Tree Search variant for m,n,k-games (Tic-Tac-Toe, Connect Four). Used LightGBM models trained on Kaggle datasets to guide strategy selection, evaluating board states and pruning suboptimal moves.",
    tech: ["Python", "MCTS", "LightGBM", "Game AI"],
  },
  {
    title: "Shell Emulator",
    blurb:
      "A custom Unix shell with advanced command parsing via Lex and Yacc. Supports file redirection, pipes, signal handling, environment-variable expansion, built-ins, line editing, history, and wildcarding.",
    tech: ["C", "Lex/Yacc", "Systems"],
    href: "#",
  },
  {
    title: "Vaccine Sentiment Analyzer",
    blurb:
      "A supervised ML model analyzing public COVID-19 vaccine sentiment to help hospitals optimize supply. Used TF-IDF and Logistic Regression to reach ~90% accuracy, deployed on PyWebIO with age and vaccine-type inputs.",
    tech: ["Python", "TF-IDF", "Logistic Regression", "PyWebIO"],
  },
  {
    title: "Dodge",
    blurb:
      "A 2D Java arcade game built on AWT and Swing with time- and level-scaling difficulty, collision detection, game-state management, and a full audio system for sound effects and background music.",
    tech: ["Java", "AWT", "Swing"],
    href: "https://github.com/ishanbhat2004/Dodge",
  },
];

export type SkillGroup = {
  label: string;
  skills: { name: string; src: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", src: "/icons/Python-Dark.svg" },
      { name: "Java", src: "/icons/Java-Dark.svg" },
      { name: "C", src: "/icons/C.svg" },
      { name: "C++", src: "/icons/CPP.svg" },
      { name: "TypeScript", src: "/icons/TypeScript.svg" },
      { name: "JavaScript", src: "/icons/javascript.svg" },
      { name: "SQL", src: "/icons/MySQL-Dark.svg" },
      { name: "R", src: "/icons/R-Dark.svg" },
    ],
  },
  {
    label: "Frameworks & Web",
    skills: [
      { name: "React", src: "/icons/React-Dark.svg" },
      { name: "Next.js", src: "/icons/NextJS-Dark.svg" },
      { name: "Node.js", src: "/icons/NodeJS-Dark.svg" },
      { name: "Spring", src: "/icons/Spring-Dark.svg" },
      { name: "Tailwind", src: "/icons/TailwindCSS-Dark.svg" },
      { name: "HTML", src: "/icons/HTML.svg" },
      { name: "CSS", src: "/icons/CSS.svg" },
      { name: "Elixir", src: "/icons/Elixir-Dark.svg" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", src: "/icons/AWS-Dark.svg" },
      { name: "Docker", src: "/icons/Docker.svg" },
      { name: "Kubernetes", src: "/icons/Kubernetes.svg" },
      { name: "Linux", src: "/icons/Linux-Dark.svg" },
      { name: "Bash", src: "/icons/Bash-Dark.svg" },
      { name: "MongoDB", src: "/icons/MongoDB.svg" },
      { name: "MySQL", src: "/icons/MySQL-Dark.svg" },
      { name: "GitHub", src: "/icons/Github-Dark.svg" },
    ],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", src: "/icons/PyTorch-Dark.svg" },
      { name: "TensorFlow", src: "/icons/TensorFlow-Dark.svg" },
      { name: "Scikit-Learn", src: "/icons/ScikitLearn-Dark.svg" },
      { name: "OpenCV", src: "/icons/OpenCV-Dark.svg" },
    ],
  },
];

// Short summaries used for the "AI & ML", etc. skill labels in the resume.
export const skillSummary: string[] = [
  "LLM Inference Serving",
  "Agentic Systems",
  "LangChain / LangGraph",
  "RAG",
  "Prompt Engineering",
  "Distributed Systems",
  "Microservices",
  "REST & GraphQL APIs",
  "CI/CD",
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
] as const;
