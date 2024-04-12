'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'home', href: '/' },
  { name: 'work', href: '/work' },
  { name: 'contact', href: '/contact' },
  { name: 'blog', href: '/blog' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('text-shade', {
              'font-bold text-white': pathname === link.href,
            })}
          >
            <p>
              <span className="text-accent">#</span>
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
