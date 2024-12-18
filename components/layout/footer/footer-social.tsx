import { FC } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
];

export const FooterSocial: FC = () => {
  return (
    <div className="flex space-x-2">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.label}
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};