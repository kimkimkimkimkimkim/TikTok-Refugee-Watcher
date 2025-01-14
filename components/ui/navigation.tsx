'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Latest Updates', path: '/latest-updates' },
    { name: 'Impact Analysis', path: '/impact-analysis' },
    { name: 'Migration Guide', path: '/migration-guide' },
    { name: 'Policy & Regulations', path: '/policy-regulations' },
    { name: 'Community Stories', path: '/community-stories' },
    { name: 'Resources', path: '/resources' },
    { name: 'About & Contact', path: '/about' },
  ];

  return (
    <nav className="flex flex-col space-y-2 w-full">
      <Link href="/" className={`p-2 hover:bg-gray-100 rounded ${pathname === '/' ? 'bg-gray-100' : ''}`}>
        Home
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`p-2 hover:bg-gray-100 rounded ${pathname === item.path ? 'bg-gray-100' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
