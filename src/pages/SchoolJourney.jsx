import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FolderKanban,
  Cpu,
  Database,
  Wrench,
  Brain,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    code: "CPE C102",
    title: "Object Oriented Programming",
    description:
      "Compilation of laboratory activities, programming exercises, and project outputs related to object-oriented programming concepts and application development.",
    icon: BookOpen,
    path: "/school-journey/cpe-c102-object-oriented-programming",
  },
  {
    code: "CPE C103",
    title: "Programming Logic and Design",
    description:
      "Collection of laboratory experiments, programming exercises, logic-building activities, and project documentation completed during the course.",
    icon: FolderKanban,
    path: "/school-journey/cpe-c103-programming-logic-and-design",
  },
  {
    code: "CPE C201",
    title: "Data Structures and Algorithm",
    description:
      "Contains final project outputs, design visuals, and academic works related to data organization, algorithm design, and structured problem-solving.",
    icon: Cpu,
    path: "/school-journey/cpe-c201-data-structures-and-algorithm",
  },
  {
    code: "CPE C202",
    title: "Software Design",
    description:
      "Includes academic outputs, design works, and relevant course materials related to software planning, documentation, and structured system development.",
    icon: FolderKanban,
    path: "/school-journey/cpe-c202-software-design",
  },
  {
    code: "CPE C204",
    title: "Computer System and Troubleshooting",
    description:
      "Compilation of academic outputs, activities, and relevant works involving computer hardware, system maintenance, diagnosis, and troubleshooting procedures.",
    icon: Wrench,
    path: "/school-journey/cpe-c204-computer-systems-and-troubleshooting",
  },
  {
    code: "CPE C315",
    title: "Computer Application",
    description:
      "Contains academic outputs, relevant works, project materials, and reflection outputs related to practical computer applications and coursework.",
    icon: BookOpen,
    path: "/school-journey/cpe-c315-computer-application",
  },
  {
    code: "CPE 303",
    title: "Data and Digital Communication",
    description:
      "Collection of academic outputs, activities, and relevant works related to communication systems, digital transmission, and networking concepts.",
    icon: Cpu,
    path: "/school-journey/cpe-c303-data-and-digital-communication",
  },
  {
    code: "CPE 306",
    title: "Microprocessor",
    description:
      "Contains prelim, midterm, and finals academic outputs, project works, and documentation related to microprocessor systems and hardware-based applications.",
    icon: Cpu,
    path: "/school-journey/cpe-c306-microprocessors",
  },
  {
    code: "CPE C307",
    title: "Cognate Track Course 1 (Database)",
    description:
      "Contains academic outputs, activities, and relevant works related to database concepts, data handling, and system-related coursework.",
    icon: Database,
    path: "/school-journey/cpe-c307-cognate-track-course-1",
  },
  {
    code: "CPE C313",
    title: "Artificial Intelligence 1",
    description:
      "Includes academic outputs, activity compilations, project documentation, source code, datasets, and final demo materials related to AI-based coursework.",
    icon: Brain,
    path: "/school-journey/cpe-c313-artificial-intelligence-1",
  },
  {
    code: "CPE 401",
    title: "Computer Architecture and Organization",
    description:
      "Contains midterm and final project outputs, documentation, and relevant works related to computer architecture, organization, and hardware structure.",
    icon: Cpu,
    path: "/school-journey/cpe-c401-computer-architecture-and-organization",
  },
  {
    code: "CPE C403",
    title: "Practice Design 1 (Thesis 1)",
    description:
      "Contains the proposal manuscript, forms, and presentation materials related to our project title and proposed design system.",
    icon: GraduationCap,
    path: "/school-journey/cpe-c403-practice-design-1",
  },
  {
    code: "CPE C404",
    title: "Practice Design 2 (Thesis 2)",
    description:
      "Contains the final manuscript, project poster, user manual, demo resources, and complete project files related to the completed thesis project.",
    icon: GraduationCap,
    path: "/school-journey/cpe-c404-practice-design-2",
  },
  {
    code: "CPE C402",
    title: "Internships",
    description:
      "Includes internship-related documents, outputs, accomplishments, learning reflections, and practical experiences gained during industry immersion.",
    icon: Wrench,
    path: "/school-journey/cpe-c402-internships",
  },
];

export const SchoolJourney = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCourseClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <h1 className="text-lg md:text-xl font-extrabold tracking-tight">
            School Journey
          </h1>
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background" />

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

          <div className="absolute top-0 left-0 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-14 py-20 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Academic Portfolio
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              My School Journey
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page is the compilation of all of my laboratory activities,
              projects, and academic works throughout my journey as a student.
              Below are the Computer Engineering courses that contain the
              outputs, requirements, and relevant activities I completed during
              my studies.
            </p>
          </div>

          {/* Course Cards */}
          <div className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
                Courses
              </p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Computer Engineering Course Compilation
              </h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
                Explore the courses that reflect my academic growth, technical
                development, and project experience as a Computer Engineering
                student.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course, index) => {
                const Icon = course.icon;

                return (
                  <div
                    key={index}
                    className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">
                      {course.code}
                    </p>

                    <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-muted-foreground leading-7 text-sm md:text-base">
                      {course.description}
                    </p>

                    {course.path ? (
                      <Link
                        to={course.path}
                        onClick={handleCourseClick}
                        className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        View Course
                      </Link>
                    ) : (
                      <button className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-secondary px-4 py-2 text-sm font-semibold text-primary opacity-70 cursor-default">
                        View Course
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};