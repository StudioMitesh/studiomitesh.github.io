
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
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
import nibble from "../assets/nibble.png";
import swolemate from "../assets/swolemate.png";
import nba from "../assets/nbashot.png";
import breakthesilence from "../assets/breakthesilence.jpeg";
import neuraqed from "../assets/neuraqed.png";
import breast from "../assets/breastcancer.jpg";
import energy from "../assets/energyefficiency.png";
import march from "../assets/marchmadness.png";
import mitesh from "../assets/mitesh.jpg";

// This would ideally be populated from actual image files
const projectImages = {
  nibble, swolemate, nba, breakthesilence, neuraqed, breast, energy, march
};

const skillIcons = {
  // Programming Languages
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
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
};

const projects = [
  {
    title: "Nibble",
    description: "A web and mobile app connecting street vendors to customers, helping them build their brands. Currently being further developed and expanded.",
    image: projectImages.nibble,
    link: "https://nibble-a1.netlify.app/",
  },
  {
    title: "SwoleMate: Your AI Fitness Companion",
    description: "A fitness tracking and coaching app that tracks workouts and provides form feedback based on live camera inputs. Version 2 is currently in development.",
    image: projectImages.swolemate,
    link: "https://devpost.com/software/swolemate-r2lug9",
  },
  {
    title: "NBA Shot Efficiency Classifier",
    description: "A data science project that classifies shot selection efficiency of NBA players based on their stats and shot chart data, helping evaluate effectiveness for fantasy basketball and sports betting.",
    image: projectImages.nba,
    github: "https://github.com/leozheng829/NBA_-ShotEfficiency",
  },
  {
    title: "Break the Silence",
    description: "A gesture-recognition app that helps facilitate nonverbal communication through computer vision and LLM-integrated conversations.",
    image: projectImages.breakthesilence,
    link: "https://devpost.com/software/break-the-silence-76okpu",
  },
  {
    title: "NeuraQED: Quantum Error Correction",
    description: "A neural network based approach to correcting errors in low-level, low-depth quantum computers using sequence matching and novel quantum-based activation function.",
    image: projectImages.neuraqed,
    link: "https://docs.google.com/presentation/d/e/2PACX-1vTcCRLY4frV-h2hEd2er7iCXF3XIB6K5sq1rDhEMfaEDaatCjkmc14PsbFGa1AlRMT878_1OPG7wqcY/pub?start=false&loop=false&delayms=15000",
  },
  {
    title: "Predictive Vision Analysis of Breast Cancer Cells",
    description: "A data science and computer vision project that explored aggregating data from breast cancer cells to expedite diagnoses and improve quick treatment.",
    image: projectImages.breast,
    github: "https://github.com/StudioMitesh/GSMSTTSADataScience24",
  },
  {
    title: "Energy Efficiency Scorer Tool",
    description: "A data science and machine learning app that helps buildings improve energy efficiency through decision tree classifiers of building energy data.",
    image: projectImages.energy,
    github: "https://github.com/StudioMitesh/LA-Energy-Efficiency-py",
  },
  {
    title: "March Madness Tournament Simulator",
    description: "A prediction app that simulates the tournament using game-by-game simulations based on historical trends, team performance, and conference-wide stats.",
    image: projectImages.march,
    github: "#",
  },
];

const experiences = [
  {
    company: "TechBridge Inc.",
    title: "Software Project Management Process Intern",
    location: "Atlanta, GA",
    date: "July 2024 - October 2024",
    description: [
      "Nonprofit technical consulting group serving 50+ ATL nonprofits & 70,000+ affected individuals through technology solutions",
      "Developed a comprehensive process flow model for tech implementation projects using BPMN flowchart to unify teams towards 30% increase in \"Salesforce services\" & Azure-cloud solutions project approval ratings from nonprofit clients in Metro-Atlanta",
      "Integrated parametric & bottom-up cost estimation in Agile methodology for better workflow of software development lifecycle"
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
  },
  {
    company: "FoodFinder",
    title: "Summer Operations Intern",
    location: "Duluth, GA",
    date: "June 2022 - July 2022",
    description: [
      "Nonprofit that maintains online database/map of 60,000+ food pantries/assistance programs across America",
      "Completed a data validation and updation project for over 1000 food pantries in Georgia to clean/update Excel spreadsheets behind website, created Google AppsScript program to write optimized search queries for efficient data collection",
      "Built a Selenium/BeautifulSoup web scraping tool to compile accurate information to fill data gaps for verified food pantries",
      "Designed marketing strategies and analytics presentations to present on Google-based sponsorship services"
    ]
  }
];

const organizations = [
  {
    title: "HexLabs Inc.",
    role: "Operations Team Member",
    date: "November 2024 - Present",
    description: [
      "Help organize logistics and operations for smooth flow of hackathon events with 1500+ participants",
      "Organize swag like shirts and stickers, food orders, bookings for rooms and event spaces for all attendees"
    ]
  },
  {
    title: "Grand Challenges Living Learning Community at Georgia Tech",
    role: "Community Member",
    description: [
      "Selected as one of 240 students to build and learn through the design process",
      "Building a better, cheaper alternative to white and smart canes for improved navigational independence and mobility for blind people"
    ]
  },
  {
    title: "Georgia Tech Office of Competitive Sports",
    role: "Intramural Official",
    description: [
      "Officiate for sports like soccer, volleyball, flag football, basketball",
      "Help facilitate smooth communication across the sports and within the organization"
    ]
  },
  {
    title: "Georgia Tech VIP - Interactive Music Group Team",
    role: "Team Member",
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
    description: [
      "Selected as one of 64 students to attend a 4-week summer research and entrepreneurial design development program at the University of Calgary"
    ]
  },
  {
    title: "Boy Scouts Troop 846",
    role: "Eagle Scout of America",
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
  { name: "C++", icon: skillIcons.cpp, category: "Programming Languages" },
  { name: "HTML", icon: skillIcons.html, category: "Programming Languages" },
  { name: "CSS", icon: skillIcons.css, category: "Programming Languages" },
  { name: "JavaScript", icon: skillIcons.javascript, category: "Programming Languages" },
  { name: "TypeScript", icon: skillIcons.typescript, category: "Programming Languages" },
  { name: "R", icon: skillIcons.r, category: "Programming Languages" },
  { name: "Ruby", icon: skillIcons.ruby, category: "Programming Languages" },
  { name: "C", icon: skillIcons.c, category: "Programming Languages" },
  { name: "Swift", icon: skillIcons.swift, category: "Programming Languages" },
  
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
];

const Index = () => {
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
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-secondary/30 pt-16">
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
            Projected to graduate in May 2026
          </p>
          <div className="animate-fade-in mt-8 flex items-center space-x-4">
            <a
              href="https://github.com/StudioMitesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium shadow-sm transition-all hover:bg-card hover:shadow-md"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/miteshmshah/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium shadow-sm transition-all hover:bg-card hover:shadow-md"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/music"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium shadow-sm transition-all hover:bg-card hover:shadow-md"
            >
              <span>StudioMitesh</span>
            </a>
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
      <section id="experience" className="bg-white py-16 md:py-24">
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
      
      {/* Projects Section */}
      <section id="projects" className="bg-secondary/30 py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                github={project.github}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="bg-white py-16 md:py-24">
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
      <section id="organizations" className="bg-secondary/30 py-16 md:py-24">
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
                I'm pursuing a Bachelor of Science in Computer Science with a specialization in Modeling, Simulation, and Intelligence at Georgia Tech.
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
      <section id="contact" className="bg-white py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Contact</h2>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-8 text-lg text-muted-foreground animate-on-scroll">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center justify-center space-y-6 animate-on-scroll">
              <a
                href="mailto:hello@example.com"
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
                  className="rounded-full bg-white p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/miteshmshah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
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
