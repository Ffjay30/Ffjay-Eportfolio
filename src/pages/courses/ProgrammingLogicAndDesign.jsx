import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, X } from "lucide-react";

const sections = [
  {
    id: "lab-exp-1",
    label: "Laboratory Experiment 1",
    title: "Experiment 1 - Sequential Control Structure",
    images: [
      "/course-assets/cpe-c103/lab-exp-1/15_1.png",
      "/course-assets/cpe-c103/lab-exp-1/16_2.png",
      "/course-assets/cpe-c103/lab-exp-1/17_3.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-1/18_Francisco_Florenz_Jay_B_EXP1_SCS.pdf",
      label: "Download Experiment 1 PDF",
    },
  },
  {
    id: "lab-exp-2",
    label: "Laboratory Experiment 2",
    title: "Experiment 2 - Conditional Control Structure",
    images: [
      "/course-assets/cpe-c103/lab-exp-2/3_1.png",
      "/course-assets/cpe-c103/lab-exp-2/4_2.png",
      "/course-assets/cpe-c103/lab-exp-2/5_3.png",
      "/course-assets/cpe-c103/lab-exp-2/6_4.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-2/7_Francisco_Florenz_Jay_B_EXP2_CCS_2.pdf",
      label: "Download Experiment 2 PDF",
    },
  },
  {
    id: "lab-exp-3",
    label: "Laboratory Experiment 3",
    title: "Experiment 3 - Looping Structure",
    images: [
      "/course-assets/cpe-c103/lab-exp-3/26_1.png",
      "/course-assets/cpe-c103/lab-exp-3/27_2.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-3/28_Francisco_Florenz_Jay_B_EXP3_Practice_Problem.pdf",
      label: "Download Experiment 3 PDF",
    },
  },
  {
    id: "lab-exp-4",
    label: "Laboratory Experiment 4",
    title: "Experiment 4 - C++ Input/Output Statements",
    images: [
      "/course-assets/cpe-c103/lab-exp-4/11_1.png",
      "/course-assets/cpe-c103/lab-exp-4/12_2.png",
      "/course-assets/cpe-c103/lab-exp-4/13_3.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-4/14_FRANCISCO_FLORENZJAY_EXPERIMENT_4_CPEC103_101G_1stSEMESTER_SY2223.pdf",
      label: "Download Experiment 4 PDF",
    },
  },
  {
    id: "lab-exp-5",
    label: "Laboratory Experiment 5",
    title: "Experiment 5 - C++ Conditional Statements",
    images: [
      "/course-assets/cpe-c103/lab-exp-5/8_1.png",
      "/course-assets/cpe-c103/lab-exp-5/9_2.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-5/10_FRANCISCO_FLORENZJAY_EXPERIMENT_5_CPEC103_101G_1stSEMESTER_SY2223_1.pdf",
      label: "Download Experiment 5 PDF",
    },
  },
  {
    id: "lab-exp-6",
    label: "Laboratory Experiment 6",
    title: "Experiment 6 - C++ Looping Statements",
    images: [
      "/course-assets/cpe-c103/lab-exp-6/23_1.png",
      "/course-assets/cpe-c103/lab-exp-6/24_2.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-6/25_FRANCISCO_FLORENZJAY_EXPERIMENT_6_CPEC103_101G_1stSEMESTER_SY2223_1.pdf",
      label: "Download Experiment 6 PDF",
    },
  },
  {
    id: "lab-exp-7",
    label: "Laboratory Experiment 7",
    title: "Experiment 7 - C++ Conditional Statements",
    images: [
      "/course-assets/cpe-c103/lab-exp-7/19_1.png",
      "/course-assets/cpe-c103/lab-exp-7/20_2.png",
      "/course-assets/cpe-c103/lab-exp-7/21_3.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/lab-exp-7/22_FRANCISCO_FLORENZJAY_EXPERIMENT_7_CPEC103_101G_1stSEMESTER_SY2223_1.pdf",
      label: "Download Experiment 7 PDF",
    },
  },
  {
    id: "project-documentation",
    label: "Project Documentation",
    title: "Pong Game",
    images: [
      "/course-assets/cpe-c103/project-documentation/29_1.png",
      "/course-assets/cpe-c103/project-documentation/30_2.png",
      "/course-assets/cpe-c103/project-documentation/31_3.png",
      "/course-assets/cpe-c103/project-documentation/32_4.png",
      "/course-assets/cpe-c103/project-documentation/33_5.png",
      "/course-assets/cpe-c103/project-documentation/34_6.png",
    ],
    pdf: {
      href: "/course-assets/cpe-c103/project-documentation/35_Pong_game_Documentation.pdf",
      label: "Download Project Documentation PDF",
    },
  },
];

export const ProgrammingLogicAndDesign = () => {
  const [activeSectionId, setActiveSectionId] = useState("lab-exp-1");
  const [selectedImage, setSelectedImage] = useState(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeSectionId) ?? sections[0],
    [activeSectionId]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
          <Link
            to="/school-journey"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to School Journey
          </Link>

          <h1 className="text-lg md:text-xl font-extrabold tracking-tight">
            CPE C103
          </h1>
        </div>
      </header>

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

        <div className="container mx-auto px-6 md:px-10 lg:px-14 py-16 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Course Portfolio
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              CPE C103 - Programming Logic and Design
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page presents my compiled laboratory experiments, project
              documentation, and academic outputs for Programming Logic and
              Design.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">
              Sections
            </p>

            <div className="flex flex-wrap gap-3">
              {sections.map((section) => {
                const isActive = section.id === activeSectionId;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSectionId(section.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border ${
                      isActive
                        ? "bg-primary text-white border-primary"
                        : "bg-card text-primary border-primary/20 hover:bg-secondary"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-border bg-card p-6 md:p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Current Section
            </p>
            <h3 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight">
              {activeSection.title}
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {activeSection.images.map((imageSrc, index) => (
                <button
                  key={imageSrc}
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: imageSrc,
                      alt: `${activeSection.label} Image ${index + 1}`,
                    })
                  }
                  className="rounded-[1.5rem] border border-border bg-background p-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="overflow-hidden rounded-[1rem]">
                    <img
                      src={imageSrc}
                      alt={`${activeSection.label} Image ${index + 1}`}
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </button>
              ))}
            </div>

            {activeSection.pdf && (
              <div className="mt-10">
                <a
                  href={activeSection.pdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--color-highlight)] transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  {activeSection.pdf.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-secondary transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-[1.5rem] overflow-hidden border border-border bg-card shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[85vh] object-contain bg-white"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute inset-0 -z-10 cursor-default"
            aria-label="Close image preview"
          />
        </div>
      )}
    </div>
  );
};