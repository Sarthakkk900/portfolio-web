"use client";

import { Code2, Database, Layout, Terminal } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="w-6 h-6 text-accent mb-6" />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP Animations", "HTML / CSS"]
    },
    {
      title: "Backend & Architecture",
      icon: <Terminal className="w-6 h-6 text-accent mb-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "System Design"]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6 text-accent mb-6" />,
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "SQL Queries", "Data Modeling"]
    },
    {
      title: "Core Competencies",
      icon: <Code2 className="w-6 h-6 text-accent mb-6" />,
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Git / GitHub", "Problem Solving"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-background flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="font-drama italic text-5xl md:text-7xl text-primary mb-6">Technical Arsenal</h1>
          <p className="font-sans text-foreground/70 max-w-2xl text-lg leading-relaxed">
            A comprehensive overview of my engineering capabilities and tools. I believe in mastering both the foundational computer science principles and the modern frameworks that drive today's digital experiences. From complex data structures to beautiful, performant user interfaces, this is the stack I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-background border border-primary/10 rounded-[2rem] p-10 hover:bg-primary/5 transition-colors">
              {cat.icon}
              <h3 className="font-sans font-bold text-2xl text-primary mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="font-mono text-xs px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-foreground/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
