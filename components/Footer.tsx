"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full border-t border-surface-variant bg-surface-container-low px-12 py-16 flex flex-col items-center gap-8 pb-32 md:pb-16"
    >
      <div className="text-xl font-serif text-on-surface font-headline font-semibold">
        Aura Wellness
      </div>
      <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
        {['Privacy', 'Terms', 'Boutique Locations', 'Contact'].map((item) => (
          <motion.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="#" className="font-serif text-sm tracking-wide text-on-surface-variant hover:text-primary-container transition-colors duration-300">
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>
      <div className="font-serif text-sm tracking-wide text-on-surface-variant/70">
        © 2024 Aura Wellness. The Curated Sanctuary.
      </div>
    </motion.footer>
  );
}
