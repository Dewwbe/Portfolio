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
      period: "2022 – 2026",
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
    role: "Junior Full-stack Developer",
    company: "Efutures Pvt Ltd",
    period: "Mar 2025 – Present",
    summary: "Contributing to the SinqueAI and Seylan Trade applications.",
    points: [
      "Corporate clients use Seylan Trade to prepare, review and approve trade-finance applications",
      "Covers letters of credit and amendments, telegraphic transfers, guarantees, import loans and packing credit loans",
    ],
    tools: ["Node.js (TypeScript)", "React", "SQLite", "Supabase"],
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
    points: ["Built chatbots in Python", "Automated web scraping with Selenium"],    tools: ["Python", "Selenium"],
  },
];

// image: screenshots live in public/screenshots/. If an image file is missing,
// the card falls back to its own illustrated cover.
// link: TODO — paste each "View Application" URL from your CV.
export const featuredProjects = [
  {
    id: "consultai",
    name: "ConsultAI",
    tagline: "Governed multi-agent consulting platform",
    problem:
      "Answering strategic financial questions, such as whether to enter a market or make an investment, with evidence a decision-maker can trust.",
    solution:
      "Nine specialised agents produce costed, evidence-backed recommendations with calculated ROI, NPV and payback, under a policy engine, an AI Guardian and a human approval step for high-risk decisions. Integrates Azure OpenAI, AI Search, Databricks, Cosmos DB and Application Insights, and is deployed on Azure Container Apps.",
    results: [
      { value: "9", label: "specialised agents under a policy engine and AI Guardian" },
      { value: "600+", label: "unit tests plus Playwright end-to-end tests" },
      { value: "Azure", label: "deployed on Container Apps with OpenTelemetry monitoring" },
    ],
    stack: [
      "FastAPI", "Pydantic", "LangGraph", "SQLAlchemy", "PostgreSQL/SQLite", "Azure OpenAI", "Azure AI Search",
      "Databricks", "Azure Monitor/OpenTelemetry", "React", "TypeScript", "Vite", "Tailwind CSS",
      "TanStack Query", "Recharts", "Docker", "GitHub Actions",
    ],
    icon: "BrainCircuit",
    palette: ["#8B5CF6", "#3D5AFE"],
    image: "/screenshots/ss1.png",
    link: "",
  },
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
    stack: [
      "Python", "pandas", "PySpark", "Apache Airflow", "PostgreSQL", "SQLAlchemy", "FastAPI", "Pydantic", "Redis",
      "SciPy", "statsmodels", "XGBoost", "scikit-learn", "Power BI (DAX)", "Excel", "Docker", "Docker Compose",
      "GitHub Actions", "pytest", "mypy", "Jupyter", "Kaggle",
    ],
    icon: "ChartNoAxesCombined",
    palette: ["#00B3A4", "#3D5AFE"],
    image: "/screenshots/ss2.png",
    link: "",
  },
  {
    id: "tracelake",
    name: "TraceLake",
    tagline: "AML transaction monitoring on Azure Databricks",
    problem: "Spotting money-laundering patterns and sanctioned parties across a high volume of transactions.",
    solution:
      "A Bronze/Silver/Gold lakehouse with five detection rules, fuzzy sanctions screening, SCD Type 2 history and data-quality checks. Deployed with Databricks Asset Bundles on serverless compute and reported through a three-page Power BI dashboard. Built and tested on synthetic data.",
    results: [
      { value: "5", label: "AML detection rules plus fuzzy sanctions screening" },
      { value: "SCD Type 2", label: "history with data-quality checks" },
      { value: "3-page", label: "Power BI dashboard" },
    ],
    stack: ["Azure Databricks", "PySpark", "Delta Lake", "Unity Catalog", "Power BI"],
    icon: "ShieldCheck",
    palette: ["#00E5FF", "#8B5CF6"],
    image: "/screenshots/ss3.png",
    link: "",
  },
  {
    id: "journal-entry-testing",
    name: "Journal Entry Testing & Audit Analytics",
    tagline: "Full-population audit testing of a general ledger",
    problem: "Auditors usually sample journals, so management-override and cut-off risks can slip through.",
    solution:
      "Applies 17 risk-based audit tests to every journal in a general ledger rather than a sample. Using SQL Server, Power BI and DAX, it flags management-override indicators, cut-off risks and access-control failures, and confirms population completeness against the trial balance. The synthetic data has planted anomalies so each test could be validated.",
    results: [
      { value: "17", label: "risk-based audit tests" },
      { value: "Every", label: "journal tested, not a sample" },
      { value: "Reconciled", label: "population completeness against the trial balance" },
    ],
    stack: ["SQL Server 2025", "SSMS", "Power BI Desktop", "DAX"],
    icon: "Layers",
    palette: ["#FFB400", "#FF6B3D"],
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
    stack: [
      "Flutter", "FastAPI", "Python", "Google Colab", "Kaggle", "Librosa", "MongoDB", "CNNs", "BiLSTM",
      "LSTM on MFCC", "Figma", "GitHub", "Spotify",
    ],
    icon: "HeartHandshake",
    palette: ["#8B5CF6", "#00B3A4"],
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
    stack: ["Next.js", "FastAPI", "LangGraph", "OpenAI", "MCP", "PostgreSQL", "Docker Compose"],
    icon: "Plane",
    palette: ["#FFB400", "#E6337A"],
    image: "",
    link: "",
  },
  {
    id: "smartgrow",
    name: "SmartGrowAI",
    tagline: "IoT microgreen cultivation with an intelligent policy recommender",
    problem: "Watering microgreens precisely and catching pump, valve, leak and sensor faults before they ruin a crop.",
    solution:
      "The backend for an ESP32-controlled microgreen rack with solenoid valves and moisture, temperature and light sensors, behind a JWT-secured REST API documented in Swagger and Postman. A closed irrigation loop combines a model that predicts moisture response to a water dose, an anomaly detector that compares flow with moisture response, and a policy that recommends the smallest safe dose.",
    results: [
      { value: "Closed loop", label: "irrigation from dose prediction to recommendation" },
      { value: "4 faults", label: "detected: pump, valve, leak and sensor" },
      { value: "Power BI", label: "dark-themed dashboard plus automated tests" },
    ],
    stack: ["FastAPI", "MongoDB", "Python", "scikit-learn", "Power BI", "Docker", "Flutter", "MQTT", "IoT devices"],
    icon: "Sprout",
    palette: ["#22C55E", "#00B3A4"],
    image: "",
    link: "",
  },
];

export const otherProjects = [
  {
    name: "Clickup: Enterprise Collaboration Platform",
    text: "Multi-tenant SaaS monorepo with NestJS, Prisma, BullMQ and Socket.IO, four-level RBAC and strict tenant isolation.",
    stack: ["NestJS", "PostgreSQL", "Redis", "React"],
    link: "",
  },
  {
    name: "NomNom",
    text: "Food ordering and delivery system: ten microservices behind an NGINX gateway, orchestrated with Kubernetes, with Stripe payments.",
    stack: ["Spring Boot", "Express.js", "Kubernetes", "Next.js"],
    link: "",
  },
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
      { name: "TanStack Query", icon: null },
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
      { name: "R", icon: d("r/r-original") },
      { name: "FastAPI", icon: d("fastapi/fastapi-original") },
      { name: "Pydantic", icon: null },
      { name: "PHP", icon: d("php/php-original") },
      { name: "C", icon: d("c/c-original") },
      { name: "C++", icon: d("cplusplus/cplusplus-original") },
      { name: ".NET", icon: d("dot-net/dot-net-original") },
      { name: "Go", icon: d("go/go-original") },
      { name: "Socket.IO", icon: d("socketio/socketio-original") },
      { name: "Swagger", icon: d("swagger/swagger-original") },
      { name: "Postman", icon: d("postman/postman-original") },
      { name: "MQTT", icon: null },
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
      { name: "Azure Cosmos DB", icon: d("cosmosdb/cosmosdb-original") },
    ],
  },
  {
    id: "ds",
    label: "Data science & ML",
    items: [
      { name: "pandas", icon: d("pandas/pandas-original") },
      { name: "NumPy", icon: d("numpy/numpy-original") },
      { name: "PySpark", icon: d("apachespark/apachespark-original") },
      { name: "Hadoop", icon: d("hadoop/hadoop-original") },
      { name: "Databricks", icon: null },
      { name: "Delta Lake", icon: null },
      { name: "Unity Catalog", icon: null },
      { name: "Apache Airflow", icon: d("apacheairflow/apacheairflow-original") },
      { name: "scikit-learn", icon: d("scikitlearn/scikitlearn-original") },
      { name: "TensorFlow", icon: d("tensorflow/tensorflow-original") },
      { name: "Keras", icon: d("keras/keras-original") },
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
      { name: "Azure OpenAI", icon: null },
      { name: "Azure AI Search", icon: null },
      { name: "Gemini API", icon: null },
      { name: "RAG", icon: null },
      { name: "MCP", icon: null },
    ],
  },
  {
    id: "viz",
    label: "Visualisation & analytics",
    items: [
      { name: "Power BI (DAX)", icon: null },
      { name: "Power BI Semantic Models", icon: null },
      { name: "Excel", icon: null },
      { name: "Matplotlib", icon: d("matplotlib/matplotlib-original") },
      { name: "Seaborn", icon: null },
      { name: "Recharts", icon: null },
    ],
  },
  {
    id: "devops",
    label: "DevOps & cloud",
    items: [
      { name: "Docker", icon: d("docker/docker-original") },
      { name: "Docker Compose", icon: d("docker/docker-original") },
      { name: "Kubernetes", icon: d("kubernetes/kubernetes-original") },
      { name: "Azure", icon: d("azure/azure-original") },
      { name: "Azure Container Apps", icon: null },
      { name: "Azure Monitor / OpenTelemetry", icon: d("opentelemetry/opentelemetry-original") },
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
      { name: "Playwright", icon: d("playwright/playwright-original") },
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

// Photos live in public/screenshots/. A missing photo is hidden rather than shown broken.
export const activities = {
  items: [
    {
      event: "HackX by University of Kelaniya",
      project: "SmartGrow AI: An IoT-Enabled Microgreen Cultivation System",
      note: "Selected for the semi-finals (ongoing)",
    },
    {
      event: "DesignGenix",
      project: "SLIIT",
      note: "",
    },
  ],
  photos: [
    { src: "/screenshots/pic1.png", alt: "Intracurricular activity photo 1" },
    { src: "/screenshots/pic2.png", alt: "Intracurricular activity photo 2" },
    { src: "/screenshots/pic3.png", alt: "Intracurricular activity photo 3" },
  ],
};
