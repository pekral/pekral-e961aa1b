import { ExternalLink, Star, GitBranch } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  stars?: number;
}

const projects: Project[] = [
  {
    name: 'rector-rules',
    description: 'Custom Rector rules for automated code refactoring and PHP upgrades.',
    url: 'https://github.com/pekral/rector-rules',
    language: 'PHP',
    stars: 2,
  },
  {
    name: 'arch-app-services',
    description: 'Simple architecture for PHP services with clean separation of concerns.',
    url: 'https://github.com/pekral/arch-app-services',
    language: 'PHP',
  },
  {
    name: 'cursor-rules',
    description: 'Preferred rules for generating code in the Cursor editor.',
    url: 'https://github.com/pekral/cursor-rules',
    language: 'Markdown',
  },
];

export const ProjectsSection = () => {
  return (
    <section className="animate-fade-in-delay-3">
      <h2 className="text-xl font-semibold text-foreground mb-6 font-mono">
        <span className="text-primary">#</span> Projects
      </h2>
      
      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      
      <a
        href="https://github.com/pekral?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors font-mono link-underline"
      >
        <GitBranch className="w-4 h-4" />
        View all repositories
        <ExternalLink className="w-3 h-3" />
      </a>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
            {project.name}
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
          {project.stars && project.stars > 0 && (
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {project.stars}
            </span>
          )}
          <span className="px-2 py-0.5 rounded bg-secondary font-mono">
            {project.language}
          </span>
        </div>
      </div>
    </a>
  );
};
