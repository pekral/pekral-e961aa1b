import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/pekral',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/kral_petr_88',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/petr-král-60223752/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Website',
    url: 'https://pekral.cz',
    icon: <Globe className="w-5 h-5" />,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
