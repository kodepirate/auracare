"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`hidden md:flex fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(75,71,56,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        <Link href="/" className="text-2xl font-serif italic text-on-surface font-headline font-bold hover:opacity-80 transition-opacity">
          Aura Wellness
        </Link>
        <nav className="flex gap-8 items-center">
          {['Sanctuary', 'Services', 'Storefront', 'Schedule'].map((item, i) => (
            <motion.div key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item === "Storefront" ? "/store" : item === "Schedule" ? "/schedule" : item === "Services" ? "/portal" : "/"} 
                className="font-serif tracking-tight text-on-surface-variant hover:text-on-surface transition-colors hover:bg-surface-variant/50 duration-300 px-3 py-1 rounded-sm"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-on-surface-variant hover:text-on-surface transition-colors p-2 rounded-full"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link className="font-serif tracking-tight text-on-surface hover:text-primary-container transition-colors" href="/portal">
              Profile
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
