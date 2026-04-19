import { Button } from "@/components/Button";
import {
  ChevronDown,
  Download,
  Mail,
  Code2,
  Brain,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const technicalSkills = [
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "Arduino",
  "Android Studio",
  "Circuit and Logic Design",
  "System Troubleshooting",
  "MySQL",
  "Oracle",
  "Firebase",
  "SQL Server",
];

const softSkills = [
  "Leadership",
  "Effective Communication",
  "Analytical Problem-Solving",
  "Adaptability",
  "Collaborative Teamwork",
  "Creative Innovation",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />

        {/* light grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,0,0,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,0,0,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* soft radial accents */}
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center min-h-[85vh]">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3 animate-fade-in">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Computer Engineering Student
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/80">
                Developer
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight animate-fade-in animation-delay-100">
                <span className="block text-foreground">Florenz Jay</span>
                <span className="block text-primary">Francisco</span>
              </h1>

              <p className="max-w-3xl text-xl md:text-2xl font-semibold text-foreground leading-snug animate-fade-in animation-delay-200">
                Building practical software and embedded solutions through clean
                development, structured system thinking, and real-world
                problem-solving.
              </p>

              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-8 animate-fade-in animation-delay-300">
                I am a dedicated Computer Engineering student with experience in
                software development, embedded systems, circuit logic, database
                management, and troubleshooting. I aim to create useful,
                efficient, and technology-driven solutions while continuously
                growing as a developer and future IT professional.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button
                size="lg"
                asChild
                className="rounded-full px-7 h-14 text-base font-semibold bg-primary text-primary-foreground hover:bg-[var(--color-highlight)]"
              >
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                size="lg"
                asChild
                className="rounded-full px-7 h-14 text-base font-semibold border border-primary/20 bg-secondary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Link to="/school-journey" className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  School Journey
                </Link>
              </Button>

              <AnimatedBorderButton
                asChild
                className="rounded-full px-7 h-14 text-base font-semibold border border-primary/20 text-primary bg-card hover:bg-secondary"
              >
                <a
                  href="/Florenz_Jay_Francisco_Resume.pdf"
                  download="Florenz_Jay_Francisco_Resume.pdf"
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </AnimatedBorderButton>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 h-14 text-base font-semibold text-foreground hover:border-primary/30 hover:text-primary hover:bg-secondary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 animate-fade-in animation-delay-500">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-primary">
                  {technicalSkills.length}+
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Technical Skills
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-primary">
                  {softSkills.length}+
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Soft Skills
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-primary">Open</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-[470px] mx-auto rounded-[2rem] border border-primary/15 bg-secondary/40 p-5 shadow-[0_20px_60px_rgba(139,0,0,0.08)]">
              <div className="rounded-[1.75rem] border border-border bg-card p-6 md:p-8">
                <div className="flex gap-2 mb-8">
                  <span className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-primary" />
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl scale-110" />
                    <div className="relative rounded-full p-2 border border-primary/20 bg-secondary">
                      <img
                        src="/profile-photo.jpg"
                        alt="Florenz Jay Francisco"
                        className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-secondary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary text-center">
                    Seeking Growth Opportunities
                  </span>
                </div>

                <p className="text-center text-xs uppercase tracking-[0.35em] text-primary mb-4 font-semibold">
                  Career Focus
                </p>

                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                  Practical systems with modern solutions
                </h2>

                <p className="text-center text-muted-foreground leading-8 mb-8">
                  Focused on software development, embedded systems, database
                  solutions, and building clean, useful applications that solve
                  real user needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2 font-semibold">
                      Strength
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      System Thinking
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2 font-semibold">
                      Focus
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      Software & Embedded Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24 animate-fade-in animation-delay-600" id="skills">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Technical and professional strengths
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              A balanced mix of development skills and workplace readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[2rem] border border-border bg-card p-7 md:p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-primary/20 bg-secondary text-sm md:text-base text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-7 md:p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Soft Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-primary/20 bg-secondary text-sm md:text-base text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};