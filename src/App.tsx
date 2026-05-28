import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ProjectImage } from './types';
import { GALLERY_IMAGES } from './data';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth navigation scrolling
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // offset back for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll to intro (the beginning of content) from Hero
  const handleScrollNext = () => {
    handleNavigate('intro');
  };

  // Automatically update active section on scroll
  useEffect(() => {
    const sections = ['home', 'gallery', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset value for accurate trigger

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightbox circular pagination
  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  };

  // Enable arrow key pressing for Lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* Structural Minimal Navigation Bar */}
      <Navbar />

      {/* Hero Visual Studio Area */}
      <Hero onScrollNext={handleScrollNext} />

      {/* Narrative & 3-Thumbnail Preview Row */}
      <Intro onImageClick={setSelectedImage} />

      {/* Interactive Gallery Collections Grid */}
      <Gallery
        onImageClick={setSelectedImage}
        selectedImage={selectedImage}
        onCloseLightbox={() => setSelectedImage(null)}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
      />

      {/* Editorial Biography */}
      <About />

      {/* Ultra Monochrome Booking form */}
      <Contact />

      {/* Footer copyright */}
      <Footer />

      {/* Elegant scroll-to-top button */}
      <ScrollToTop />
    </div>
  );
}
