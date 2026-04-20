"use client";

import { motion } from "framer-motion";

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 70, damping: 20 } 
  },
};

const slideInRight: any = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 70, damping: 20 } 
  },
};

export default function PortalPage() {
  return (
    <main className="pt-24 pb-32 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 mt-8"
      >
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface tracking-tight mb-4">
          Your Sanctuary.
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          A curated view of your wellness journey, upcoming rituals, and tailored recommendations.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col gap-8"
        >
          {/* Upcoming Appointment */}
          <motion.section
            variants={fadeInUp}
            className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-[0px_20px_40px_rgba(75,71,56,0.06)] relative overflow-hidden group"
          >
            {/* Ambient Background Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
            
            <div className="flex justify-between items-start mb-10 relative z-10">
              <h2 className="font-headline text-3xl text-on-surface tracking-tight">Upcoming Appointment</h2>
              <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs uppercase tracking-widest font-label">Confirmed</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
              <div className="flex-shrink-0 w-24 h-24 bg-surface-container-low rounded-2xl flex flex-col items-center justify-center text-primary border border-outline-variant/15 shadow-sm">
                <span className="font-label text-sm uppercase tracking-widest opacity-80">OCT</span>
                <span className="font-headline text-3xl mt-1">24</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-headline text-2xl text-on-surface mb-3">Signature Botanical Facial</h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-on-surface-variant font-body">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] opacity-70">schedule</span>
                    <span>2:00 PM - 3:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] opacity-70">person</span>
                    <span>with Elara</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 relative z-10">
              <button className="bg-gradient-to-tr from-primary to-primary-container text-on-primary font-body text-sm font-medium px-8 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                View Details
              </button>
              <button className="bg-surface-container-highest text-primary font-body text-sm font-medium px-8 py-3 rounded-full hover:bg-surface-variant transition-colors">
                Reschedule
              </button>
            </div>
          </motion.section>

          {/* Treatment History */}
          <motion.section
            variants={fadeInUp}
            className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/10 shadow-[0px_4px_20px_rgba(75,71,56,0.02)]"
          >
            <div className="flex justify-between items-end mb-8 border-b border-outline-variant/15 pb-6">
              <h2 className="font-headline text-2xl text-on-surface tracking-tight">Treatment History</h2>
              <a className="font-headline text-sm text-primary underline underline-offset-4 decoration-primary-container hover:text-on-primary-container transition-colors" href="#">View All</a>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { name: "Deep Tissue Restoration", date: "September 12, 2024", duration: "60 Min" },
                { name: "Aura Glow Peel", date: "August 05, 2024", duration: "45 Min" },
                { name: "Hot Stone Therapy", date: "June 20, 2024", duration: "90 Min" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex justify-between items-center group cursor-pointer p-4 -mx-4 rounded-xl hover:bg-surface-container-lowest transition-colors"
                >
                  <div>
                    <h4 className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="font-body text-sm text-on-surface-variant mt-1 flex gap-2 items-center">
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                      <span>{item.duration}</span>
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300">arrow_forward</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-4 flex flex-col gap-8"
        >
          {/* Personalized Preferences */}
          <motion.section
            variants={slideInRight}
            className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 shadow-[0px_4px_20px_rgba(75,71,56,0.02)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-tertiary">tune</span>
              <h2 className="font-headline text-xl text-on-surface tracking-tight">Personalized Preferences</h2>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
              Based on your previous visits, we curate your sanctuary to these specifications.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "water_drop", label: "Lavender Oil" },
                { icon: "pan_tool", label: "Firm Pressure" },
                { icon: "music_note", label: "Ambient Nature" },
                { icon: "local_fire_department", label: "Heated Bed" }
              ].map((pref, i) => (
                <div key={i} className="bg-surface-container-lowest px-4 py-2.5 rounded-full flex items-center gap-2 border border-outline-variant/15 hover:border-tertiary-container transition-colors shadow-sm cursor-default">
                  <span className="material-symbols-outlined text-[18px] text-tertiary opacity-80">{pref.icon}</span>
                  <span className="font-body text-sm font-medium">{pref.label}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 font-headline text-sm text-primary hover:text-on-primary-container transition-colors flex items-center gap-1 group">
              Update Preferences
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </motion.section>

          {/* Recommended Product */}
          <motion.section
            variants={slideInRight}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-surface-container-lowest rounded-2xl shadow-[0px_20px_40px_rgba(75,71,56,0.06)] overflow-hidden group flex flex-col cursor-pointer border border-outline-variant/10"
          >
            <div className="h-56 w-full relative overflow-hidden bg-surface-container">
              <img 
                alt="Minimalist frosted glass serum bottle" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAipjzYU-nzUxXxDVWtKO9Debog7I4AUzu9bZjRdWOfiniABsRN_pSt4q3og2p0QfJoRBdnPfFg8ZJ5xsc2d7KwS2eGHxhCke5WvymiHSEga_CwZ0y_KmJFEFklm7XwT3YNVMiBtC5ooMZ7oHZitxN70oWe21BhGoEILqYspBJ0yr6CWZVaFTkp1-bXEXOLttYdrazHFZt1LQn14ubj8aaZX2G1J-OqFnJM2olQcHFb0qGDAWLBHeKWck6XoK4_EnQGwB8dLi7cVpYI"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1.5 rounded-full font-label text-[10px] sm:text-xs uppercase tracking-widest text-tertiary font-semibold shadow-sm">
                  Curated For You
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-headline text-xl text-on-surface mb-2">Luminous Night Serum</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed flex-grow">
                To maintain the hydration levels achieved during your last botanical facial.
              </p>
              <div className="flex justify-between items-center mt-auto pt-6 border-t border-outline-variant/15">
                <span className="font-headline text-xl text-on-surface">$85</span>
                <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors flex items-center gap-2 group/btn">
                  <span className="font-label text-sm uppercase tracking-widest font-medium group-hover/btn:mr-1 transition-all">Add to Bag</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover/btn:rotate-90">add_circle</span>
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
