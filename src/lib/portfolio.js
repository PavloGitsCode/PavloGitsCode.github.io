export const aboutItems = [
  {
    icon: "/images/icons/code.png",
    title: "Clean Code",
    text: "Writing maintainable, readable, and scalable code that is easier to extend over time."
  },
  {
    icon: "/images/icons/innovation.png",
    title: "Innovation",
    text: "Exploring practical ways to solve technical problems with thoughtful, creative solutions."
  },
  {
    icon: "/images/icons/systems.png",
    title: "System Design",
    text: "Breaking requirements into reliable architectures with performance, clarity, and long-term maintainability in mind."
  }
];

export const skills = [
  {
    title: "Languages & Core",
    items: ["Java", "C", "JavaScript"]
  },
  {
    title: "Web / Frontend / Full-Stack",
    items: ["HTML", "CSS", "Svelte", "Vanilla JavaScript"]
  },
  {
    title: "Databases & Data",
    items: ["PostgreSQL", "SQLite"]
  },
  {
    title: "Systems & Tools",
    items: ["Linux", "Terminal / CLI tooling", "Makefiles", "Git"]
  },
  {
    title: "Interests & Learning",
    items: [
      "Embedded systems & hardware interfacing",
      "Systems design & architecture",
      "Electronics & Microcontrollers"
    ]
  }
];

export const projects = [
  {
    title: "GigFlow",
    description:
      "A full-stack event marketplace that connects planners with entertainers through event discovery, vendor profiles, applications, messaging, analytics, and a Smart Planner workflow.",
    technologies: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    image: "/images/GigFlow.png",
    link: "https://github.com/ncortes04/Hackathon-2026"
  },
  {
    title: "NetScan",
    description:
      "A Linux C network scanner that discovers local IPv4 devices with ARP requests and labels vendors from an OUI database.",
    technologies: ["C", "libpcap", "ARP", "OUI lookup"],
    image: "/images/NetScanDemo.png",
    link: "https://github.com/PavloGitsCode/NetScan"
  },
  {
    title: "Hex Converter",
    description: "A decimal, binary, and hexadecimal converter built in C.",
    technologies: ["C", "raylib"],
    image: "/images/HexConverter.png",
    link: ""
  },
  {
    title: "CLI Filechecker",
    description: "A command-line tool for checking magic bytes and SHA-256 hashes.",
    technologies: ["C", "libssl", "sqlite3"],
    image: "/images/FileChecker.png",
    link: "https://github.com/PavloGitsCode/Filechecker"
  }
];

export const experience = [
  {
    title: "Tech Startup Club",
    meta: "Student builder community",
    text: "Collaborative student environment for learning, building, and discussing technical ideas and projects.",
    highlights: [
      "Participate in peer technical reviews and project planning discussions.",
      "Use club time to explore product ideas, architecture tradeoffs, and implementation paths."
    ]
  },
  {
    title: "UW Tacoma - B.A. Computer Science & Business Data Analytics (In Progress)",
    meta: "Computer Science + Business Data Analytics",
    text: "Developing a foundation in software engineering, systems thinking, and practical computer science problem solving.",
    highlights: [
      "Coursework and projects span programming, data, algorithms, systems, and applied problem solving.",
      "Current focus areas include full-stack applications, low-level systems work, and security-aware software."
    ]
  },
  {
    title: "Hackathon Product Development",
    meta: "GigFlow full-stack marketplace",
    text: "Built and iterated on a production-style event marketplace with authentication, dashboards, search, messaging, and database-backed workflows.",
    highlights: [
      "Connected frontend user flows to FastAPI routes and SQL-backed marketplace data.",
      "Shipped practical user-facing features under fast-changing requirements."
    ]
  }
];

export const projectFocus = [
  {
    label: "Full-stack apps",
    text: "React, Svelte, FastAPI, routing, forms, dashboards, and API-backed workflows."
  },
  {
    label: "Systems programming",
    text: "C projects involving networking, file inspection, hashing, CLI tools, and Linux development."
  },
  {
    label: "Data-aware design",
    text: "PostgreSQL, SQLite, schema design, caching, and features built around searchable structured data."
  }
];

export const socials = [
  {
    href: "https://linkedin.com/in/pavlo-puzik",
    label: "LinkedIn profile",
    icon: "/images/icons/in.png"
  },
  {
    href: "https://github.com/PavloGitsCode",
    label: "GitHub profile",
    icon: "/images/icons/git.png"
  },
  {
    href: "/images/PavloPuzik_Resume.pdf",
    label: "Resume PDF",
    icon: "/images/icons/resume.png"
  }
];
