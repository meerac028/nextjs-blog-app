import { FC } from 'react';
import { NavLink } from './nav-link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const NavLinks: FC = () => {
  return (
    <nav className="flex items-center space-x-6">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};