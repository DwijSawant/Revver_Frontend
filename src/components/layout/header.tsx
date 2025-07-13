
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const ReeverSolarLogo = () => (
  <svg width="180" height="32" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
    <path d="M15.5 16C15.5 21.2467 11.2467 25.5 6 25.5C0.753294 25.5 -3.5 21.2467 -3.5 16C-3.5 10.7533 0.753294 6.5 6 6.5C11.2467 6.5 15.5 10.7533 15.5 16Z" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <path d="M35.5 16C35.5 21.2467 31.2467 25.5 26 25.5C20.7533 25.5 16.5 21.2467 16.5 16C16.5 10.7533 20.7533 6.5 26 6.5C31.2467 6.5 35.5 10.7533 35.5 16Z" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <text x="6" y="21" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" textAnchor="middle">R</text>
    <text x="26" y="21" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" textAnchor="middle">E</text>
    <text x="44" y="21" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">EVER SOLAR</text>
  </svg>
);


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed z-50 transition-all duration-300",
      scrolled 
        ? 'top-4 left-4 right-4 rounded-full bg-background/80 backdrop-blur-md shadow-lg border' 
        : 'top-0 left-0 right-0 rounded-none bg-background/30 backdrop-blur-sm border-b border-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline">
            <ReeverSolarLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild>
                <a href={link.href} className="text-lg font-medium">
                  {link.name}
                </a>
              </Button>
            ))}
             <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            {/* Mobile menu can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
