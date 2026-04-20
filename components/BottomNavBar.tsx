"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: "spa", path: "/" },
    { name: "Schedule", icon: "calendar_today", path: "/schedule" },
    { name: "Shop", icon: "local_mall", path: "/store" },
    { name: "Account", icon: "person", path: "/portal" },
  ];

  return (
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-surface-container-lowest/80 backdrop-blur-2xl shadow-[0px_-10px_30px_rgba(75,71,56,0.08)] rounded-t-3xl"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.name}>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center justify-center rounded-xl px-6 py-2 transition-colors ${
                isActive ? "bg-surface-container text-primary-container" : "text-on-surface-variant hover:text-primary-container"
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              <span className="font-serif text-[10px] uppercase tracking-widest">{item.name}</span>
            </motion.div>
          </Link>
        );
      })}
    </motion.nav>
  );
}
