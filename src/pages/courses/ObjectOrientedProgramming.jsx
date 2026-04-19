import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  GraduationCap,
  X,
} from "lucide-react";

const projectImages = [
  {
    src: "/course-assets/cpe-c102/50_1.png",
    alt: "CPE C102 Final Project Image 1",
  },
  {
    src: "/course-assets/cpe-c102/51_2.png",
    alt: "CPE C102 Final Project Image 2",
  },
  {
    src: "/course-assets/cpe-c102/52_3.png",
    alt: "CPE C102 Final Project Image 3",
  },
  {
    src: "/course-assets/cpe-c102/53_4.png",
    alt: "CPE C102 Final Project Image 4",
  },
  {
    src: "/course-assets/cpe-c102/54_5.png",
    alt: "CPE C102 Final Project Image 5",
  },
  {
    src: "/course-assets/cpe-c102/55_6.png",
    alt: "CPE C102 Final Project Image 6",
  },
  {
    src: "/course-assets/cpe-c102/56_7.png",
    alt: "CPE C102 Final Project Image 7",
  },
];

export const ObjectOrientedProgramming = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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
            CPE C102
          </h1>
        </div>
      </header>

      {/* Hero */}
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
              CPE C102 - Object Oriented Programming
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page presents my compiled academic outputs for Object
              Oriented Programming, including project screenshots, coursework,
              and relevant activities completed during the course.
            </p>
          </div>

       

          {/* Gallery */}
          <div className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
                Project Gallery
              </p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Final Project Outputs
              </h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
                Below are the image-based outputs and presentation visuals from
                my final project in this course.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {projectImages.map((image, index) => (
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

          {/* External Files */}
          <div className="mt-14 rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Additional Files
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Full Project Resources
            </h3>
            <p className="mt-4 text-muted-foreground leading-7 max-w-2xl">
              You can view the complete project files, supporting documents, and
              other related materials through the external folder link below.
            </p>

            <div className="mt-6">
              <a
                href="https://drive.google.com/drive/folders/1VruhGdYyB9CulU5VoGy0v1JsoU1nfNvW?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--color-highlight)] transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Project Files
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Image Modal */}
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