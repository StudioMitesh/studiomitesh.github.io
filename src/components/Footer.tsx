
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-xl font-bold tracking-tight">
              Mitesh Shah
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Computer Science Student @ Georgia Tech
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/StudioMitesh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/miteshmshah/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="rounded-full bg-card p-2 text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Mitesh Shah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
