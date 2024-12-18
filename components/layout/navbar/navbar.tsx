import { FC } from 'react';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import { NavLinks } from './nav-links';
import { ThemeToggle } from './theme-toggle';

export const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Newspaper className="h-6 w-6" />
          <span className="font-bold">TechBlog</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex md:justify-center">
            <NavLinks />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};