import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, X } from "lucide-react";

const sections = [
  {
    id: "midterm-project",
    label: "Midterm Project",
    title: "Midterm Project",
    images: [
      "/course-assets/cpe-c401/midterm/265_1.png",
      "/course-assets/cpe-c401/midterm/266_2.png",
      "/course-assets/cpe-c401/midterm/267_3.png",
      "/course-assets/cpe-c401/midterm/268_4.png",
      "/course-assets/cpe-c401/midterm/269_5.png",
      "/course-assets/cpe-c401/midterm/270_6.png",
      "/course-assets/cpe-c401/midterm/271_7.png",
    ],
    externalLink: {
      href: "https://drive.google.com/drive/u/1/folders/1tx_WZOBrFCfeX6CaRpf6fdGpNxIbk3jf",
      label: "Midterm Project Files",
    },
  },
  {
    id: "final-project",
    label: "Final Project",
    title: "Final Project",
    images: [
      "/course-assets/cpe-c401/final/256_8.png",
      "/course-assets/cpe-c401/final/257_9.png",
      "/course-assets/cpe-c401/final/258_10.png",
      "/course-assets/cpe-c401/final/259_11.png",
      "/course-assets/cpe-c401/final/260_12.png",
      "/course-assets/cpe-c401/final/261_13.png",
      "/course-assets/cpe-c401/final/262_14.png",
      "/course-assets/cpe-c401/final/263_15.png",
      "/course-assets/cpe-c401/final/264_16.png",
    ],
    externalLink: {
      href: "https://drive.google.com/drive/u/1/folders/1VR2c_pu74EIUZjOjK1fvD3tI3ypapWn7",
      label: "Final Project Files",
    },
  },
];

export const ComputerArchitectureAndOrganization = () => {
  const [activeSectionId, setActiveSectionId] = useState("midterm-project");
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
            CPE C401
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
              CPE C401 - Computer Architecture and Organization
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page presents my compiled midterm and final project outputs,
              documentation, and relevant works for Computer Architecture and
              Organization.
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

            {activeSection.externalLink && (
              <div className="mt-10">
                <a
                  href={activeSection.externalLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--color-highlight)] transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  {activeSection.externalLink.label}
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