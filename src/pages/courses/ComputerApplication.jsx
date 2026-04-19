import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, X } from "lucide-react";

const sections = [
  {
    id: "academics-relevant-works",
    label: "Academics & Relevant Works",
    title: "Academics & Relevant Works",
    images: [
      "/course-assets/cpe-c315/academics-relevant-works/156_1.png",
      "/course-assets/cpe-c315/academics-relevant-works/157_2.png",
      "/course-assets/cpe-c315/academics-relevant-works/158_3.png",
      "/course-assets/cpe-c315/academics-relevant-works/159_4.png",
      "/course-assets/cpe-c315/academics-relevant-works/160_5.png",
      "/course-assets/cpe-c315/academics-relevant-works/161_6.png",
      "/course-assets/cpe-c315/academics-relevant-works/162_7.png",
      "/course-assets/cpe-c315/academics-relevant-works/163_8.png",
      "/course-assets/cpe-c315/academics-relevant-works/164_9.png",
      "/course-assets/cpe-c315/academics-relevant-works/165_10.png",
      "/course-assets/cpe-c315/academics-relevant-works/166_12.png",
      "/course-assets/cpe-c315/academics-relevant-works/167_13.png",
      "/course-assets/cpe-c315/academics-relevant-works/168_14.png",
      "/course-assets/cpe-c315/academics-relevant-works/169_15.png",
      "/course-assets/cpe-c315/academics-relevant-works/170_16.png",
      "/course-assets/cpe-c315/academics-relevant-works/171_17.png",
      "/course-assets/cpe-c315/academics-relevant-works/172_18.png",
      "/course-assets/cpe-c315/academics-relevant-works/173_19.png",
      "/course-assets/cpe-c315/academics-relevant-works/174_20.png",
      "/course-assets/cpe-c315/academics-relevant-works/175_21.png",
      "/course-assets/cpe-c315/academics-relevant-works/176_22.png",
      "/course-assets/cpe-c315/academics-relevant-works/177_23.png",
      "/course-assets/cpe-c315/academics-relevant-works/178_24.png",
      "/course-assets/cpe-c315/academics-relevant-works/179_25.png",
      "/course-assets/cpe-c315/academics-relevant-works/180_26.png",
      "/course-assets/cpe-c315/academics-relevant-works/181_27.png",
      "/course-assets/cpe-c315/academics-relevant-works/182_28.png",
      "/course-assets/cpe-c315/academics-relevant-works/183_29.png",
      "/course-assets/cpe-c315/academics-relevant-works/184_30.png",
      "/course-assets/cpe-c315/academics-relevant-works/185_31.png",
      "/course-assets/cpe-c315/academics-relevant-works/186_32.png",
    ],
    externalLink: {
      href: "https://drive.google.com/file/d/1FoqQoeFVxsnd7tG5M_YkYOkFHclHSc0C/view?usp=sharing",
      label: "JOSELITO Ticket Booth Source Code",
    },
  },
  {
    id: "term-end-reflection-outcome",
    label: "Term End Reflection Outcome",
    title: "Term End Reflection Outcome",
    images: [
      "/course-assets/cpe-c315/term-end-reflection-outcome/152_1.png",
      "/course-assets/cpe-c315/term-end-reflection-outcome/153_2.png",
      "/course-assets/cpe-c315/term-end-reflection-outcome/154_3.png",
      "/course-assets/cpe-c315/term-end-reflection-outcome/155_4.png",
    ],
  },
];

export const ComputerApplication = () => {
  const [activeSectionId, setActiveSectionId] = useState(
    "academics-relevant-works"
  );
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
            CPE C315
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
              CPE C315 - Computer Application
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page presents my compiled academic outputs, relevant works,
              and reflection materials for Computer Application.
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