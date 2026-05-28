import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { ProjectImage } from '../types';

interface IntroProps {
  onImageClick: (image: ProjectImage) => void;
}

export default function Intro({ onImageClick }: IntroProps) {
  // Grab the first 3 preview images
  const previewImages = GALLERY_IMAGES.slice(0, 3);

  return (
    <section
      id="intro"
      className="bg-black text-white py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro narrative in DM Sans */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <span className="font-dmsans text-[10px] tracking-[0.3em] text-white/40 uppercase block mb-4">
              [ PHILOSOPHY ]
            </span>
            <h2 className="font-viaoda text-3xl md:text-4xl tracking-wide uppercase text-white/90">
              The Art of the Silent Frame
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 md:pl-8"
          >
            <p className="font-dmsans text-lg md:text-xl font-light leading-relaxed text-white/70">
              To photograph a wedding is to document memory in its purest, most sincere form. 
              I do not seek artificial poses or staged grandeur. Instead, my lens dwells in 
              the shadows, capturing the fleeting squeeze of a hand, a quiet veil ripple, and 
              the silent, honest exchange of promises. In monochrome, every distraction falls away — leaving only the raw, elegant truth of your story.
            </p>
          </motion.div>
        </div>

        {/* 3 preview gallery thumbnails in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
          {previewImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => onImageClick(img)}
            >
              {/* Image Container with Desaturated Filter */}
              <div className="aspect-[4/5] overflow-hidden bg-zinc-950 relative border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.12] transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105 group-hover:brightness-100 group-hover:contrast-125"
                />
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Caption in DM Sans & Pinyon */}
              <div className="mt-6 flex justify-between items-baseline">
                <div>
                  <h3 className="font-viaoda text-base text-white/90 group-hover:text-white transition-colors uppercase tracking-wider">
                    {img.title}
                  </h3>
                  <p className="font-dmsans text-[10px] tracking-[0.15em] text-white/40 uppercase mt-1">
                    {img.location}
                  </p>
                </div>
                <span className="font-pinyon text-2xl text-white/40 group-hover:text-white/80 transition-colors">
                  #{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
