"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.38 6.5-1.5 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.5 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/jsarthak900@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: "New Contact Form Submission from Portfolio!"
        })
      });

      if (res.ok) {
        alert('Your message has been sent successfully! I will get back to you soon.');
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      alert('Oops! Something went wrong. Please try emailing me directly at jsarthak900@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-background flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="font-drama italic text-6xl md:text-8xl text-primary mb-6">Initiate Contact</h1>
        <p className="font-sans text-foreground/70 max-w-2xl mx-auto text-xl mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect.
        </p>
        
        <form 
          className="max-w-xl mx-auto flex flex-col gap-6 mb-16 text-left" 
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-primary/70">Name</label>
              <input type="text" name="name" required className="w-full bg-background border border-primary/20 rounded-xl px-4 py-3 font-sans text-primary focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-primary/70">Email</label>
              <input type="email" name="email" required className="w-full bg-background border border-primary/20 rounded-xl px-4 py-3 font-sans text-primary focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-primary/70">Message</label>
            <textarea name="message" required rows={5} className="w-full bg-background border border-primary/20 rounded-xl px-4 py-3 font-sans text-primary focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Let's build something great..."></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="btn-magnetic mt-2 w-full flex items-center justify-center gap-3 bg-primary text-background px-8 py-4 rounded-xl font-sans font-bold text-lg hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all">
            {isSubmitting ? "Sending Sequence..." : "Send Message"}
            {!isSubmitting && <Mail size={18} />}
          </button>
        </form>

        <div className="flex justify-center gap-8">
          <a href="https://www.instagram.com/sarthak047._" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 link-lift">
            <InstagramIcon size={24} />
          </a>
          <a href="https://github.com/Sarthakkk900" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 link-lift">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sarthakkk-jain" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 link-lift">
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
