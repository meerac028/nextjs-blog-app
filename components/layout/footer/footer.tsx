import { FC } from 'react';
import { Newspaper } from 'lucide-react';
import { FooterLinks } from './footer-links';
import { FooterSocial } from './footer-social';

export const Footer: FC = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-6 w-6" />
            <span className="font-bold">TechBlog</span>
          </div>
          
          <FooterLinks />
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TechBlog. All rights reserved.
            </p>
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
};