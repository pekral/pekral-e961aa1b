import { Terminal, TerminalLine } from './Terminal';
import { SocialLinks } from './SocialLinks';
import { MapPin, Building } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section className="animate-fade-in">
      <Terminal title="petr@portfolio:~$ whoami" className="glow-border">
        <div className="space-y-6">
          <div>
            <TerminalLine 
              command="cat about.txt"
              output={
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-20 h-20 md:w-24 md:h-24 border-2 border-primary glow-border">
                      <AvatarImage src={profilePhoto} alt="Petr Král" />
                      <AvatarFallback className="bg-primary/20 text-primary text-2xl">PK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                        Petr Král
                      </h1>
                      <p className="text-primary font-mono text-lg mt-1 glow-text">
                        PHP Developer
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Building className="w-4 h-4" />
                      Ecomail
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      Prague, Czech Republic
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    Experienced PHP developer passionate about clean code, automated refactoring with Rector, 
                    and building scalable web applications. Contributing to the PHP ecosystem and sharing 
                    knowledge with the developer community.
                  </p>
                </div>
              }
            />
          </div>
          
          <div className="pt-4 border-t border-border">
            <TerminalLine 
              command="ls -la social/"
              output={
                <div className="mt-4">
                  <SocialLinks />
                </div>
              }
            />
          </div>
        </div>
      </Terminal>
    </section>
  );
};
