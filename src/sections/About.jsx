import { Cpu, Database, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Software & Embedded Systems",
    description:
      "Building practical solutions through programming, electronics, and system design.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Working with MySQL, Oracle, Firebase, and SQL Server for organized and efficient data handling.",
  },
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description:
      "Collaborating with teams, organizing events, and contributing to student-led initiatives.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description:
      "Passionate about robotics, automation, AI integration, and creating technology-driven solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
              Driven by innovation,
              <span className="text-primary"> built through learning and hands-on experience.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 leading-8">
              <p>
                I am a dedicated and motivated Computer Engineering student with
                a strong foundation in programming, electronics, and system
                design. My experience includes developing software and embedded
                solutions using Python, Java, C++, and Arduino, along with
                hands-on exposure to AI integration, automation, and database
                management.
              </p>

              <p>
                Through academic and personal projects, I have built systems such
                as an AI-powered waste segregation system, a lost and found
                platform, a ticketing system, and an applicant deployment
                system. These experiences strengthened my problem-solving,
                technical development, and ability to create solutions that are
                both practical and user-focused.
              </p>

              <p>
                Beyond technical work, I also value leadership, teamwork, and
                continuous growth. I actively participate in student initiatives
                and enjoy exploring robotics, system design, automation
                projects, and emerging technologies that can create meaningful
                impact.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground leading-8">
                "My goal is to keep learning, keep building, and use technology
                to develop practical solutions that improve everyday systems and
                experiences."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};