import { motion } from 'motion/react';

export default function Footer() {
  const socialLinks = [
    { label: 'Instagram', href: '#instagram' },
    { label: 'Pinterest', href: '#pinterest' },
    { label: 'Vogue Marriage', href: '#vogue' },
    { label: 'Journal', href: '#journal' }
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 border-t border-white/5 select-none text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Decorative monogram */}
        <div className="font-viaoda text-3xl tracking-widest text-white/90">
          K
        </div>

        {/* Socials row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs tracking-widest font-dmsans uppercase text-white/50">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
              onClick={(e) => e.preventDefault()}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="w-12 h-[1px] bg-white/10" />

        {/* Small copyrights */}
        <div className="flex flex-col md:flex-row justify-between w-full text-[10px] tracking-[0.2em] font-dmsans text-white/30 uppercase max-w-5xl gap-4">
          <p>
            © {new Date().getFullYear()} Karina Wedding Photography. All Rights Reserved.
          </p>
          <p>
            TIMELIGHT & SILENT SHUTTER PHILOSOPHY
          </p>
        </div>

      </div>
    </footer>
  );
}
