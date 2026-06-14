"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-background rounded-t-[4rem] pt-24 pb-12 px-6 md:px-16 mt-20 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 relative z-10">
        <div className="md:col-span-5">
          <h3 className="font-sans font-bold text-3xl mb-4">Let's build together.</h3>
          <p className="font-mono text-background/50 text-sm max-w-xs leading-relaxed">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        <div className="md:col-span-2 md:col-start-8 flex flex-col gap-4">
          <h4 className="font-mono text-accent text-xs tracking-widest uppercase mb-2">Network</h4>
          <div className="flex gap-4">
            <Link href="https://github.com/Sarthakkk900" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.38 6.5-1.5 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.5 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/sarthakkk-jain" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="https://www.instagram.com/sarthak047._" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-mono text-accent text-xs tracking-widest uppercase mb-2">Logistics</h4>
          <Link href="mailto:jsarthak900@gmail.com" className="font-sans text-sm text-background/70 hover:text-accent transition-colors">jsarthak900@gmail.com</Link>
          <Link href="#" className="font-sans text-sm text-background/70 hover:text-accent transition-colors">View Resume</Link>
        </div>
      </div>
      
      <div className="w-full relative z-10 flex flex-col items-center">
        <h1 className="font-sans font-black text-[12vw] leading-[0.8] tracking-tighter text-background/5 select-none text-center mb-8">
          SARTHAK JAIN
        </h1>
        
        <div className="max-w-7xl mx-auto w-full border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-background/40">
            © {new Date().getFullYear()} Sarthak Jain. All rights reserved.
          </p>
          <div className="flex items-center gap-3 bg-background/5 px-4 py-2 rounded-full border border-background/10">
            {/* <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> */}
            {/* <span className="font-mono text-xs text-background/80 tracking-widest uppercase"></span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
