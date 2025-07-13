import { Button } from '../ui/button';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';


//wassap
const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/30 dark:bg-secondary/10 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 animate-fade-in-down">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 animate-fade-in-up">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
            <div className="space-y-4 text-foreground animate-fade-in-up" style={{animationDelay: '150ms'}}>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="size-5 text-accent" />
                <span>123 Solar Way, Future City, 98765</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="size-5 text-accent" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="size-5 text-accent" />
                <span>contact@reeversolar.com</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"> {/*instalink*/}
                <Instagram className="size-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">{/*facebooklink*/}
                <Facebook className="size-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <WhatsAppIcon />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
        </div>
        <div className="text-center mt-12 border-t border-border pt-8 animate-fade-in-up" style={{animationDelay: '450ms'}}>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Reever Solar. All Rights Reserved. <span className="hidden sm:inline">-</span> <br className="sm:hidden"/>REEVER SOLAR is a brand of Reever Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
