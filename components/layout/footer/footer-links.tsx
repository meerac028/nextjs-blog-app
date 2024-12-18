import { FC } from 'react';
import Link from 'next/link';

const links = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/rss', label: 'RSS Feed' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/cookies', label: 'Cookies' },
  ],
};

export const FooterLinks: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      <div>
        <h3 className="text-sm font-semibold">Company</h3>
        <ul className="mt-4 space-y-3">
          {links.company.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold">Resources</h3>
        <ul className="mt-4 space-y-3">
          {links.resources.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold">Legal</h3>
        <ul className="mt-4 space-y-3">
          {links.legal.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};