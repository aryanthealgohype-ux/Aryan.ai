import { Download, ArrowLeft, Sparkles, Mail, Phone, MapPin, Star } from "lucide-react";

const Resume = () => {
  return (
    <section className="min-h-screen bg-background pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Back to Home
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 btn-3d text-primary-foreground px-5 py-2 rounded-full text-sm font-medium"
          >
            Download Resume <Download size={14} />
          </a>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-8 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={14} />
              Premium Resume
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Aryan Khan
              <span className="block text-primary text-xl sm:text-2xl font-semibold mt-2">
                Software Developer & Designer
              </span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-md text-[15px]">
              A clean, modern resume layout designed to make a strong first impression. Built for clarity,
              visual hierarchy, and fast scanning by clients.
            </p>

            <div className="rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-xl p-5 space-y-4">
              <div className="text-sm font-semibold text-foreground">Personal Info</div>
              <div className="grid gap-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} className="text-primary" />
                  <span>aryan.khan@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} className="text-primary" />
                  <span>+91 90000 00000</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} className="text-primary" />
                  <span>Thanjavur, India</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-xl p-5 space-y-4">
              <div className="text-sm font-semibold text-foreground">Highlights</div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Star size={14} className="text-primary" />
                    Clean, modern UI
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Premium look for client-facing resumes.</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Star size={14} className="text-primary" />
                    Fast to scan
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Clear hierarchy and readable sections.</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Star size={14} className="text-primary" />
                    Print ready
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Optimized for PDF and A4 view.</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Star size={14} className="text-primary" />
                    Brand feel
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Consistent color system and polish.</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-xl p-5 space-y-4">
              <div className="text-sm font-semibold text-foreground">Snapshot</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground">Full-Stack Development</span>
                <span className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground">UI/UX Design</span>
                <span className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground">Clean Code</span>
                <span className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground">Modern Web</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Download the PDF or preview it on the right. This page is optimized for client viewing.
              </div>
            </div>
          </div>

          <div className="beam-border beam-border-soft rounded-2xl overflow-hidden bg-card/80 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] ring-1 ring-primary/10">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-background/60">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="text-xs text-muted-foreground">Resume Preview</div>
              <div className="text-xs text-muted-foreground">PDF</div>
            </div>
            <iframe
              title="Resume"
              src="/resume.pdf"
              className="w-full h-[calc(100vh-260px)] min-h-[70vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
