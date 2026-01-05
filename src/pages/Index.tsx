import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="space-y-16">
          <HeroSection />
          
          <div id="skills">
            <SkillsSection />
          </div>
          
          <div id="projects">
            <ProjectsSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
