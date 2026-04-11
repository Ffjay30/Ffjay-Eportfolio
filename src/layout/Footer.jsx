const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="w-full px-6 md:px-10 lg:px-14 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            FLORENZ JAY<span className="text-primary">.</span>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

         
        </div>
      </div>
    </footer>
  );
};