'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const pathnames: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/programs': 'Programs',
  '/initiatives': 'Initiatives',
  '/success-stories': 'Success Stories',
  '/contact': 'Contact',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return {
        name: pathnames[href] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href,
      };
    }),
  ];

  return (
    <nav className="max-w-7xl mx-auto px-6 pt-24 pb-4">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-4 h-4" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-[#D4AF37]">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-[#D4AF37] transition-colors">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
