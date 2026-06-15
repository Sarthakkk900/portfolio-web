"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -- HERO --
const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".hero-image", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex items-center pt-32 pb-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text & About */}
        <div>
          <h1 className="flex flex-col gap-2 mb-8 mt-8">
            <span className="hero-reveal font-sans font-black tracking-tighter uppercase text-6xl md:text-8xl text-primary leading-[0.9]">
              Sarthak Jain.
            </span>
            <span className="hero-reveal font-sans font-bold text-3xl md:text-5xl text-foreground/80 leading-[1.1] mt-4">
              Building exceptional
            </span>
            <span className="hero-reveal font-sans font-bold text-3xl md:text-5xl text-accent leading-[1.1]">
              digital experiences.
            </span>
          </h1>
          
          <div className="hero-reveal mb-12">
            <p className="text-foreground/80 font-sans text-lg leading-relaxed max-w-md">
              Full Stack Developer & Computer Science student crafting modern, high-performance applications from the ground up.
            </p>
          </div>

          <div className="hero-reveal flex gap-4">
            <Link href="/projects" className="btn-magnetic group flex items-center gap-3 bg-primary text-background px-8 py-4 rounded-full font-sans font-bold text-lg w-max">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-magnetic flex items-center gap-3 border border-primary/20 text-primary px-8 py-4 rounded-full font-sans font-bold text-lg w-max hover:bg-primary/5">
              Contact
            </Link>
          </div>
        </div>

        {/* Right Column: Image Container */}
        <div className="hero-image relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
          <div className="absolute inset-0 bg-accent/10 rounded-[2rem] translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 rounded-[2rem] border border-primary/10 overflow-hidden bg-primary">
            <Image 
              src="/profile.jpg" 
              alt="Sarthak Jain"
              fill
              priority
              className="object-cover opacity-90 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// -- ABOUT ME --
const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-40 px-6 md:px-16 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop" 
          alt="Dark marble texture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="about-text font-drama italic text-5xl md:text-7xl text-background mb-8">
            Beyond the <span className="text-accent">Code.</span>
          </h2>
          <div className="about-text font-sans text-lg text-background/80 flex flex-col gap-6 leading-relaxed">
            <p>
              I am a Information Technology student at MMMUT Gorakhpur with a deep-rooted passion for software engineering and artificial intelligence. My journey is driven by a constant curiosity to understand how complex systems operate and a desire to build solutions that are both functional and elegantly designed.
            </p>
            <p>
              Whether I am architecting a robust MERN stack backend, experimenting with the latest in machine learning models, or consistently challenging myself with Data Structures and Algorithms, I approach every problem with precision. I believe that great software should feel like a well-crafted instrument.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// -- PROTOCOL --
const ProtocolCard = ({ num, title, desc, visual }: { num: string, title: string, desc: string, visual: React.ReactNode }) => {
  return (
    <div className="protocol-card h-screen w-full flex items-center justify-center absolute top-0 left-0 bg-background pt-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-16">
        <div className="flex flex-col justify-center">
          <span className="font-mono text-accent text-xl mb-6">[{num}]</span>
          <h2 className="font-sans font-bold text-5xl md:text-7xl text-primary mb-6 tracking-tight">{title}</h2>
          <p className="font-sans text-xl text-foreground/70 max-w-md leading-relaxed">{desc}</p>
        </div>
        <div className="bg-primary/5 rounded-[3rem] border border-primary/10 aspect-square flex items-center justify-center overflow-hidden relative">
          {visual}
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card") as HTMLElement[];
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
          });
          
          gsap.to(card, {
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
            scale: 0.95,
            opacity: 0,
          });
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            end: "+=100%",
          });
        }
      });
      
      gsap.to(".spin-slow", { rotation: 360, duration: 20, repeat: -1, ease: "linear", transformOrigin: "center" });
      gsap.to(".scan-line", { y: "100%", duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(".pulse-wave", { strokeDashoffset: 0, duration: 2, repeat: -1, ease: "power2.inOut" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ProtocolCard 
          num="01" 
          title="Data Structures" 
          desc="Optimizing logic at the fundamental level before scaling to the full application."
          visual={
            <svg className="spin-slow w-48 h-48 text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
              <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" />
              <rect x="35" y="35" width="30" height="30" transform="rotate(20 50 50)" className="text-accent" />
            </svg>
          }
        />
        <ProtocolCard 
          num="02" 
          title="MERN Integration" 
          desc="Seamlessly connecting the database layer to highly responsive frontend interfaces."
          visual={
            <div className="w-full h-full relative p-8">
              <div className="w-full h-full border border-primary/20 rounded-xl bg-[linear-gradient(to_right,#0D0D1211_1px,transparent_1px),linear-gradient(to_bottom,#0D0D1211_1px,transparent_1px)] bg-[size:20px_20px] relative overflow-hidden">
                <div className="scan-line absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* <Protocol /> */}
    </>
  );
}
