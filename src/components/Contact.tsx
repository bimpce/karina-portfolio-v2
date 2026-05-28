import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick client-side checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API booking submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Generate a sophisticated custom numeric/alpha booking reference code
      const generatedCode = `KR-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
      setBookingCode(generatedCode);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        message: ''
      });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 md:py-36 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 select-none"
        >
          <span className="font-dmsans text-[10px] tracking-[0.4em] text-white/40 uppercase block mb-4">
            [ COMMENCEMENT ]
          </span>
          <h2 className="font-viaoda text-4xl md:text-5xl uppercase tracking-wider text-white">
            Secure Your Date
          </h2>
          <p className="font-pinyon text-3xl md:text-4xl text-white/60 mt-2">
            reserve a canvas of fleeting devotion
          </p>
        </motion.div>

        {/* Contact Inner Content */}
        <div className="border border-white/10 p-8 md:p-12 bg-[#050505] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Inputs Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="font-dmsans text-[10px] tracking-[0.2em] text-white/40 uppercase">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Eleanor & Julian"
                      className="bg-black border border-white/15 text-white py-3 px-4 text-sm font-dmsans focus:border-white focus:outline-none transition-colors duration-300 placeholder-white/20 select-all"
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="font-dmsans text-[10px] tracking-[0.2em] text-white/40 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. eleanor@domain.com"
                      className="bg-black border border-white/15 text-white py-3 px-4 text-sm font-dmsans focus:border-white focus:outline-none transition-colors duration-300 placeholder-white/20 select-all"
                    />
                  </div>
                </div>

                {/* Inputs Row 2: Selected Date */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="date" className="font-dmsans text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    Celebration Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="bg-black border border-white/15 text-white py-3 px-4 text-sm font-dmsans focus:border-white focus:outline-none transition-colors duration-300 placeholder-white/20 select-all"
                  />
                </div>

                {/* Inputs Row 3: Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="font-dmsans text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    Our Story & Aesthetic Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your venue, the elements you are planning, and what draws you both to black & white imagery..."
                    className="bg-black border border-white/15 text-white py-3 px-4 text-sm font-dmsans focus:border-white focus:outline-none transition-colors duration-300 placeholder-white/20 resize-none select-all"
                  />
                </div>

                {/* Errors display */}
                {errorMsg && (
                  <p className="font-dmsans text-xs text-zinc-100 tracking-wider font-light bg-black border border-white/20 p-3">
                    {errorMsg}
                  </p>
                )}

                {/* Submit button inside pure black and white specs */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group border border-white text-white hover:bg-white hover:text-black py-4 px-8 text-xs font-dmsans uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-3 cursor-pointer focus:outline-none disabled:opacity-40"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Transmitting Request</span>
                        <Loader2 className="animate-spin" size={14} />
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 flex flex-col items-center select-none"
              >
                <div className="border border-white p-4 rounded-full mb-6">
                  <Check size={28} />
                </div>
                
                <h3 className="font-viaoda text-2xl uppercase tracking-widest text-white mb-3">
                  Transmission Complete
                </h3>
                
                <p className="font-pinyon text-3xl text-white/70 mb-6">
                  witnessing your stories shortly...
                </p>

                <div className="max-w-md text-center space-y-4 font-dmsans font-light text-sm text-white/60 mb-8 leading-relaxed">
                  <p>
                    Thank you. Your inquiry has been received directly in Karina's digital archive. She reviews every story with extreme care and will get back to your mail within 24 hours.
                  </p>
                  
                  {/* Digital reference receipt in mono font */}
                  <div className="inline-block bg-black border border-white/10 px-5 py-3 tracking-widest font-mono text-xs uppercase text-white/80 select-all mt-4">
                    Booking Reference ID: {bookingCode}
                  </div>
                </div>

                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="border border-white/35 hover:border-white text-white/60 hover:text-white py-3 px-6 text-[10px] font-dmsans uppercase tracking-[0.25em] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
