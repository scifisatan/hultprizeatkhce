import {Button} from '@/components/ui/button';

const Navigation = () => (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#previous-year" className="text-muted-foreground hover:text-primary transition-colors">Previous Year</a>
            <a href="#this-year" className="text-muted-foreground hover:text-primary transition-colors">This Year</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Button>Register Now</Button>
          </nav>
        </div>
      </div>
    </header>
  );

  export default Navigation;