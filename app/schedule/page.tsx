"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function SchedulePage() {
  const [selectedService, setSelectedService] = useState("facial");
  const [selectedPractitioner, setSelectedPractitioner] = useState("elena");
  const [selectedTime, setSelectedTime] = useState("11:30 AM");

  return (
    <main className="flex-grow max-w-[1400px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10 pt-24 pb-48">
      
      {/* Left Column: Editorial Header & Selection */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="lg:col-span-7 flex flex-col gap-16"
      >
        {/* Headline Area */}
        <motion.section variants={fadeUpVariants} className="mt-8 md:mt-12">
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface tracking-tight leading-tight mb-6">
            Curate Your <br /> Sanctuary
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
            Select your preferred service, specialist, and a moment of tranquility that aligns with your rhythm.
          </p>
        </motion.section>

        {/* Step 1: Service Selection */}
        <motion.section variants={fadeUpVariants} className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="font-label text-sm uppercase tracking-widest text-tertiary font-medium">Step 01</span>
            <h2 className="font-headline text-2xl text-on-surface">The Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Signature Facial */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService("facial")}
              className={`p-6 rounded-2xl relative overflow-hidden cursor-pointer border transition-all duration-300 ${
                selectedService === "facial" 
                  ? "bg-surface-container-lowest border-primary/30 ring-2 ring-primary/20 shadow-md" 
                  : "bg-surface-container-low border-outline-variant/15 hover:bg-surface-container"
              }`}
            >
              <AnimatePresence>
                {selectedService === "facial" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute top-0 right-0 p-4"
                  >
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <h3 className="font-headline text-xl text-on-surface mb-2 mt-2">Signature Facial</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                A deeply restorative botanical treatment tailored to your skin's unique needs.
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-outline-variant/10 pt-4">
                <span className="font-label tracking-widest text-xs uppercase text-on-surface-variant">75 Min</span>
                <span className="font-headline text-lg text-primary">$185</span>
              </div>
            </motion.div>

            {/* Deep Tissue Reset */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService("massage")}
              className={`p-6 rounded-2xl relative overflow-hidden cursor-pointer border transition-all duration-300 ${
                selectedService === "massage" 
                  ? "bg-surface-container-lowest border-primary/30 ring-2 ring-primary/20 shadow-md" 
                  : "bg-surface-container-low border-outline-variant/15 hover:bg-surface-container"
              }`}
            >
              <AnimatePresence>
                {selectedService === "massage" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute top-0 right-0 p-4"
                  >
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <h3 className="font-headline text-xl text-on-surface mb-2 mt-2">Deep Tissue Reset</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                Focused muscular release to alleviate chronic tension and restore mobility.
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-outline-variant/10 pt-4">
                <span className="font-label tracking-widest text-xs uppercase text-on-surface-variant">90 Min</span>
                <span className="font-headline text-lg text-on-surface">$210</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Step 2: Specialist Selection */}
        <motion.section variants={fadeUpVariants} className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="font-label text-sm uppercase tracking-widest text-tertiary font-medium">Step 02</span>
            <h2 className="font-headline text-2xl text-on-surface">The Practitioner</h2>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x hide-scrollbar px-2 -mx-2">
            {[
              { id: "elena", name: "Elena V.", role: "Master Esthetician", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrE1_RFGdExKXDNRS9mYASQZXi1YP6lVrBcX6gPIXZrHUDtRTn4HvJYpiP7Co2c8cKJ2KCcbPd63jtzm7IA7AmTkALpC0X8PGdwq2Qh8FsMMrfuJe42M-5Sasi16DkVt-HuavB-t51pJk5hhd0NwMa6tpSO_oTWl_Nh_-4uh-cvUDoMMEKhQNgG8w-dBOhoKvOYbT4B6jcwM8GGfAJKlcOOFEc0wGoujP7rUNN8x4gFnpnWzPYOdTrrFZRKYUmqctKGS0J_fEHaztb" },
              { id: "sarah", name: "Sarah J.", role: "Holistic Therapist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcpIl-2TIT1sP2iREu3jlTVT8kDFXeJbKax9sMcuQEcMzCX5AYBRdnjAWViUnsk08n3Jx2C5MKTbMJpBf8p7dOnNtYWOi3Mh1gh6QaZiDHWh-_rOgorMsxL1Tqye9sE8tdrcLyTwZxj46WOeOy4xKgTTNoL7j7ckRKhbXJ97zM0Y-IX4moC4P4bHe73EmTOuNlvJQSScPYoFSuUXPouxW8moCOY7GilPOwiHd1gLRaLfCDt3yJ5YxsoZaHqCN7GmR9nFimOoQudq3L" }
            ].map((practitioner) => (
              <motion.div 
                key={practitioner.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPractitioner(practitioner.id)}
                className={`flex-shrink-0 w-48 p-5 rounded-2xl flex flex-col items-center gap-4 snap-start cursor-pointer transition-all duration-300 relative border ${
                  selectedPractitioner === practitioner.id 
                    ? "bg-surface-container-lowest border-primary/30 ring-2 ring-primary/20 shadow-md"
                    : "bg-surface-container-low border-outline-variant/15 hover:bg-surface-container"
                }`}
              >
                <AnimatePresence>
                  {selectedPractitioner === practitioner.id && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute top-3 right-3"
                    >
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="w-24 h-24 rounded-full overflow-hidden mb-2 ring-4 ring-surface-container-highest">
                  <img 
                    alt={practitioner.name} 
                    className={`w-full h-full object-cover transition-all duration-700 ${selectedPractitioner === practitioner.id ? "grayscale-0 scale-105" : "grayscale opacity-70"}`} 
                    src={practitioner.img} 
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-headline text-lg text-on-surface">{practitioner.name}</h4>
                  <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant mt-2">{practitioner.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Any Available */}
            <motion.div 
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPractitioner("any")}
              className={`flex-shrink-0 w-48 p-5 rounded-2xl flex flex-col items-center gap-4 snap-start cursor-pointer transition-all duration-300 relative border ${
                selectedPractitioner === "any" 
                  ? "bg-surface-container-lowest border-primary/30 ring-2 ring-primary/20 shadow-md"
                  : "bg-surface-container-low border-outline-variant/15 hover:bg-surface-container"
              }`}
            >
              <AnimatePresence>
                  {selectedPractitioner === "any" && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute top-3 right-3"
                    >
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 ring-4 ring-surface-container-highest flex items-center justify-center bg-surface-variant">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">psychiatry</span>
              </div>
              <div className="text-center">
                <h4 className="font-headline text-lg text-on-surface">Any Available</h4>
                <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant mt-2">Next Opening</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      {/* Right Column: Calendar Matrix & Summary */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5 flex flex-col gap-12 mt-8 lg:mt-32"
      >
        <section className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-[0px_20px_40px_rgba(75,71,56,0.06)] border border-outline-variant/10 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex justify-between items-center mb-10 relative z-10">
            <h2 className="font-headline text-2xl text-on-surface">October 2023</h2>
            <div className="flex gap-1">
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-2 mb-6 text-center font-label text-xs uppercase text-on-surface-variant tracking-widest relative z-10">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-7 gap-x-2 gap-y-4 text-center font-body text-sm mb-10 relative z-10">
            {[1, 2, 3].map(d => <div key={`prev-${d}`} className="py-2 text-surface-variant">{d}</div>)}
            {[4, 5, 6, 7, 8, 9].map(d => <div key={`curr-${d}`} className="py-2 text-on-surface cursor-pointer hover:bg-surface-container rounded-full transition-colors">{d}</div>)}
            
            <div className="py-2 bg-primary/10 text-primary font-medium rounded-xl relative cursor-pointer ring-1 ring-primary/20">
              10
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            </div>
            
            {[11].map(d => <div key={`curr-${d}`} className="py-2 text-on-surface cursor-pointer hover:bg-surface-container rounded-full transition-colors">{d}</div>)}
            
            <div className="py-2 text-on-surface cursor-pointer hover:bg-surface-container rounded-full relative transition-colors">
              12
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-outline-variant rounded-full"></div>
            </div>
            
            {[13, 14, 15, 16, 17, 18].map(d => <div key={`curr-${d}`} className="py-2 text-on-surface cursor-pointer hover:bg-surface-container rounded-full transition-colors">{d}</div>)}
          </div>

          {/* Time Slots */}
          <div className="border-t border-outline-variant/15 pt-8 relative z-10">
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-5">Available Times</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["09:00 AM", "11:30 AM", "02:00 PM", "04:15 PM"].map((time) => (
                <button 
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-2 rounded-xl text-sm font-body transition-all duration-300 ${
                    selectedTime === time 
                      ? "bg-primary-container text-on-primary-container font-medium shadow-sm" 
                      : "border border-outline-variant/30 text-on-surface-variant hover:border-primary/50 hover:text-on-surface"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      {/* Floating Booking Bar (Desktop) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", damping: 25 }}
        className="fixed bottom-0 left-0 w-full z-40 bg-surface-container-lowest/80 backdrop-blur-2xl md:px-12 py-5 border-t border-outline-variant/10 shadow-[0px_-20px_40px_rgba(75,71,56,0.04)] hidden md:block"
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-0">
          <div className="flex items-center gap-10">
            <div>
              <p className="font-label text-xs uppercase text-on-surface-variant tracking-widest mb-1.5">Service</p>
              <p className="font-headline text-lg text-on-surface">
                {selectedService === "facial" ? "Signature Facial" : "Deep Tissue Reset"}
              </p>
            </div>
            <div className="w-px h-10 bg-outline-variant/30"></div>
            <div>
              <p className="font-label text-xs uppercase text-on-surface-variant tracking-widest mb-1.5">Date & Time</p>
              <p className="font-headline text-lg text-on-surface">Oct 10, {selectedTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="font-label text-xs uppercase text-on-surface-variant tracking-widest mb-1.5">Total</p>
              <p className="font-headline text-xl text-primary">
                {selectedService === "facial" ? "$185" : "$210"}
              </p>
            </div>
            <button className="bg-gradient-to-tr from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-body font-medium tracking-wide shadow-[0px_8px_20px_rgba(108,94,6,0.3)] hover:shadow-[0px_12px_24px_rgba(108,94,6,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Confirm Booking
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Continue Button (above bottom nav) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-[88px] left-0 w-full px-6 z-40 md:hidden"
      >
        <button className="w-full bg-gradient-to-tr from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-body font-medium tracking-wide shadow-[0px_8px_20px_rgba(108,94,6,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex justify-between items-center">
          <span>Continue</span>
          <span className="font-headline">{selectedService === "facial" ? "$185" : "$210"}</span>
        </button>
      </motion.div>
    </main>
  );
}
