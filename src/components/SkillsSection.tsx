const skills = {
  languages: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  frameworks: ['Laravel', 'Symfony', 'React', 'Vue.js', 'Tailwind CSS'],
  tools: ['Git', 'Docker', 'Redis', 'MySQL', 'PostgreSQL', 'PHPUnit'],
  practices: ['Clean Code', 'SOLID', 'DDD', 'TDD', 'CI/CD', 'Rector'],
};

export const SkillsSection = () => {
  return (
    <section className="animate-fade-in-delay-2">
      <h2 className="text-xl font-semibold text-foreground mb-6 font-mono">
        <span className="text-primary">#</span> Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCategory title="Languages" items={skills.languages} />
        <SkillCategory title="Frameworks" items={skills.frameworks} />
        <SkillCategory title="Tools" items={skills.tools} />
        <SkillCategory title="Practices" items={skills.practices} />
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  items: string[];
}

const SkillCategory = ({ title, items }: SkillCategoryProps) => {
  return (
    <div>
      <h3 className="text-sm text-muted-foreground mb-3 font-mono">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
