import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { HERO_IMAGE_URL } from '../data';

interface HeroProps {
  onScrollNext: () => void;
}

export default function Hero({ onScrollNext }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full h-[100vh] min-h-[100vh] max-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-black"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Karina Wedding Photography Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.35] scale-105"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
      </div>

      {/* Main Branding Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl select-none flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-viaoda text-7xl sm:text-8xl md:text-9xl tracking-tight text-white mb-6 uppercase select-none pointer-events-none"
        >
          Karina
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-white/40 mb-8origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-pinyon text-4xl sm:text-5xl md:text-6xl text-white/90 font-light select-none pointer-events-none mb-12"
        >
          Capturing Love Stories
        </motion.p>
      </div>

      {/* Bounce Call-to-Action */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.4, duration: 1 }}
        onClick={onScrollNext}
        className="absolute bottom-10 z-20 text-white/40 hover:text-white transition-colors flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] font-dmsans focus:outline-none cursor-pointer"
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
