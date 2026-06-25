import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "PrepAI",
      category: "AI & Full Stack",
      desc: "An AI-powered interview platform designed to simulate and evaluate technical interviews.",
      tech: ["React", "AI Integration", "Node.js"],
      link: "https://prep-ai-amber-rho.vercel.app/"
    },
    {
      title: "AI Caption Studio",
      category: "Computer Vision",
      desc: "An intelligent tool that analyzes images and automatically generates context-aware captions.",
      tech: ["React", "Vision API", "Next.js"],
      link: "https://ai-caption-studio-seven.vercel.app/"
    },
    {
      title: "GST-Calculator",
      category: "Buisness Tool",
      desc: "A modern GST Invoice Calculator built with Next.js that enables users to create professional invoices, calculate GST automatically.",
      tech: ["React", "Next.js"],
      link: "https://gst-calculator-mu-seven.vercel.app/"
    },
   
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="font-drama italic text-5xl md:text-7xl text-primary mb-6">Projects Archive</h1>
          <p className="font-sans text-foreground/70 max-w-2xl text-lg leading-relaxed">
            A curated selection of my engineering work across the stack. I build robust applications by blending seamless front-end design with highly scalable, secure backend systems. These projects represent a continuous dedication to solving complex logic problems and translating them into user-friendly digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <a href={p.link} target="_blank" rel="noopener noreferrer" key={i} className="group relative block bg-background border border-primary/10 rounded-[2rem] p-8 hover:bg-primary/5 transition-colors overflow-hidden">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-accent text-xs tracking-widest uppercase">{p.category}</span>
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <h3 className="font-sans font-bold text-3xl text-primary mb-4">{p.title}</h3>
              <p className="font-sans text-foreground/70 mb-8 max-w-md">{p.desc}</p>
              
              <div className="flex gap-3">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="font-mono text-[10px] px-3 py-1 bg-primary/10 rounded-full text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
