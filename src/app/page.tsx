
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BatteryCharging, ChevronRight, Sun, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";


//service section mid wala 
const services = [
  {
    title: "Solar EPC Services",
    description: "Get your Solar Plant up and running with our expertise in designing, engineering, and installations. From concept to completion, we handle everything—ensuring a smooth, efficient, and hassle-free solar transition for you.",
    image: {
      src: "/epc.avif",
      hint: "engineers solar panels"
    },
    subServices: [
      {
        title: "Site Survey / Feasibility Study",
        description: "We assess your site's solar potential, structural readiness, and ROI to ensure a smart, cost-effective installation."
      },
      {
        title: "Designing / Engineering Drawings",
        description: "Custom system designs with precise engineering—optimized for performance, safety, and compliance."
      },
      {
        title: "Installation Services",
        description: "Hassle-free installation by experts, using quality materials for long-term reliability and peak efficiency."
      }
    ]
  },
  {
    title: "Maintenance & Asset Management",
    description: "Get assistance in maintaining the smooth operation of your Solar Assets with our expert AMC, servicing, and cleaning—ensuring maximum efficiency and longevity.",
    image: {
      src: "/assetmanagemnet.avif",
      hint: "man cleaning solar panel"
    },
    subServices: [
      {
        title: "AMC Services",
        description: "Regular inspections, preventive-care, and quick fixes to keep your solar system running at peak performance."
      },
      {
        title: "Asset Management & Remote Monitoring",
        description: "Track performance, detect faults early, and optimize energy yield with our remote monitoring solutions."
      },
      {
        title: "Energy Storage Solutions",
        description: "Store excess solar energy for when you need it most. Our battery storage solutions provide energy independence and security, day and night."
      }
    ]
  },
  {
    title: "Energy Storage Solutions",
    description: "Store excess solar energy for when you need it most. Our battery storage solutions provide energy independence and security, day and night.",
    image: {
      src: "/solarstreet.avif",
      hint: "home battery storage"
    },
    subServices: [
      {
        title: "Residential Storage",
        description: "Keep your home powered during outages and reduce reliance on the grid with our sleek home battery systems."
      },
      {
        title: "Commercial Storage",
        description: "Lower demand charges and ensure business continuity with large-scale battery solutions for your enterprise."
      },
      {
        title: "Grid-Scale Solutions",
        description: "We partner with utilities to develop large-scale energy storage projects that improve grid stability and reliability."
      }
    ]
  },
];


//get quote section after the mid 
const whyChooseUsPoints = [
  "End-to-End Solutions",
  "Cutting-Edge Technology",
  "Expert Team",
  "Customer-Centric Approach",
  "Commitment to Sustainability",
  "Proven Track Record",
]

const ShootingStarsAnimation = () => {
  const [stars, setStars] = useState<Array<{id: number, style: React.CSSProperties}>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 2 + 1}s`,
        }
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="shooting-stars-container">
      {stars.map(star => (
        <div key={star.id} className="star" style={star.style} />
      ))}
    </div>
  );
};


//main funct main home
export default function Home(props: {}) {
  const [maintenanceService, ...otherServices] = services;
  const [bgImageY, setBgImageY] = useState(0);
  const aboutSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutSectionRef.current) {
        const { top, height } = aboutSectionRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        // Start effect when section is in view, end when it's passed
        if (top < screenHeight && top > -height) {
          // Calculate the scroll progress within the section (0 to 1)
          const scrollPercent = (screenHeight - top) / (screenHeight + height);
          // Move image in the opposite direction
          setBgImageY(scrollPercent * -100); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-background" >
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/mainbg.png"
          alt="Solar farm at night"
          data-ai-hint="solar farm night"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <ShootingStarsAnimation />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in-down">
            Reever Solar: Powering Tomorrow
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md animate-fade-in-up">
            We engineer bespoke solar and renewable energy solutions with futuristic technology, paving the way for a sustainable and energized world.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild className="font-bold electric-glow transition-all duration-300 hover:scale-105">
              <a href="#services">
                Explore Services <ChevronRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="font-bold transition-all duration-300 hover:scale-105">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold animate-fade-in-down">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Cutting-edge renewable solutions designed for a brighter, cleaner future.
            </p>
          </div>
          <div className="space-y-20 md:space-y-28">
            <div key={0} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center group transition-transform duration-300 hover:scale-105">
              <div className={cn("animate-fade-in-up")}>
                <Image
                  src={services[0].image.src}
                  alt={services[0].title}
                  data-ai-hint={services[0].image.hint}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl w-full transition-all duration-300 group-hover:shadow-[0_0_20px_5px] group-hover:shadow-accent/50"
                />
              </div>
              <div className={cn("animate-fade-in-up")} style={{ animationDelay: '150ms'}}>
                <h3 className="font-headline text-3xl md:text-4xl font-bold">{services[0].title}</h3>
                <p className="mt-4 text-muted-foreground">{services[0].description}</p>
                <div className="mt-8 space-y-6">
                  {services[0].subServices.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-bold text-lg text-foreground">{sub.title}</h4>
                      <p className="mt-1 text-muted-foreground">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 dark:bg-secondary/10 py-20 md:py-28 w-full">
          <div className="container mx-auto px-4 group transition-transform duration-300 hover:scale-105">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                  <div className={cn("animate-fade-in-up", "md:order-2")}>
                      <Image
                          src={services[1].image.src}
                          alt={services[1].title}
                          data-ai-hint={services[1].image.hint}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-2xl w-full transition-all duration-300 group-hover:shadow-[0_0_20px_5px] group-hover:shadow-accent/50"
                      />
                  </div>
                  <div className={cn("animate-fade-in-up", "md:order-1")} style={{ animationDelay: '150ms'}}>
                      <h3 className="font-headline text-3xl md:text-4xl font-bold">{services[1].title}</h3>
                      <p className="mt-4 text-muted-foreground">{services[1].description}</p>
                      <div className="mt-8 space-y-6">
                          {services[1].subServices.map((sub, subIndex) => (
                              <div key={subIndex}>
                                  <h4 className="font-bold text-lg text-foreground">{sub.title}</h4>
                                  <p className="mt-1 text-muted-foreground">{sub.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20 md:space-y-28">
            <div key={2} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center group transition-transform duration-300 hover:scale-105">
                <div className={cn("animate-fade-in-up")}>
                  <Image
                    src={services[2].image.src}
                    alt={services[2].title}
                    data-ai-hint={services[2].image.hint}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl w-full transition-all duration-300 group-hover:shadow-[0_0_20px_5px] group-hover:shadow-accent/50"
                  />
                </div>
                <div className={cn("animate-fade-in-up")} style={{ animationDelay: '150ms'}}>
                  <h3 className="font-headline text-3xl md:text-4xl font-bold">{services[2].title}</h3>
                  <p className="mt-4 text-muted-foreground">{services[2].description}</p>
                  <div className="mt-8 space-y-6">
                    {services[2].subServices.map((sub, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="font-bold text-lg text-foreground">{sub.title}</h4>
                        <p className="mt-1 text-muted-foreground">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-20 md:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Why Choose Reever Solar?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUsPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="size-6 text-accent shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
               <Button size="lg" asChild className="mt-8 font-bold transition-all duration-300 hover:scale-105">
                <a href="#contact">Get a Free Quote</a>
              </Button>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '150ms'}}>
              <Image 
                src="https://placehold.co/600x500.png"
                alt="Smiling customer with solar panels"
                data-ai-hint="happy customer solar"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutSectionRef} className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src="/dusrawalabgmain.png"
          alt="Reever Solar Team working in office"
          data-ai-hint="renewable energy team"
          fill
          className="object-cover"
          style={{ transform: `translateY(${bgImageY}px)` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 flex justify-center items-center">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white text-center">
              About US
            </h2>
            <div className="text-gray-200 space-y-4 text-center">
              <p>
                At REEVER, we’re on a mission to make solar energy accessible, affordable, and impactful. With over 5+ years of expertise in the solar industry, we as a team are dedicated to helping businesses, housing societies, and homeowners make the switch to clean energy seamlessly.
              </p>
              <p>
                We believe in a greener future—one where every rooftop contributes to a healthier planet. By choosing us, you’re not just lowering your electricity bills; you’re investing in sustainability and energy independence.
              </p>
              <p>
                From consultation to installation and beyond, we provide end-to-end solar solutions tailored to your needs. Let’s harness the sun’s power together and create a future powered by clean, renewable energy.
              </p>
              <p>
                🌞 Go solar today—because a brighter tomorrow starts now!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    