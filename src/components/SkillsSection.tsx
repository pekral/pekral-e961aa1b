const skills = {
  languages: [
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  frameworks: [
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Symfony', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  ],
  tools: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'PHPUnit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpunit/phpunit-original.svg' },
  ],
  practices: [
    { name: 'Clean Code', icon: '✨' },
    { name: 'SOLID', icon: '🧱' },
    { name: 'DDD', icon: '🏗️' },
    { name: 'TDD', icon: '🧪' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Rector', icon: '🤖' },
  ],
};

interface Skill {
  name: string;
  logo?: string;
  icon?: string;
}

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
  items: Skill[];
}

const SkillCategory = ({ title, items }: SkillCategoryProps) => {
  return (
    <div>
      <h3 className="text-sm text-muted-foreground mb-3 font-mono">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span key={skill.name} className="skill-tag">
            {skill.logo ? (
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-4 h-4 mr-2"
                loading="lazy"
              />
            ) : skill.icon ? (
              <span className="mr-2">{skill.icon}</span>
            ) : null}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
