import { motion } from 'motion/react';
import { PROFILE_IMAGE_URL } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative aspect-[3/4] w-full max-w-[400px] border border-white/10 p-2 bg-[#050505]">
              <div className="h-full w-full overflow-hidden bg-zinc-950 relative">
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Karina, Editorial Wedding Photographer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.12] hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 font-pinyon text-6xl text-white/25 select-none pointer-events-none">
                Karina
              </div>
            </div>
          </motion.div>

          {/* Biography Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <span className="font-dmsans text-[10px] tracking-[0.4em] text-white/40 uppercase block mb-4">
              [ THE VISIONARY ]
            </span>
            <h2 className="font-viaoda text-4xl md:text-5xl uppercase tracking-wider text-white mb-8">
              Behind the Lens
            </h2>
            
            <div className="font-dmsans text-sm md:text-base font-light text-white/70 space-y-6 leading-relaxed">
              <p>
                As an observer of human devotion, I view wedding ceremonies not merely as scheduled affairs, but as cinematic, living poetry. Based in Europe, I specialize in fine-art documentary style wedding photography, focusing closely on the play of natural light, negative space, and candid intimacy.
              </p>
              <p>
                My work is bound strictly to analog sensibilities. By choosing high-contrast black and white palettes, I strip away the static of color, capturing the sheer presence and kinetic emotion shared between souls. 
              </p>
              <p>
                From private registry ceremonies on the winding coastlines of Italy to lush estate receptions in southern France, I approach every celebration with identical artistic devotion: soft steps, a silent shutter, and complete presence.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <h4 className="font-viaoda text-xs tracking-wider uppercase text-white/40 mb-1">
                  Exhibitions Details
                </h4>
                <p className="font-dmsans text-xs text-white/80">
                  Milan Fine Art Expo • London Monochrome Gallery
                </p>
              </div>
              <div>
                <h4 className="font-viaoda text-xs tracking-wider uppercase text-white/40 mb-1">
                  Featured Print
                </h4>
                <p className="font-dmsans text-xs text-white/80">
                  The Editorial Wedding Journal • Vogue Brides
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
