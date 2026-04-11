import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const featuredProject = {
  badge: "Capstone Project",
  category: "AI Healthcare System",
  title: "CholeScan",
  subtitle: "Non-invasive cholesterol estimation using hand imaging and AI.",
  overview:
    "CholeScan is a non-invasive cholesterol measuring system designed to estimate cholesterol levels in real time using hand imaging data and artificial neural networks. The system captures standardized images of the back of the hand, extracts relevant features, classifies cholesterol levels as Normal or High, and displays the results through a mobile application for practical use in clinics and rural health units.",
  focus:
    "Healthcare innovation, non-invasive monitoring, real-time cholesterol classification, and accessibility for underserved areas",
  approach:
    "Integrated image acquisition, feature extraction, ANN-based classification, and a mobile app connected to Firebase for result display and user data storage",
  tags: [
    "Python",
    "ANN",
    "GLCM",
    "LBP",
    "Color Features",
    "Kotlin",
    "Firebase",
    "Raspberry Pi",
  ],
  image: "/projects/project5.png",
  link: "#",
  github: "#",
};

const projects = [
  {
    title: "CholeScan",
    date: "Capstone Project",
    description:
      "A non-invasive cholesterol estimation system that uses hand imaging, feature extraction, and artificial neural networks to classify cholesterol levels in real time.",
    tags: ["Python", "ANN", "Kotlin", "Firebase", "Raspberry Pi"],
    image: "/projects/project5.png",
    link: "#",
    github: "#",
  },
  {
    title: "Waste Segregation and Composting System",
    date: "May 2025",
    description:
      "Built an AI-powered waste segregation system using ESP32-CAM and CNN for image-based classification and automated sorting of recyclable and organic waste.",
    tags: ["ESP32-CAM", "CNN", "Arduino", "Automation"],
    image: "/projects/project4.png",
    link: "#",
    github: "#",
  },
  {
    title: "Lost and Found System",
    date: "May 2024",
    description:
      "Developed a web-based lost and found platform using Python, HTML, and CSS to simplify item reporting, searching, and recovery within the school community.",
    tags: ["Python", "HTML", "CSS", "MySQL"],
    image: "/projects/project3.png",
    link: "#",
    github: "#",
  },
  {
    title: "Ticketing System",
    date: "May 2024",
    description:
      "Designed and implemented an online concert ticketing platform with user and admin dashboards, event management, cart functionality, and payment simulation.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/projects/project2.png",
    link: "#",
    github: "#",
  },
  {
    title: "Applicant Deployment System",
    date: "December 2023",
    description:
      "Developed an applicant deployment system to automate registration, screening, and deployment processes through centralized and organized data management.",
    tags: [
  "Java",
  "Java Swing",
  "AWT",
  "MySQL / SQLite",

],
    image: "/projects/project1.png",
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground leading-tight animate-fade-in animation-delay-100">
            Projects built through innovation, research, and practical system
            development
          </h2>
          <p className="text-muted-foreground text-base md:text-lg animate-fade-in animation-delay-200">
            A collection of academic and technical projects that highlight my
            skills in AI, software development, embedded systems, database
            management, and real-world problem solving.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] rounded-[2rem] overflow-hidden border border-border bg-card shadow-sm">
          {/* Left Showcase */}
          <div className="bg-card p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-xs font-bold uppercase tracking-[0.28em]">
                {featuredProject.badge}
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary border border-border px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
                {featuredProject.category}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground">
                {featuredProject.title}
              </h3>
              <p className="mt-4 text-muted-foreground text-base md:text-lg leading-8 max-w-3xl">
                {featuredProject.subtitle}
              </p>
            </div>

            <div className="rounded-[1.75rem] overflow-hidden border border-border bg-background">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-[520px] md:h-[620px] object-cover"
              />
            </div>
          </div>

          {/* Right Overview */}
          <div className="bg-card p-8 md:p-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
              <Sparkles className="w-5 h-5" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Project Overview
            </h3>

            <p className="text-muted-foreground leading-9 text-base md:text-lg mb-10">
              {featuredProject.overview}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="rounded-3xl border border-border bg-background p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
                  Focus
                </p>
                <p className="text-foreground leading-8">
                  {featuredProject.focus}
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
                  Approach
                </p>
                <p className="text-foreground leading-8">
                  {featuredProject.approach}
                </p>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-primary/20 bg-secondary text-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={featuredProject.link}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 h-14 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <ArrowUpRight className="w-5 h-5" />
                Live Demo
              </a>

              <a
                href={featuredProject.github}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 h-14 text-base font-semibold text-foreground hover:border-primary/30 hover:text-primary transition"
              >
                <Github className="w-5 h-5" />
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-20">
          <div className="mb-10">
            <p className="text-primary text-sm font-semibold tracking-[0.28em] uppercase mb-3">
              More Projects
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Additional systems and development work
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Big Image */}
          <div className="relative overflow-hidden rounded-b-none">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

  {/* badge on top-left */}
  <div className="absolute top-4 left-4">
    <span className="inline-flex items-center rounded-full bg-sky-500 text-black px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em]">
      Project
    </span>
  </div>

  {/* title over image */}
  <div className="absolute bottom-4 left-4 right-4">
    <h4 className="text-white text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-md">
      {project.title}
    </h4>
  </div>
</div>

                {/* Content Below Image */}
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">
                    {project.date}
                  </p>

                  <h4 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground leading-7 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full border border-primary/20 bg-secondary text-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition"
                    >
                      GitHub <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};