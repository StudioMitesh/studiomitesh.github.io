
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
import { experiences } from "@/data/experiences";
import { organizations } from "@/data/organizations";
import { groupedSkills } from "@/data/skills";

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
