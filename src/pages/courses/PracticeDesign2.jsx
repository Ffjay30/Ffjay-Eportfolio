import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  FolderOpen,
  X,
} from "lucide-react";

const documentItems = [
  {
    title: "Final Chapter 1 - 5",
    description:
      "Complete final manuscript containing Chapters 1 to 5 of the thesis, including the revised and approved version of the study.",
    href: "/course-assets/cpe-c404/Final Chapter 1 - 5 - Ctrl C+V Engineers Final Manuscript Revised (04-15)_RRE.pdf",
    buttonLabel: "Open Document",
  },
  {
    title: "Summary of Expenses",
    description:
      "Statement of project contribution and summary of expenses used during the development of the system.",
    href: "/course-assets/cpe-c404/Summary of Expenses  - Statement of Project Contribution.pdf",
    buttonLabel: "Open Document",
  },
];

const userManualImages = [
  {
    src: "/course-assets/cpe-c404/1.png",
    alt: "User Operational Manual Page 1",
  },
  {
    src: "/course-assets/cpe-c404/2.png",
    alt: "User Operational Manual Page 2",
  },
  {
    src: "/course-assets/cpe-c404/3.png",
    alt: "User Operational Manual Page 3",
  },
];

const externalLinks = [
  {
    title: "Demo Video",
    description:
      "Video presentation and demonstration of the completed thesis project.",
    href: "https://canva.link/jn5v5pr6vbbq7hr",
    buttonLabel: "Open Video",
  },
  {
    title: "Project Drive Folder",
    description:
      "Google Drive folder containing the full collection of project documents, source code, presentation files, and other supporting resources.",
    href: "https://drive.google.com/drive/folders/1L7CYh0vo_orDVIPjbe974-OJq_5nCX3P?usp=sharing",
    buttonLabel: "Open Drive",
  },
];

const posterImage = {
  src: "/course-assets/cpe-c404/CTRL C+V POSTER.png",
  alt: "CTRL C+V Project Poster",
};

export const PracticeDesign2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            CPE C404
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
              CPE C404 - Practice Design 2 (Thesis 2)
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page contains the compiled final thesis documents, user
              operational manual, poster, demo resources, and project files
              related to our completed design project.
            </p>
          </div>

          {/* Documents */}
          <div className="mt-14">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Document Compilation
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Final Thesis Documents
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              These are the main final documents and records related to the
              completion of the thesis project.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentItems.map((doc, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5">
                    <FileText className="w-5 h-5" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">
                    Document File
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

          {/* User Manual */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              User Operational Manual
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Manual Pages
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              Below are the image-based pages of the user operational manual for
              the project.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {userManualImages.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="rounded-[1.5rem] border border-border bg-card p-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="overflow-hidden rounded-[1rem]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Poster */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Project Poster
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Thesis Poster Presentation
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              This is the official project poster used for presentation and
              exhibit purposes.
            </p>

            <button
              type="button"
              onClick={() => setSelectedImage(posterImage)}
              className="mt-8 w-full rounded-[2rem] border border-border bg-card p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={posterImage.src}
                  alt={posterImage.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </button>
          </div>

          {/* External Links */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Additional Resources
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Demo and Project Storage
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              Access the project demo video and the complete Google Drive folder
              for all supporting files and materials.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalLinks.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5">
                    <FolderOpen className="w-5 h-5" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">
                    External Resource
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-7 text-sm md:text-base">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--color-highlight)] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {item.buttonLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-6xl w-full">
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
                className="w-full max-h-[90vh] object-contain bg-white"
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