import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Briefcase,
  ShieldCheck,
  ClipboardCheck,
  X,
} from "lucide-react";

const sections = [
  {
    id: "pre",
    label: "Pre Deployment",
    eyebrow: "Internship Preparation",
    title: "Pre-Deployment Requirements",
    description:
      "These documents were completed before deployment to prepare for the internship process, including orientation, clearances, certifications, and supporting requirements.",
    icon: ShieldCheck,
    documents: [
      {
        title: "CSE Internship Orientation Certificate",
        type: "pdf",
        href: "/course-assets/cpe-402/pre-deployment/Orientation - Francisco_Florenz Jay.pdf",
        description:
          "Certificate confirming attendance and participation in the internship orientation program.",
      },
      {
        title: "Student Authorization for Release of Personal Information",
        type: "pdf",
        href: "/course-assets/cpe-402/pre-deployment/F-DPO-003Student Authorization For Release of Personal Information.pdf",
        description:
          "Authorization form allowing the release of required personal information for internship processing.",
      },
      {
        title: "Resume",
        type: "pdf",
        href: "/course-assets/cpe-402/pre-deployment/Florenz_Jay_Francisco_Resume.pdf",
        description:
          "Professional resume submitted as part of the internship application requirements.",
      },
      {
        title: "Medical Certification",
        type: "image",
        href: "/course-assets/cpe-402/pre-deployment/medcert.jfif",
        description:
          "Medical document certifying physical fitness and eligibility for internship deployment.",
      },
      {
        title: "Certificate of Good Moral Character",
        type: "pdf",
        href: "/course-assets/cpe-402/pre-deployment/Francisco, Florenz Jay - Good Moral.pdf",
        description:
          "Official certification verifying good moral standing as part of pre-deployment clearance.",
      },
      {
        title: "Psychological Examination Result",
        type: "pdf",
        href: "/course-assets/cpe-402/pre-deployment/Francisco, Florenz Jay - Psychological Exam Results.pdf",
        description:
          "Assessment result submitted to satisfy internship screening and readiness requirements.",
      },
      {
        title: "Mock Interview Certificate",
        type: "image",
        href: "/course-assets/cpe-402/pre-deployment/Florenz Jay B. Francisco - Mock Interview Certificate.png",
        description:
          "Certificate showing participation in mock interview preparation before actual deployment.",
      },
      {
        title: "Endorsement Letter",
        type: "pdf",
        href: "/course-assets/cpe-402/pre-deployment/RaksoCT_Endorsement Letter - Florenz Jay Francisco.pdf",
        description:
          "Official endorsement letter issued to support internship placement and coordination.",
      },
      {
        title: "Enrolment Permit",
        type: "image",
        href: "/course-assets/cpe-402/pre-deployment/Florenz Jay B. Francisco - Enrolment Permit.png",
        description:
          "Permit confirming enrollment status and eligibility to proceed with internship requirements.",
      },
      {
        title: "Acceptance Letter",
        type: "image",
        href: "/course-assets/cpe-402/pre-deployment/AL.jpg",
        description:
          "Acceptance confirmation from the host company or organization for internship placement.",
      },
    ],
  },
  {
    id: "upon",
    label: "Upon Deployment",
    eyebrow: "Internship Proper",
    title: "Deployment Documents and Monitoring",
    description:
      "These are the documents used during the internship itself, including agreements, plans, attendance records, and accomplishment monitoring.",
    icon: Briefcase,
    documents: [
      {
        title: "Memorandum of Agreement",
        type: "pdf",
        href: "/course-assets/cpe-402/upon-deployment/2. Internship MOA_AllPrograms_r24131.pdf",
        description:
          "Formal agreement between the institution and host company covering the internship arrangement.",
      },
      {
        title: "Internship Agreement",
        type: "pdf",
        href: "/course-assets/cpe-402/upon-deployment/Florenz Francisco_IA.pdf",
        description:
          "Agreement outlining the responsibilities, expectations, and conditions of the internship.",
      },
      {
        title: "Data User and Protection Annex",
        type: "pdf",
        href: "/course-assets/cpe-402/upon-deployment/F-DPO-006Data Use and Protection Agreement Annex.pdf",
        description:
          "Document covering data privacy, confidentiality, and protection responsibilities during deployment.",
      },
      {
        title: "Parental Consent",
        type: "pdf",
        href: "/course-assets/cpe-402/upon-deployment/CPE_PC_Francisco_FlorenzJay.pdf",
        description:
          "Consent form signed to authorize internship participation and related deployment activities.",
      },
      {
        title: "Class Adviser Attendance",
        type: "image",
        href: "/course-assets/cpe-402/upon-deployment/attendance.png",
        description:
          "Attendance-related record associated with monitoring and academic internship compliance.",
      },
      {
        title: "Internship Plan",
        type: "pdf",
        href: "/course-assets/cpe-402/upon-deployment/Internship Plan.pdf",
        description:
          "Structured plan outlining internship objectives, expected tasks, and learning outcomes.",
      },
      {
        title: "Weekly Accomplishment Report",
        type: "group",
        description:
          "Compilation of 8 weekly accomplishment reports documenting assigned tasks, outputs, and progress.",
        files: [
          {
            label: "Week 2",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W2_Jan12-Jan17_Francisco_FlorenzJay.jpg",
            type: "image",
          },
          {
            label: "Week 3",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W3_Jan19-Jan24_Francisco_FlorenzJay.jpg",
            type: "image",
          },
          {
            label: "Week 4",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W4_Jan26-Jan31_Francisco_FlorenzJay.pdf",
            type: "pdf",
          },
          {
            label: "Week 5",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W5_Feb2-Feb7_Francisco_FlorenzJay.pdf",
            type: "pdf",
          },
          {
            label: "Week 6",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W6_Feb9-Feb14_Francisco_FlorenzJay.pdf",
            type: "pdf",
          },
          {
            label: "Week 7",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W7_Feb16-Feb21_Francisco_FlorenzJay.pdf",
            type: "pdf",
          },
          {
            label: "Week 8",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W8_Feb23-Feb28_Francisco_FlorenzJay.pdf",
            type: "pdf",
          },
          {
            label: "Week 9",
            href: "/course-assets/cpe-402/upon-deployment/CPE_WAR-W9_Mar3-Mar7_Francisco_FlorenzJay.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Monthly Attendance Monitoring Sheet",
        type: "group",
        description:
          "Compilation of 3 monthly attendance monitoring sheets tracking internship attendance records.",
        files: [
          {
            label: "January",
            href: "/course-assets/cpe-402/upon-deployment/January MAMS.pdf",
            type: "pdf",
          },
          {
            label: "February",
            href: "/course-assets/cpe-402/upon-deployment/February MAMS.pdf",
            type: "pdf",
          },
          {
            label: "March",
            href: "/course-assets/cpe-402/upon-deployment/March MAMS.pdf",
            type: "pdf",
          },
        ],
      },
    ],
  },
  {
    id: "post",
    label: "Post Deployment",
    eyebrow: "Internship Completion",
    title: "Post-Deployment Evaluation and Completion",
    description:
      "These documents summarize the completion of the internship, including evaluations, reflections, and official completion records.",
    icon: ClipboardCheck,
    documents: [
      {
        title: "Performance Evaluation",
        type: "pdf",
        href: "/course-assets/cpe-402/post-deployment/Francisco, Florenz jay - Evaluation.pdf",
        description:
          "Evaluation form assessing work performance, conduct, and overall internship performance.",
      },
      {
        title: "Term End Self Evaluation",
        type: "group",
        description:
          "Compilation of prelim, midterm, and finals self-evaluation documents reflecting internship growth and learning.",
        files: [
          {
            label: "Prelim",
            href: "/course-assets/cpe-402/post-deployment/Florenz Jay Francisco - Term End Self-assessment and Evaluation - Prelim.pdf",
            type: "pdf",
          },
          {
            label: "Midterm",
            href: "/course-assets/cpe-402/post-deployment/Florenz Jay Francisco - Term End Self-assessment and Evaluation - Midterm.pdf",
            type: "pdf",
          },
          {
            label: "Final",
            href: "/course-assets/cpe-402/post-deployment/Florenz Jay Francisco - Term End Self-assessment and Evaluation - Final.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Certification of Completion",
        type: "image",
        href: "/course-assets/cpe-402/post-deployment/Francisco, Florenz Jay - CoC.jfif",
        description:
          "Official certification confirming successful completion of internship requirements.",
      },
    ],
  },
];

export const Internships = () => {
  const [activeSectionId, setActiveSectionId] = useState("pre");
  const [selectedImage, setSelectedImage] = useState(null);

  const activeSection = useMemo(
    () => sections.find((s) => s.id === activeSectionId) ?? sections[0],
    [activeSectionId]
  );

  const ActiveIcon = activeSection.icon;

  const handleFileClick = (e, file) => {
    if (file.type === "image") {
      e.preventDefault();
      setSelectedImage({
        src: file.href,
        alt: file.label || file.title,
      });
    }
  };

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
            CPE C402
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
              CPE C402 - Internships
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">
              This page contains the compiled internship requirements,
              deployment documents, accomplishment records, and completion
              documents organized according to each phase of the internship
              process.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">
              Internship Phases
            </p>

            <div className="flex flex-wrap gap-3">
              {sections.map((section) => {
                const isActive = section.id === activeSectionId;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSectionId(section.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 border ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-card text-primary border-primary/20 hover:bg-secondary"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
              {activeSection.eyebrow}
            </p>

            <div className="flex items-start gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary shrink-0">
                <ActiveIcon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  {activeSection.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-7">
                  {activeSection.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSection.documents.map((doc, index) => {
              const isPdf = doc.type === "pdf";
              const isImage = doc.type === "image";
              const isGroup = doc.type === "group";

              return (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary text-primary mb-5">
                    {isGroup || isPdf ? (
                      <FileText className="w-5 h-5" />
                    ) : (
                      <ImageIcon className="w-5 h-5" />
                    )}
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">
                    {isGroup
                      ? "Document Compilation"
                      : isPdf
                      ? "Document File"
                      : "Image Document"}
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-muted-foreground leading-7 text-sm md:text-base">
                    {doc.description}
                  </p>

                  {isGroup ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {doc.files.map((file, fileIndex) => (
                        <a
                          key={fileIndex}
                          href={file.href}
                          target={file.type === "pdf" ? "_blank" : undefined}
                          rel={
                            file.type === "pdf"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          onClick={(e) => handleFileClick(e, file)}
                          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {file.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={doc.href}
                      target={isPdf ? "_blank" : undefined}
                      rel={isPdf ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleFileClick(e, doc)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--color-highlight)] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open File
                    </a>
                  )}
                </div>
              );
            })}
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