import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn, scrollBehavior } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Organizations", href: "#organizations" },
  { name: "Contact", href: "#contact" },
  { name: "StudioMitesh", href: "/music" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const mounted = useRef(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: scrollBehavior() });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // scroll-spy: last section whose top has passed the header
      let current = "";
      for (const item of navigation) {
        if (!item.href.startsWith("#")) continue;
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top <= 120) current = item.href;
      }
      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    location.pathname === "/"
      ? href === "/" ? activeSection === "" : href === activeSection
      : location.pathname === href;

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (!href.startsWith('#')) {
      if (href === location.pathname) window.scrollTo({ top: 0, behavior: scrollBehavior() });
      else navigate(href);
      return;
    }

    if (location.pathname === '/' && location.hash === href) {
      scrollToSection(href); // same hash: no navigation, so no effect to scroll for us
      return;
    }
    navigate({ pathname: '/', search: location.pathname === '/' ? location.search : '', hash: href });
  };

  // Mount: start at the top unless the URL has a #section. Later hash changes scroll to it.
  // A dropped hash (e.g. filter click) deliberately does nothing.
  useEffect(() => {
    const first = !mounted.current;
    mounted.current = true;
    if (location.hash) {
      const timer = setTimeout(() => scrollToSection(location.hash), 100);
      return () => clearTimeout(timer);
    }
    if (first) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}
          className="text-xl font-bold tracking-tight transition-all hover:opacity-80"
        >
          Mitesh Shah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-all hover-underline",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            className="ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="animate-fade-in fixed inset-0 top-16 z-40 bg-background px-6 py-8 md:hidden">
          <nav>
            <ul className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={cn(
                      "block text-lg font-medium transition-all",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;