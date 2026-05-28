import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { ProjectImage } from '../types';

interface GalleryProps {
  onImageClick: (image: ProjectImage) => void;
  selectedImage: ProjectImage | null;
  onCloseLightbox: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
}

export default function Gallery({
  onImageClick,
  selectedImage,
  onCloseLightbox,
  onPrevImage,
  onNextImage
}: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'portraits' | 'moments' | 'details'>('all');

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (activeFilter === 'all') return true;
    return img.category === activeFilter;
  });

  const filterTabs: { label: string; id: 'all' | 'portraits' | 'moments' | 'details' }[] = [
    { label: 'All Artifacts', id: 'all' },
    { label: 'Portraits', id: 'portraits' },
    { label: 'Candid Moments', id: 'moments' },
    { label: 'Fine Details', id: 'details' }
  ];

  return (
    <section
      id="gallery"
      className="bg-black text-white py-24 md:py-36 px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 select-none"
        >
          <span className="font-dmsans text-[10px] tracking-[0.4em] text-white/40 uppercase block mb-4">
            [ PORTFOLIO ]
          </span>
          <h2 className="font-viaoda text-4xl md:text-5xl uppercase tracking-wider text-white">
            Monochrome Archive
          </h2>
          <p className="font-pinyon text-3xl md:text-4xl text-white/60 mt-2">
            a curated study of light & human devotion
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-white/5 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`font-dmsans text-xs uppercase tracking-[0.2em] relative py-2 px-3 transition-colors cursor-pointer ${
                activeFilter === tab.id ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {tab.label}
              {activeFilter === tab.id && (
                <motion.div
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                onClick={() => onImageClick(img)}
                className="group cursor-pointer select-none"
              >
                <div className="aspect-[4/5] bg-zinc-950 overflow-hidden relative border border-white/10 group-hover:border-white/30 transition-all duration-500">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-[1.12] transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105 group-hover:brightness-100 group-hover:contrast-125"
                  />
                  
                  {/* High contrast hover eye indicator */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="border border-white/40 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                      <Eye size={18} />
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-viaoda text-sm text-white/9w group-hover:text-white uppercase tracking-wider">
                      {img.title}
                    </h3>
                    <p className="font-dmsans text-[10px] tracking-wider text-white/30 uppercase mt-1">
                      {img.location}
                    </p>
                  </div>
                  <span className="font-dmsans text-[10px] tracking-wider text-white/30">
                    {img.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX COMPONENT */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-6 md:p-12 select-none"
          >
            {/* Top Close Control */}
            <div className="flex justify-between items-center w-full z-10">
              <div>
                <span className="font-dmsans text-[9px] tracking-[0.25em] text-white/40 uppercase">
                  Karina Photography Archive
                </span>
                <p className="font-viaoda text-lg text-white/80 select-all tracking-wider md:block hidden">
                  {selectedImage.title}
                </p>
              </div>
              <button
                onClick={onCloseLightbox}
                className="text-white/60 hover:text-white cursor-pointer border border-white/10 hover:border-white/30 p-2 transition-colors flex items-center justify-center focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Inner Content Arena */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full py-4 my-2">
              {/* Previous Control */}
              <button
                onClick={onPrevImage}
                className="absolute left-0 md:-left-16 z-10 text-white/40 hover:text-white p-3 cursor-pointer hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft size={36} />
              </button>

              {/* Main Image View */}
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] max-w-full object-contain grayscale contrast-[1.12]"
                />
              </motion.div>

              {/* Next Control */}
              <button
                onClick={onNextImage}
                className="absolute right-0 md:-right-16 z-10 text-white/40 hover:text-white p-3 cursor-pointer hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight size={36} />
              </button>
            </div>

            {/* Bottom Panel Description */}
            <div className="max-w-2xl mx-auto text-center z-10">
              <span className="font-pinyon text-3xl text-white/70 block mb-2 font-light">
                {selectedImage.title}
              </span>
              <p className="font-dmsans text-xs md:text-sm text-white/60 leading-relaxed font-light mb-2">
                {selectedImage.description}
              </p>
              <div className="flex justify-center gap-6 text-[10px] tracking-widest text-white/30 uppercase font-dmsans">
                <span>Loc: {selectedImage.location}</span>
                <span>•</span>
                <span>Year: {selectedImage.year}</span>
                <span>•</span>
                <span>Type: {selectedImage.category}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
