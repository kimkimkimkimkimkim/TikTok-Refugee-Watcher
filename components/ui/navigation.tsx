'use client';

import { useEffect, useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('latest-updates');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Refugee Updates', id: 'latest-updates', emoji: '📰' },
    { name: 'Refugee Impact', id: 'impact-analysis', emoji: '📊' },
    { name: 'Migration Guide', id: 'migration-guide', emoji: '🚀' },
    { name: 'Policy & Regulations', id: 'policy-regulations', emoji: '⚖️' },
    { name: 'Refugee Stories', id: 'community-stories', emoji: '👥' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-col space-y-2 w-full sticky top-24">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`p-3 text-left rounded-lg transition-all duration-300 hover:bg-[#fe2c55] hover:text-white group ${
            activeSection === item.id 
              ? 'bg-[#fe2c55] text-white font-medium shadow-md' 
              : 'bg-white text-[#111111] hover:shadow-md'
          }`}
        >
          <div className="flex items-center">
            <span className="mr-2 group-hover:scale-110 transition-transform">
              {item.emoji}
            </span>
            <span className="font-medium">{item.name}</span>
          </div>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
