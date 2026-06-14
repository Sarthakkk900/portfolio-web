"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 100) {
        navRef.current.classList.add("bg-background/60", "backdrop-blur-xl", "border", "border-primary/10", "text-primary");
        navRef.current.classList.remove("text-background", "bg-transparent");
      } else {
        navRef.current.classList.add("text-background", "bg-transparent");
        navRef.current.classList.remove("bg-background/60", "backdrop-blur-xl", "border", "border-primary/10", "text-primary");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav ref={navRef} className="flex items-center justify-between px-8 py-4 rounded-[3rem] w-full max-w-5xl transition-all duration-300 text-background bg-transparent">
        <Link href="/" className="font-sans font-bold tracking-tight text-xl">SARTHAK</Link>
        <div className="hidden md:flex gap-8 font-sans text-sm font-medium">
          <Link href="/skills" className="link-lift">Skills</Link>
          <Link href="/projects" className="link-lift">Projects</Link>
          <Link href="/contact" className="link-lift">Contact</Link>
        </div>
        <Link href="/contact" className="btn-magnetic bg-accent text-white px-6 py-2 rounded-full font-sans font-semibold text-sm">
          Initialize
        </Link>
      </nav>
    </div>
  );
}
