import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/') || currentPath.includes('index');

  const navItems = [
    { label: 'Home', path: '/', active: isHome },
    { label: 'Gallery', path: '/gallery.html', active: currentPath.includes('gallery') },
    { label: 'About', path: '/about.html', active: currentPath.includes('about') },
    { label: 'Contact', path: '/contact.html', active: currentPath.includes('contact') }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Branding */}
        <a
          href="/"
          className="font-viaoda text-2xl tracking-widest text-white hover:opacity-80 transition-opacity uppercase cursor-pointer"
        >
          Karina
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className={`font-dmsans text-xs tracking-[0.2em] uppercase transition-all duration-300 relative py-1 cursor-pointer ${
                item.active
                  ? 'text-white font-medium'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-0 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer (Full-screen overlay with smooth slide-in transition) */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-45 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            onClick={() => setIsOpen(false)}
            className={`font-viaoda text-3xl tracking-widest transition-colors uppercase ${
              item.active ? 'text-white' : 'text-white/40 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
