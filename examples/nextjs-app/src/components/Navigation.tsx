'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/assets', label: 'Assets' },
    { href: '/galleries', label: 'Galleries' },
    { href: '/upload', label: 'Upload' },
  ];

  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        Fairu SDK Demo
      </Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                color: pathname === link.href ? 'var(--color-primary)' : undefined,
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
