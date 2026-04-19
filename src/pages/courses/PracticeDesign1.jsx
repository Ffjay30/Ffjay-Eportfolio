import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, FolderOpen } from "lucide-react";

const documents = [
  {
    title: "Chapter 1 - 3",
    description:
      "Initial thesis manuscript containing the title proposal, background of the study, review of related literature, and methodology for the proposed design project.",
    type: "pdf",
    href: "/course-assets/cpe-c403/CTRL C+V_Cholesterol Screening Device Final Paper.pdf",
    buttonLabel: "Open Document",
  },
  {
    title: "Signed Revision Compliance Form",
    description:
      "Signed revision compliance form containing the required corrections, revisions, and approval details for the design project proposal.",
    type: "pdf",
    href: "/course-assets/cpe-c403/CTRL-C+V-Engineers-REVISIONS-COMPLIANCE-FORM(Signed).pdf",
    buttonLabel: "Open Form",
  },
  {
    title: "Project Synthesis Form",
    description:
      "Official project synthesis form summarizing the proposed design project and its essential documentation details.",
    type: "pdf",
    href: "/course-assets/cpe-c403/ProjSynForm_CTRL-C+V.pdf",
    buttonLabel: "Open Form",
  },
  {
    title: "Project Problem Video Presentation",
    description:
      "Presentation material discussing the project problem, title proposal, and concept of the proposed design project.",
    type: "link",
    href: "https://canva.link/ztwn6obhcc5oh79",
    buttonLabel: "Open Presentation",
  },
];

export const PracticeDesign1 = () => {
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
            CPE C403
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
              CPE C403 - Practice Design 1 (Thesis 1)
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page contains the compiled documents and presentation
              materials for our proposed design project. It includes the thesis
              proposal manuscript, required forms, and the video presentation
              discussing the project problem and concept.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Document Compilation
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Thesis Proposal Documents
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              Below are the compiled documents and related presentation
              materials for Practice Design 1.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5">
                  {doc.type === "pdf" ? (
                    <FileText className="w-5 h-5" />
                  ) : (
                    <FolderOpen className="w-5 h-5" />
                  )}
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">
                  {doc.type === "pdf" ? "Document File" : "External Resource"}
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-muted-foreground leading-7 text-sm md:text-base">
                  {doc.description}
                </p>

                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--color-highlight)] transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  {doc.buttonLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};