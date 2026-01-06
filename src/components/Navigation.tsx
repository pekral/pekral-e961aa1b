import { Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-mono font-semibold">pekral</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono link-underline"
            >
              o mně
            </Link>
            {isHome && (
              <>
                <a 
                  href="#skills" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono link-underline"
                >
                  skills
                </a>
                <a 
                  href="#projects" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono link-underline"
                >
                  projects
                </a>
              </>
            )}
            <a
              href="mailto:petr@pekral.cz"
              className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono hover:bg-primary/90 transition-colors"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
