import { GraduationCap, ShieldCheck, Award } from "lucide-react";

const education = [
  {
    school: "José Rizal University",
    program: "Bachelor of Science in Computer Engineering",
    period: "2022 - Present",
    current: true,
  },
  {
    school: "Juan R. Liwag Memorial High School",
    program: "Science, Technology, Engineering and Mathematics (STEM) Graduate",
    period: "2020 - 2022",
    current: false,
  },
  {
    school: "Juan R. Liwag Memorial High School",
    program: "High School Diploma",
    period: "2016 - 2020",
    current: false,
  },
];

const certifications = [
  "CompTIA ITF+",
  "AWS Academy Graduate – Cloud Foundations",
  "AWS Certified Cloud Practitioner",
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-primary text-sm font-semibold tracking-[0.28em] uppercase animate-fade-in">
            Education & Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground leading-tight animate-fade-in animation-delay-100">
            Academic journey and professional credentials
          </h2>

          <p className="text-muted-foreground text-base md:text-lg animate-fade-in animation-delay-200">
            A refined timeline of my educational background, academic progress,
            and relevant certifications that support my growth in technology and
            system development.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          {/* Left Card - Education Timeline */}
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm animate-fade-in animation-delay-300">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-1">
                  Education Timeline
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Learning Path
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_0_6px_rgba(139,0,0,0.08)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                    {idx !== education.length - 1 && (
                      <div className="w-[2px] flex-1 bg-border mt-2 min-h-[90px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-3xl border border-border bg-background p-6 md:p-7 hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                      <h4 className="text-xl font-bold text-foreground leading-snug">
                        {item.school}
                      </h4>

                      <span
                        className={`inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-semibold ${
                          item.current
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "bg-secondary text-muted-foreground border border-border"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-7">
                      {item.program}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Certifications */}
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm animate-fade-in animation-delay-500">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-1">
                  Certifications
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Professional Development
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Award className="w-4 h-4" />
                  </div>

                  <p className="text-foreground font-medium leading-7">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};