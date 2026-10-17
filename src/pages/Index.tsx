
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceCard from "@/components/ExperienceCard";
import OrganizationCard from "@/components/OrganizationCard";
import SkillIcon from "@/components/SkillIcon";
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Mail 
} from "lucide-react";
import mitesh from "../assets/mitesh.jpg";

const skillIcons = {
  // Programming Languages
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  
  // Frameworks & Libraries
  pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  selenium: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  scikitlearn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  springboot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  
  // Tools & Technologies
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  gcp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  excel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  mssql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  trello: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  duckdb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/duckdb/duckdb-original.svg",
  bigquery: "https://cdn.simpleicons.org/googlebigquery/669DF6",
  snowflake: "https://cdn.simpleicons.org/snowflake/29B5E8",
};

const experiences = [
  {
    company: "PayPal",
    title: "Software Engineer Intern (Payment Compliance Platform)",
    location: "San Jose, CA",
    date: "May 2026 - August 2026",
    description: [
      "Built a Python pipeline ingesting 40M+ daily compliance events from BigQuery into DuckDB, mapping transaction variants to compliance decisions at zero added infra cost, fully automated via scheduled notebook",
      "Developed a Java Spring Boot Daemon listener consuming real-time compliance logs off a Kafka topic in the QA environment, replicating extraction logic to catalog Functional Test (FT) structure and surface coverage analytics",
      "Designed a skills-guided AI agent managing 5,000+ FTs, auto-generating new tests and answering natural-language queries on variant flows to close compliance test coverage gaps"
    ]
  },
  {
    company: "Snowflake",
    title: "Software Engineer Intern (AI/ML)",
    location: "Menlo Park, CA",
    date: "January 2026 - April 2026",
    description: [
      "Architected an end-to-end agentic AI workflow for creation, evaluation, and optimization of custom Snowflake Cortex AI Functions, enabling conversational function generation for 80% of new production-scale use cases",
      "Drove average 10%+ accuracy improvements over Snowflake built-in and SOTA benchmarks via synthetic data generation, QA testing pipelines, prompt optimization using GEPA, and Python/SQL code generation",
      "Built async/parallelized UDF and stored procedure workflows with AI function versioning and Python-based custom metric definitions, cutting pipeline latency by ~50% on large-scale Snowflake datasets"
    ]
  },
  {
    company: "United Parcel Service (Roadie Inc.)",
    title: "Software Engineering Intern",
    location: "Atlanta, GA",
    date: "May 2025 - December 2025",
    description: [
      "Roadie is a crowdsourced delivery platform and UPS subsidiary handling 200k+ daily shipments across the U.S.",
      "Engineered a Golang backend service for the fastest-growing UPS branch, RoadieXD/MI, to optimize temporal and capacity-based delivery allocation, scaling throughput from 100K to 400K+ daily shipments for 30+ clients",
      "Refactored logistics microservices' REST API calls to a PostgreSQL backend using Kafka messaging and Redis caching, reducing latency by 500ms/request and tripling delivery planning efficiency"
    ]
  },
  {
    company: "Georgia Tech Memory Systems Lab",
    title: "Research Intern under Professor M. Qureshi - NeuraQED: Quantum Error Correction via Simulated NNs",
    location: "Atlanta, GA",
    date: "August 2023 - April 2024",
    description: [
      "Researched a novel algorithm for quantum error correction using hybrid neural network/AI model & activation function through quantum circuit code simulation to improve computing accuracy by 6% decrease in logical error rate",
      "Developed new superposed activation function (NeurA) for adaptability to noisy codes by 40% decrease in physical error rate",
      "Received alternate bid to present at National Junior Science & Humanities Symposium (6/60 in GA) for presentation + paper"
    ]
  }
];

const organizations = [
  {
    title: "HexLabs Inc.",
    role: "Co-Director of Operations",
    date: "November 2024 - Present",
    description: [
      "Directed end-to-end operations at HackGT13, the Southeast's largest collegiate hackathon, for 1,400+ attendees",
      "Led a 20-person operations team managing a $100K budget, coordinating logistics with 25+ sponsors/vendors"
    ]
  },
  {
    title: "Grand Challenges Living Learning Community at Georgia Tech",
    role: "Community Member",
    date: "August 2024 - May 2025",
    description: [
      "Selected as one of 240 students to build and learn through the design process",
      "Building a better, cheaper alternative to white and smart canes for improved navigational independence and mobility for blind people"
    ]
  },
  {
    title: "Georgia Tech Office of Competitive Sports",
    role: "Intramural Official",
    date: "August 2024 - August 2025",
    description: [
      "Officiate for sports like soccer, volleyball, flag football, basketball",
      "Help facilitate smooth communication across the sports and within the organization"
    ]
  },
  {
    title: "Data Science @ Georgia Tech",
    role: "Sports Analytics Team Project Lead, Outreach Team Member",
    date: "August 2024 - May 2025",
    description: [
      "Lead creation of app to model NBA shot selection efficiency based on advanced metrics/shot chart data to provide a player's efficiency value per dollar for NBA fantasy decision-making using frameworks like Pandas, Seaborn, Scikit-Learn, & Plotly",
      "Gained expertise in web scraping, ML, & full-stack development through stakeholder research and collaboration on outreach"
    ]
  },
  {
    title: "Georgia Tech VIP - Interactive Music Group Team",
    role: "Team Member",
    date: "January 2025 - May 2025",
    description: [
      "Building a virtual reality experience called Wings of Change for a zoo exhibit",
      "Leverages climate data and sonification techniques to create an interactive game-based experience",
      "Visualizes and sonifies the impacts of climate change through bird-like simulation game for children, teens, and young adults"
    ]
  },
  {
    title: "HackGwinnett",
    role: "Co-President",
    date: "August 2021 - April 2024",
    description: [
      "Organized/hosted student-led annual HackGwinnett hackathon (300+ attendees) & HackFest/STEM nights (100+ K-5 students)",
      "Secured $3000+ in event sponsorship, pioneered 8-hr HS hackathon format, & helped create Bogey: Hackathon scoring app",
      "Led weekly & hackathon workshops on beginner ML (classification and regression), JS development, CV, & Firebase databases"
    ]
  },
  {
    title: "SHAD Calgary 2023 Network",
    role: "Fellow",
    date: "Summer 2023",
    description: [
      "Selected as one of 64 students to attend a 4-week summer research and entrepreneurial design development program at the University of Calgary"
    ]
  },
  {
    title: "Boy Scouts Troop 846",
    role: "Eagle Scout of America",
    date: "2017 - 2024",
    description: [
      "Achieved highest rank in Boy Scouts of America"
    ]
  }
];

const skills = [
  // Programming Languages
  { name: "Python", icon: skillIcons.python, category: "Programming Languages" },
  { name: "Java", icon: skillIcons.java, category: "Programming Languages" },
  { name: "SQL", icon: skillIcons.sql, category: "Programming Languages" },
  { name: "Go", icon: skillIcons.go, category: "Programming Languages" },
  { name: "HTML", icon: skillIcons.html, category: "Programming Languages" },
  { name: "CSS", icon: skillIcons.css, category: "Programming Languages" },
  { name: "JavaScript", icon: skillIcons.javascript, category: "Programming Languages" },
  { name: "TypeScript", icon: skillIcons.typescript, category: "Programming Languages" },
  { name: "C", icon: skillIcons.c, category: "Programming Languages" },
  { name: "C++", icon: skillIcons.cpp, category: "Programming Languages" },
  { name: "Swift", icon: skillIcons.swift, category: "Programming Languages" },
  { name: "R", icon: skillIcons.r, category: "Programming Languages" },
  { name: "Ruby", icon: skillIcons.ruby, category: "Programming Languages" },
  
  // Frameworks & Libraries
  { name: "PyTorch", icon: skillIcons.pytorch, category: "Frameworks & Libraries" },
  { name: "TensorFlow", icon: skillIcons.tensorflow, category: "Frameworks & Libraries" },
  { name: "Keras", icon: skillIcons.keras, category: "Frameworks & Libraries" },
  { name: "Pandas", icon: skillIcons.pandas, category: "Frameworks & Libraries" },
  { name: "NumPy", icon: skillIcons.numpy, category: "Frameworks & Libraries" },
  { name: "Flask", icon: skillIcons.flask, category: "Frameworks & Libraries" },
  { name: "React", icon: skillIcons.react, category: "Frameworks & Libraries" },
  { name: "Django", icon: skillIcons.django, category: "Frameworks & Libraries" },
  { name: "Next.js", icon: skillIcons.nextjs, category: "Frameworks & Libraries" },
  { name: "Express", icon: skillIcons.express, category: "Frameworks & Libraries" },
  { name: "OpenCV", icon: skillIcons.opencv, category: "Frameworks & Libraries" },
  { name: "Node.js", icon: skillIcons.nodejs, category: "Frameworks & Libraries" },
  { name: "Tailwind", icon: skillIcons.tailwind, category: "Frameworks & Libraries" },
  { name: "Matplotlib", icon: skillIcons.matplotlib, category: "Frameworks & Libraries" },
  { name: "Selenium", icon: skillIcons.selenium, category: "Frameworks & Libraries" },
  { name: "Scikit-learn", icon: skillIcons.scikitlearn, category: "Frameworks & Libraries" },
  { name: "Spring Boot", icon: skillIcons.springboot, category: "Frameworks & Libraries" },
  
  // Tools & Technologies
  { name: "Git", icon: skillIcons.git, category: "Tools & Technologies" },
  { name: "Azure", icon: skillIcons.azure, category: "Tools & Technologies" },
  { name: "AWS", icon: skillIcons.aws, category: "Tools & Technologies" },
  { name: "Google Cloud", icon: skillIcons.gcp, category: "Tools & Technologies" },
  { name: "MySQL", icon: skillIcons.mysql, category: "Tools & Technologies" },
  { name: "Firebase", icon: skillIcons.firebase, category: "Tools & Technologies" },
  { name: "Excel", icon: skillIcons.excel, category: "Tools & Technologies" },
  { name: "Supabase", icon: skillIcons.supabase, category: "Tools & Technologies" },
  { name: "PostgreSQL", icon: skillIcons.postgres, category: "Tools & Technologies" },
  { name: "SQLite", icon: skillIcons.sqlite, category: "Tools & Technologies" },
  { name: "FastAPI", icon: skillIcons.fastapi, category: "Tools & Technologies" },
  { name: "Microsoft SQL Server", icon: skillIcons.mssql, category: "Tools & Technologies" },
  { name: "MongoDB", icon: skillIcons.mongodb, category: "Tools & Technologies" },
  { name: "Trello", icon: skillIcons.trello, category: "Tools & Technologies" },
  { name: "Jira", icon: skillIcons.jira, category: "Tools & Technologies" },
  { name: "Docker", icon: skillIcons.docker, category: "Tools & Technologies" },
  { name: "Kubernetes", icon: skillIcons.kubernetes, category: "Tools & Technologies" },
  { name: "Redis", icon: skillIcons.redis, category: "Tools & Technologies" },
  { name: "Apache Kafka", icon: skillIcons.kafka, category: "Tools & Technologies" },
  { name: "Postman", icon: skillIcons.postman, category: "Tools & Technologies" },
  { name: "Grafana", icon: skillIcons.grafana, category: "Tools & Technologies" },
  { name: "BigQuery", icon: skillIcons.bigquery, category: "Tools & Technologies" },
  { name: "DuckDB", icon: skillIcons.duckdb, category: "Tools & Technologies" },
  { name: "Snowflake", icon: skillIcons.snowflake, category: "Tools & Technologies" }
];

const Index = () => {
  useEffect(() => {
    document.title = "Mitesh Shah - Portfolio";
  }, []);

  // Observe on every mount so cards still fade in after navigating back from /music
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-secondary/30 pt-16">
        <div className="section-container flex flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br">
            <img src={mitesh} alt="StudioMitesh" className="h-68 w-68 rounded-full object-cover" />
          </div>
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Mitesh Shah
          </h1>
          <p className="animate-fade-in mt-6 max-w-2xl text-lg text-muted-foreground">
            Computer Science Student at Georgia Tech
          </p>
          <p className="animate-fade-in mt-4 max-w-2xl text-base text-muted-foreground">
            BS in May 2027 | MS in May 2028 (BS/MS in Computer Science, Machine Learning)
          </p>
          <div className="animate-fade-in mt-8 flex items-center space-x-4">
            <a
              href="https://github.com/StudioMitesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-card px-4 py-2 font-medium shadow-sm transition-all hover:bg-card hover:shadow-md"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/miteshmshah/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-card px-4 py-2 font-medium shadow-sm transition-all hover:bg-card hover:shadow-md"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <Link
              to="/music"
              className="flex items-center gap-2 rounded-full bg-card px-4 py-2 font-medium shadow-sm transition-all hover:bg-card hover:shadow-md"
            >
              <span>StudioMitesh</span>
            </Link>
          </div>
          <div className="animate-fade-in mt-20">
            <a
              href="#experience"
              className="flex animate-float flex-col items-center text-sm text-muted-foreground"
            >
              <span className="mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="scroll-mt-16 bg-card py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                company={experience.company}
                title={experience.title}
                location={experience.location}
                date={experience.date}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ProjectsSection />

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16 bg-card py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Skills</h2>
          
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="mb-6 text-xl font-semibold animate-on-scroll">{category}</h3>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {categorySkills.map((skill, index) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    category={skill.category}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Organizations Section */}
      <section id="organizations" className="scroll-mt-16 bg-secondary/30 py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Organizations & Activities</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {organizations.map((org, index) => (
              <OrganizationCard
                key={org.title}
                title={org.title}
                role={org.role}
                date={org.date}
                description={org.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 animate-on-scroll">
            <h3 className="mb-4 text-xl font-semibold">Academic Coursework</h3>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="mb-4 text-sm">
                I'm pursuing a BS/MS in Computer Science with a Machine Learning focus at Georgia Tech (BS May 2027, MS May 2028), maintaining a <b>4.0</b> GPA. Coursework includes Graduate Computer Vision, Machine Learning, Artificial Intelligence, Algorithmic Design, and Simulation.
              </p>
              <a
                href="https://catalog.gatech.edu/programs/modeling-simulation-intelligence-computer-science-bs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Full Course Catalog</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 bg-card py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Contact</h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-8 text-lg text-muted-foreground animate-on-scroll">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center justify-center space-y-6 animate-on-scroll">
              <a
                href="mailto:miteshshah@gatech.edu"
                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                <Mail className="h-5 w-5" />
                <span>Get in Touch</span>
              </a>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/StudioMitesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/miteshmshah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
