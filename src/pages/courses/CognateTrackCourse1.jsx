import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

const projectImages = [
  {
    src: "/course-assets/cpe-c307/196_1.png",
    alt: "CPE C307 Academics and Relevant Works Image 1",
  },
  {
    src: "/course-assets/cpe-c307/197_2.png",
    alt: "CPE C307 Academics and Relevant Works Image 2",
  },
  {
    src: "/course-assets/cpe-c307/198_3.png",
    alt: "CPE C307 Academics and Relevant Works Image 3",
  },
  {
    src: "/course-assets/cpe-c307/199_4.png",
    alt: "CPE C307 Academics and Relevant Works Image 4",
  },
  {
    src: "/course-assets/cpe-c307/200_5.png",
    alt: "CPE C307 Academics and Relevant Works Image 5",
  },
  {
    src: "/course-assets/cpe-c307/201_6.png",
    alt: "CPE C307 Academics and Relevant Works Image 6",
  },
  {
    src: "/course-assets/cpe-c307/202_7.png",
    alt: "CPE C307 Academics and Relevant Works Image 7",
  },
  {
    src: "/course-assets/cpe-c307/203_8.png",
    alt: "CPE C307 Academics and Relevant Works Image 8",
  },
  {
    src: "/course-assets/cpe-c307/204_9.png",
    alt: "CPE C307 Academics and Relevant Works Image 9",
  },
  {
    src: "/course-assets/cpe-c307/205_10.png",
    alt: "CPE C307 Academics and Relevant Works Image 10",
  },
  {
    src: "/course-assets/cpe-c307/206_11.png",
    alt: "CPE C307 Academics and Relevant Works Image 11",
  },
];

export const CognateTrackCourse1 = () => {
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
            CPE C307
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
              CPE C307 - Cognate Track Course 1
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page presents my compiled academic outputs, activities,
              and relevant works for Cognate Track Course 1.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Project Gallery
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Academics & Relevant Works
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
              Below are the image-based outputs and compiled relevant works
              from this course.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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