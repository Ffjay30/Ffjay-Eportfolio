import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "#", label: "Home", sectionId: "home" },
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#experience", label: "Education", sectionId: "experience" },
  { href: "/school-journey", label: "School Journey", isRoute: true },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const link of navLinks.slice().reverse()) {
        if (link.isRoute || link.sectionId === "home") continue;

        const section = document.getElementById(link.sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(link.sectionId);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href, sectionId, closeMobile = false) => {
    if (closeMobile) setIsMobileMenuOpen(false);

    if (href === "#") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveSection("home");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarOffset = -5;
          const top =
            section.getBoundingClientRect().top +
            window.pageYOffset -
            navbarOffset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 100);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarOffset = -5;
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 border-border shadow-sm"
          : "bg-background/70 border-border/70"
      }`}
    >
      <nav className="w-full">
        <div className="w-full flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
          <button
            type="button"
            onClick={() => handleNavClick("#", "home")}
            className="text-2xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            FLORENZ JAY<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.isRoute) {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative pb-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-[2px] h-[2px] bg-primary transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              }

              const isActive =
                location.pathname === "/" &&
                ((link.sectionId === "home" && activeSection === "home") ||
                  activeSection === link.sectionId);

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href, link.sectionId)}
                  className={`relative pb-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] bg-primary transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button size="sm" className="rounded-full px-5" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left py-3 border-b border-border/50 font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              }

              const isActive =
                (link.sectionId === "home" && activeSection === "home") ||
                activeSection === link.sectionId;

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() =>
                    handleNavClick(link.href, link.sectionId, true)
                  }
                  className={`text-left py-3 border-b border-border/50 font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <Button className="mt-4 rounded-xl" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};