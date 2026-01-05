import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>© {currentYear} Petr Král</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};
