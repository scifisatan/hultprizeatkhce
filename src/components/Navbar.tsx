import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {Link} from "react-router-dom";

const NavLinks = ({ 
  setIsMobileMenuOpen, 
  isMobile = false 
}: { 
  setIsMobileMenuOpen?: (value: boolean) => void;
  isMobile?: boolean;
}) => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/archive', label: 'Archive' },
    { href: 'https://hultprizefoundation.notion.site/2025-Competitors-Guidebook-1115dd17a06b80c7a3c8ca764b59164b', label: 'Resources' }, 
  ];

  const handleClick = () => {
    if (isMobile && setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={handleClick}
          className="text-foreground hover:text-primary transition-colors duration-200"
        >
          {label}
        </a>
      ))}
      <Button>Register Now</Button>
    </>
  );
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">


            <img 
              src="/wide_logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden 
          fixed 
          inset-x-0 
          top-16 
          bg-background 
          backdrop-blur-sm 
          border-t 
          transition-all 
          duration-300 
          ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <nav className="flex flex-col items-center gap-6 p-6">
          <NavLinks setIsMobileMenuOpen={setIsMobileMenuOpen} isMobile={true} />
        </nav>
      </div>
    </header>
  );
};

export default Navigation;