// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the site.
// Items marked TODO need a value only you can supply.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Dewmini Navarathne",
  firstName: "Dewmini",
  title: "Software Engineer",
  roles: ["Full-stack developer", "AI-enabled builder", "Data & analytics engineer"],
  mantra: ["Adaptability.", "Resilience.", "Growth."],
  statement:
    "I build full-stack platforms and AI-powered products, from multi-tenant SaaS backends to data pipelines and agentic assistants.",
  photo: "/profile.jpg", // TODO: add your photo at public/profile.jpg
  email: "dewminichamodya54321@gmail.com",
  location: "Sri Lanka",
  cv: "/Dewmini_Navarathne_CV.pdf", // TODO: copy your CV PDF into public/ with this name
  socials: {
    github: "https://github.com/", // TODO: your GitHub profile URL
    linkedin: "https://www.linkedin.com/", // TODO: your LinkedIn profile URL
    medium: "https://medium.com/", // TODO: your Medium profile URL
  },
};

export const about = {
  paragraphs: [
    "I'm a final-year Software Engineering undergraduate at SLIIT with hands-on experience across full-stack development and AI-enabled development. I enjoy backend and frontend engineering equally, and I work comfortably across several languages.",
    "I've built systems on diverse architectures, from microservices behind an API gateway to multi-tenant SaaS monorepos, and I focus on practical solutions that range from intelligent mobile apps to enterprise-level platforms.",
  ],
  exploring: [
    { label: "Cloud technologies", detail: "Deploying and scaling services on AWS and Google Cloud" },
    { label: "DevOps practices", detail: "CI pipelines, containerisation and orchestration with Docker and Kubernetes" },
    { label: "Advanced machine learning", detail: "Forecasting, anomaly detection and deep learning on audio and images" },
    { label: "Agentic & multi-agent AI", detail: "LangGraph orchestration, MCP tool servers and human-in-the-loop approval" },
  ],
  education: [
    {
      school: "Sri Lanka Institute of Information Technology (SLIIT)",
      detail: "BSc (Hons) in Information Technology, specialising in Software Engineering",
      period: "2022 onwards", // TODO: update once you graduate
    },
    {
      school: "Bandarawela Central College",
      detail: "GCE Advanced Level, Biology stream, English medium",
      period: "2021",
    },
  ],
  certifications: [
    { name: "Python for Beginners", issuer: "University of Moratuwa" },
    { name: "Web Design for Beginners", issuer: "" },
    { name: "AI/ML Engineer, Stage I", issuer: "Industry Engagement Unit, SLIIT" },
    { name: "Pieces for Developers", issuer: "" },
    { name: "Introduction to Docker", issuer: "Simplilearn" },
    { name: "I2CASIS research publication", issuer: "Autonomous Control and Intelligent Systems" },
  ],
};

export const strengths = [
  {
    title: "Full-stack range",
    text: "Comfortable across React, Next.js and Flutter on the front, and NestJS, Spring Boot and FastAPI on the back.",
    icon: "Layers",
  },
  {
    title: "System architecture",
    text: "Designed microservices behind NGINX, multi-tenant SaaS with strict tenant isolation, and event-driven job queues.",
    icon: "Network",
  },
  {
    title: "AI integration",
    text: "Shipped agentic assistants, emotion-recognition models and LLM-powered features inside real products.",
    icon: "BrainCircuit",
  },
  {
    title: "Data & analytics",
    text: "Built ETL pipelines, star-schema warehouses, forecasting models and Power BI dashboards end to end.",
    icon: "ChartNoAxesCombined",
  },
  {
    title: "Quality by default",
    text: "CI pipelines with automated tests and static analysis, reaching 240+ tests at about 97% coverage on GulfMart.",
    icon: "ShieldCheck",
  },
  {
    title: "Fast learner",
    text: "Moved between three industry roles and four language ecosystems while studying full time.",
    icon: "Sprout",
  },
];

// Ordered most recent first. The Efutures role is ongoing.
export const experience = [
  {
    role: "Trainee Full-stack Developer",
    company: "Efutures Pvt Ltd",
    period: "Mar 2025 – Present",
    summary: "Contributing to the SinqueAI and Seylan Trade applications.",
    points: [
      "Work on multi-tenant architecture with tenant isolation and role-based access control",
      "Build services with NestJS, TypeScript and Prisma ORM on PostgreSQL and Supabase",
    ],
    tools: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Supabase", "React"],
  },
  {
    role: "Trainee Software Engineer",
    company: "State Printing Corporation (Ministry of Education), Padukka",
    period: "Jul 2025 – Jan 2026",
    summary: "Contributed to an ongoing Transport Management System for SPC.",
    points: [
      "Vehicle and driver registration, cross-department service management, taxi management and service–purchase workflows",
      "Trained on the organisation's ERP ecosystem for inventory, marketing and finance, built on microservices, relational databases and cloud infrastructure",
    ],
    tools: ["Spring Boot", "Java", "MySQL", "Next.js", "Nodemailer", "Docker"],
  },
  {
    role: "Trainee Software Engineer – AI",
    company: "Guardians Solutions Pvt Ltd, Kandy",
    period: "Apr 2025 – Jun 2025",
    summary: "Worked in a data analysis role.",
    points: ["Built chatbots in Python", "Automated web scraping with Selenium"],
    tools: ["Python", "Selenium"],
  },
];

// image: put a screenshot in public/projects/ and set e.g. image: "/projects/gulfmart.png".
// When image is empty, the card renders its own illustrated cover.
// link: TODO — paste each "View Application" URL from your CV.
export const featuredProjects = [
  {
    id: "gulfmart",
    name: "GulfMart",
    tagline: "Supply chain intelligence & risk analytics platform",
    problem: "Turning raw supply chain data into forecasts, anomaly alerts and supplier risk scores that a business team can act on.",
    solution:
      "A PySpark/pandas ETL pipeline orchestrated by Airflow feeds a PostgreSQL star-schema warehouse. Demand forecasting (SARIMA, ETS, XGBoost), anomaly detection and supplier risk scoring are served through a FastAPI REST API with Redis caching and rate limiting.",
    results: [
      { value: "44", label: "DAX measures across a 5-page Power BI dashboard" },
      { value: "240+", label: "automated tests" },
      { value: "~97%", label: "test coverage" },
    ],
    stack: ["PySpark", "Airflow", "PostgreSQL", "FastAPI", "XGBoost", "Power BI", "Docker"],
    icon: "ChartNoAxesCombined",
    palette: ["#00B3A4", "#3D5AFE"],
    image: "",
    link: "",
  },
  {
    id: "clickup",
    name: "Clickup: Enterprise Collaboration Platform",
    tagline: "Multi-tenant SaaS for teams, in the spirit of Jira and ClickUp",
    problem: "Letting many organisations share one platform safely, with real-time updates and fine-grained permissions.",
    solution:
      "A Turborepo monorepo with a NestJS/TypeScript backend on PostgreSQL (Prisma): JWT auth with rotating refresh tokens, task workflows, declarative audit logging and pluggable file storage. BullMQ drives notifications and scheduled jobs, Socket.IO pushes live updates, and a React/Vite client shares typed API contracts with the backend.",
    results: [
      { value: "4-level", label: "role-based access with strict tenant isolation" },
      { value: "Real-time", label: "push over Socket.IO with Redis cache-aside" },
      { value: "CI", label: "GitHub Actions with Jest/Supertest and SonarCloud" },
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ", "React"],
    icon: "Network",
    palette: ["#E6337A", "#8B5CF6"],
    image: "",
    link: "",
  },
  {
    id: "trip-pilot",
    name: "Trip Pilot AI",
    tagline: "Agentic AI travel assistant",
    problem: "Planning trips across hotel search and calendars without letting an AI act on your behalf unchecked.",
    solution:
      "Built with Next.js, FastAPI, LangGraph and OpenAI structured outputs. It orchestrates MCP tool servers for live hotel search (LiteAPI) and Google Calendar via OAuth 2.0, keeps user preferences in PostgreSQL with encrypted token storage, and asks for human approval before any external action.",
    results: [
      { value: "MCP", label: "tool servers orchestrated by a LangGraph agent" },
      { value: "Human-in-the-loop", label: "approval before external actions" },
      { value: "OAuth 2.0", label: "Google Calendar integration with encrypted tokens" },
    ],
    stack: ["Next.js", "FastAPI", "LangGraph", "OpenAI", "PostgreSQL", "Docker"],
    icon: "Plane",
    palette: ["#FFB400", "#E6337A"],
    image: "",
    link: "",
  },
  {
    id: "suwa-manasa",
    name: "Suwa Manasa",
    tagline: "Mental healthcare app for children and adolescents",
    problem: "Helping young people and their trusted adults notice changes in emotional wellbeing early.",
    solution:
      "A Flutter app with a FastAPI/MongoDB backend. It combines JWT authentication, mood tracking with trusted-contact alerts, CNN-based facial emotion recognition, YOLO-based drawing analysis, Gemini-powered story generation, and music emotion classification using MFCC features with LSTM/BiLSTM models.",
    results: [
      { value: "4", label: "AI signals: face, drawing, music and story" },
      { value: "Alerts", label: "to trusted contacts from mood tracking" },
      { value: "LSTM/BiLSTM", label: "music emotion classification on MFCC features" },
    ],
    stack: ["Flutter", "FastAPI", "MongoDB", "CNNs", "YOLO", "Librosa", "Gemini"],
    icon: "HeartHandshake",
    palette: ["#8B5CF6", "#00B3A4"],
    image: "",
    link: "",
  },
  {
    id: "nomnom",
    name: "NomNom",
    tagline: "Food ordering and delivery system",
    problem: "Running ordering, payments and delivery as independent services that can scale separately.",
    solution:
      "Ten microservices (auth, user, session, delivery, payment, order, cart, menu, review, email & notification) behind an NGINX API gateway, containerised with Docker and orchestrated with Kubernetes. Payments via Stripe, SMS via notify.lk, and a Next.js frontend.",
    results: [
      { value: "10", label: "independently deployable services" },
      { value: "NGINX", label: "API gateway in front of every service" },
      { value: "K8s", label: "orchestration with Docker containers" },
    ],
    stack: ["Spring Boot", "Express.js", "MySQL", "MongoDB", "Stripe", "Kubernetes", "Next.js"],
    icon: "UtensilsCrossed",
    palette: ["#FF6B3D", "#FFB400"],
    image: "",
    link: "",
  },
];

export const otherProjects = [
  {
    name: "CeylonAgriGrow",
    text: "MERN web app with Gemini for crop and fertiliser prediction, a pest and disease recommender, and a farmers' marketplace.",
    stack: ["MERN", "Gemini API"],
    link: "",
  },
  {
    name: "Weather API",
    text: "Backend REST API for weather tracking and notifications using OpenWeather, Gemini and Nodemailer on Google Cloud.",
    stack: ["Node.js", "MongoDB", "Google Cloud"],
    link: "",
  },
  {
    name: "ZeroWaste",
    text: "Mobile app for waste-disposal scheduling, tracking, sorting and an eco store.",
    stack: ["React Native", "Firebase"],
    link: "",
  },
  {
    name: "Pneumonia Detection",
    text: "Trained model for pneumonia detection.", // TODO: add a one-line description, dataset and accuracy
    stack: ["Python", "Deep learning"],
    link: "",
  },
];

// Icon paths point to the Devicon set on jsDelivr. Tools without a Devicon logo
// (icon: null) render a coloured monogram tile instead, so nothing shows as broken.
const d = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend & mobile",
    items: [
      { name: "React", icon: d("react/react-original") },
      { name: "Next.js", icon: d("nextjs/nextjs-original") },
      { name: "JavaScript", icon: d("javascript/javascript-original") },
      { name: "TypeScript", icon: d("typescript/typescript-original") },
      { name: "HTML5", icon: d("html5/html5-original") },
      { name: "CSS3", icon: d("css3/css3-original") },
      { name: "Tailwind CSS", icon: d("tailwindcss/tailwindcss-original") },
      { name: "Bootstrap", icon: d("bootstrap/bootstrap-original") },
      { name: "Vite", icon: d("vitejs/vitejs-original") },
      { name: "React Native", icon: d("react/react-original") },
      { name: "Flutter", icon: d("flutter/flutter-original") },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    items: [
      { name: "Node.js", icon: d("nodejs/nodejs-original") },
      { name: "Express.js", icon: d("express/express-original") },
      { name: "NestJS", icon: d("nestjs/nestjs-original") },
      { name: "Java", icon: d("java/java-original") },
      { name: "Spring Boot", icon: d("spring/spring-original") },
      { name: "Python", icon: d("python/python-original") },
      { name: "FastAPI", icon: d("fastapi/fastapi-original") },
      { name: "PHP", icon: d("php/php-original") },
      { name: "C", icon: d("c/c-original") },
      { name: "C++", icon: d("cplusplus/cplusplus-original") },
      { name: ".NET", icon: d("dot-net/dot-net-original") },
      { name: "Go", icon: d("go/go-original") },
      { name: "Socket.IO", icon: d("socketio/socketio-original") },
      { name: "Swagger", icon: d("swagger/swagger-original") },
      { name: "Postman", icon: d("postman/postman-original") },
    ],
  },
  {
    id: "data",
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: d("postgresql/postgresql-original") },
      { name: "MySQL", icon: d("mysql/mysql-original") },
      { name: "MongoDB", icon: d("mongodb/mongodb-original") },
      { name: "Firebase", icon: d("firebase/firebase-original") },
      { name: "SQLite", icon: d("sqlite/sqlite-original") },
      { name: "Oracle", icon: d("oracle/oracle-original") },
      { name: "SQL Server", icon: d("microsoftsqlserver/microsoftsqlserver-original") },
      { name: "Supabase", icon: d("supabase/supabase-original") },
      { name: "Redis", icon: d("redis/redis-original") },
      { name: "Prisma", icon: d("prisma/prisma-original") },
      { name: "SQLAlchemy", icon: d("sqlalchemy/sqlalchemy-original") },
    ],
  },
  {
    id: "ds",
    label: "Data science & ML",
    items: [
      { name: "pandas", icon: d("pandas/pandas-original") },
      { name: "PySpark", icon: d("apachespark/apachespark-original") },
      { name: "Apache Airflow", icon: d("apacheairflow/apacheairflow-original") },
      { name: "scikit-learn", icon: d("scikitlearn/scikitlearn-original") },
      { name: "XGBoost", icon: null },
      { name: "statsmodels", icon: null },
      { name: "SciPy", icon: null },
      { name: "Librosa", icon: null },
      { name: "CNN / LSTM / BiLSTM", icon: null },
      { name: "Jupyter", icon: d("jupyter/jupyter-original") },
      { name: "Google Colab", icon: null },
      { name: "Kaggle", icon: d("kaggle/kaggle-original") },
      { name: "LangGraph", icon: null },
      { name: "OpenAI API", icon: null },
      { name: "Gemini API", icon: null },
    ],
  },
  {
    id: "viz",
    label: "Visualisation & analytics",
    items: [
      { name: "Power BI (DAX)", icon: null },
      { name: "Excel", icon: null },
    ],
  },
  {
    id: "devops",
    label: "DevOps & cloud",
    items: [
      { name: "Docker", icon: d("docker/docker-original") },
      { name: "Kubernetes", icon: d("kubernetes/kubernetes-original") },
      { name: "AWS", icon: d("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "Google Cloud", icon: d("googlecloud/googlecloud-original") },
      { name: "GitHub Actions", icon: d("githubactions/githubactions-original") },
      { name: "NGINX", icon: d("nginx/nginx-original") },
      { name: "Vercel", icon: d("vercel/vercel-original") },
      { name: "Turborepo", icon: null },
      { name: "SonarCloud", icon: null },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    items: [
      { name: "Jest", icon: d("jest/jest-plain") },
      { name: "Supertest", icon: null },
      { name: "Pytest", icon: d("pytest/pytest-original") },
      { name: "JUnit", icon: d("junit/junit-original") },
      { name: "Mockito", icon: null },
      { name: "Selenium", icon: d("selenium/selenium-original") },
      { name: "mypy", icon: null },
    ],
  },
  {
    id: "tools",
    label: "IDEs & version control",
    items: [
      { name: "VS Code", icon: d("vscode/vscode-original") },
      { name: "Visual Studio", icon: d("visualstudio/visualstudio-original") },
      { name: "Android Studio", icon: d("androidstudio/androidstudio-original") },
      { name: "Eclipse", icon: d("eclipse/eclipse-original") },
      { name: "IntelliJ IDEA", icon: d("intellij/intellij-original") },
      { name: "NetBeans", icon: null },
      { name: "SSMS", icon: null },
      { name: "Git", icon: d("git/git-original") },
      { name: "GitHub", icon: d("github/github-original") },
      { name: "Bitbucket", icon: d("bitbucket/bitbucket-original") },
    ],
  },
  {
    id: "design",
    label: "Design & AI tools",
    items: [
      { name: "Figma", icon: d("figma/figma-original") },
      { name: "Draw.io", icon: null },
      { name: "StarUML", icon: null },
      { name: "Claude", icon: null },
      { name: "Lovable", icon: null },
      { name: "Codex", icon: null },
    ],
  },
];
