"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden flex flex-col">
      {/* Hero Section (Editorial Asymmetry) */}
      <section className="min-h-[90vh] md:min-h-[921px] px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full lg:w-5/12 pt-24 lg:pt-0 flex flex-col gap-8 z-10"
        >
          <motion.span variants={fadeInUp} className="font-label text-sm uppercase tracking-[0.05em] text-tertiary">
            The Curated Sanctuary
          </motion.span>
          <motion.h1 variants={fadeInUp} className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.1] text-on-surface">
            Elevate<br />
            <span className="italic font-light text-on-surface-variant">Your Being</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-body text-lg text-on-surface-variant max-w-md font-light leading-relaxed">
            Step into a space designed for profound stillness. Our treatments blend ancient rituals with modern precision to restore your natural rhythm.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-tr from-primary to-primary-container text-on-primary font-label text-sm tracking-wide px-8 py-4 rounded-md shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2 group"
            >
              Book Your Sanctuary
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: heroY }}
          className="w-full lg:w-7/12 relative aspect-[4/5] lg:aspect-auto lg:h-[870px]"
        >
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvPHwq7IzG7-alRzQc0-rJaRpUOqPW_6a1dmmxfIbFVeMxRxHWYSIrlceHfi1gVx5NEUGAeoixNA68v8TX6piJdQawhQM0SLEmCZD5S1UDSS7dzfOkXfBCLqqw1nQKjVGxG5Onm4cGAlu-TzqCES6J9z5de2FQCksR0E2a4LnCMOVdMva4E4sf_3KVDyFJMDS-AjssttgY5z31KD1q5kPRFRxsgC9dn8zqgEHzGXIJsqlNDp5T9in2xrnVdgpXUO1MSgv1eCNlA9c8" 
            alt="Interior of a luxury minimalist spa"
            fill
            className="object-cover rounded-xl shadow-[0px_20px_40px_rgba(75,71,56,0.06)]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent rounded-xl"></div>
        </motion.div>
      </section>

      {/* Brand Story (Tonal Shift, Whitespace) */}
      <section className="mt-32 py-32 bg-surface-container-low px-6 lg:px-16 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl flex flex-col items-center gap-10"
        >
          <motion.span variants={fadeInUp} className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-5xl leading-tight text-on-surface">
            "True luxury is the space to breathe deeply, surrounded by intentional beauty and unparalleled care."
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-px h-16 bg-outline-variant/40 origin-top" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.4 }}></motion.div>
          <motion.p variants={fadeInUp} className="font-body text-on-surface-variant text-lg max-w-xl font-light">
            At Aura Wellness, every texture, scent, and sound is curated to guide you away from the noise of the world and back to yourself.
          </motion.p>
        </motion.div>
      </section>

      {/* Curated Services Preview */}
      <section className="mt-32 pb-16 lg:pb-40 px-6 lg:px-16 max-w-[1600px] mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">Curated Rituals</h2>
            <p className="font-body text-on-surface-variant font-light max-w-md">Select from our bespoke offerings, tailored to your unique physical and emotional architecture.</p>
          </div>
          <motion.a 
            whileHover={{ x: 5 }}
            className="font-headline text-lg text-primary hover:text-primary-container transition-colors flex items-center gap-2 border-b border-primary/30 pb-1" 
            href="/store"
          >
            View All Services
            <span className="material-symbols-outlined text-sm">trending_flat</span>
          </motion.a>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_20px_40px_rgba(75,71,56,0.06)] transition-all duration-500 flex flex-col group relative overflow-hidden"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="origin-bottom">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-8 relative">
                <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWigXa2tMDKauwbp6cJGfet9LGqgRteMCDCVcA92sxxld2t5hremzOfHCvdnLjJOQ8Rm-kZiD2ejZsYZ5mZPK6ZyZUpR1F8pmjrsjQeODr_abV2ZktcLycJrU28C1pvvb_NOpFQHIOSaS8ufcuhP2GyfpZGwR-KFgPC08EE91zdNPh5JlgLIjv4zdwm0e4gx_Y-s_XMElyv5nLhH3X6ricpKY87nReDE3Uzf_Pz5W-_GzFFu1_vP_jzOitJYYQRgMtrtWYeOXt7Mm" alt="Botanical Facials" />
              </div>
            </motion.div>
            <span className="font-label text-xs uppercase tracking-widest text-tertiary mb-3 relative z-10">01</span>
            <h3 className="font-headline text-2xl text-on-surface mb-3 relative z-10">Botanical Facials</h3>
            <p className="font-body text-on-surface-variant font-light mb-8 flex-grow relative z-10">Advanced holistic techniques utilizing potent plant-based serums to restore clarity and luminescence to your complexion.</p>
            <motion.button whileHover={{ scale: 1.02 }} className="bg-surface-container-highest text-primary font-label text-sm tracking-wide px-6 py-3 rounded-md self-start hover:bg-surface-variant transition-colors relative z-10">
              Explore Facials
            </motion.button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_20px_40px_rgba(75,71,56,0.06)] transition-all duration-500 flex flex-col lg:translate-y-12 group relative overflow-hidden"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="origin-bottom">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-8 relative">
                <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKGRAEEDBYWAvcMwWsxH2tIlzRG_6G1-qmvf29jU9m4UcpIEuFBsXJBqTD6PLWHxI-0XmkGBgsEHvNQxV9UNTEQFFaucaLeal-L0CuFMLc-9owxHTL8Z5btkoMNFmRlOFJkpgMLobeYapw0xNPUi8zJSCZeAq8go4Z9T97Bj40UhcUndSL7WDI3wGCjrKd-ycNdeMRBEvdhZjoudQe7Nh-fq89Sg1k6hSRrG07DqvlCs1eer-VJVolafjW4v43zu8mQLIv-w20css" alt="Somatic Massages" />
              </div>
            </motion.div>
            <span className="font-label text-xs uppercase tracking-widest text-tertiary mb-3 relative z-10">02</span>
            <h3 className="font-headline text-2xl text-on-surface mb-3 relative z-10">Somatic Massages</h3>
            <p className="font-body text-on-surface-variant font-light mb-8 flex-grow relative z-10">Deeply intuitive bodywork designed to release somatic holding patterns, promoting profound physical and mental liberation.</p>
            <motion.button whileHover={{ scale: 1.02 }} className="bg-surface-container-highest text-primary font-label text-sm tracking-wide px-6 py-3 rounded-md self-start hover:bg-surface-variant transition-colors relative z-10">
              Explore Massages
            </motion.button>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_20px_40px_rgba(75,71,56,0.06)] transition-all duration-500 flex flex-col lg:translate-y-24 group relative overflow-hidden"
          >
             <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="origin-bottom">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-8 relative">
                <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCynU4ykooe0w_zqp_Jt3lcYQn3KYRJq8hWC_7wI78jI7O91jxnLqJ9wRAVAqB2vIcxY-dmQaN_-DW4G0VxASeR-pldRWWhKlLdtQB2UBUseC6sJ9sBAwnYX3LcIvxQolRPSF_YiSPAGdAWz1jaequsdhK3W1c4mGp_piTjxoMOOiIvSdyetbOXfmK9Obruuu_vopM_MMtr2tuwrv0ZZAWRoXcbYzh81q7N873segzVnetaVYz2fHk38HqjTJjhw7SRjO0SBJ-IhvRR" alt="Wellness Consultations" />
              </div>
            </motion.div>
            <span className="font-label text-xs uppercase tracking-widest text-tertiary mb-3 relative z-10">03</span>
            <h3 className="font-headline text-2xl text-on-surface mb-3 relative z-10">Wellness Consultations</h3>
            <p className="font-body text-on-surface-variant font-light mb-8 flex-grow relative z-10">One-on-one sessions with our holistic practitioners to design a comprehensive lifestyle and nutritional framework.</p>
            <motion.button whileHover={{ scale: 1.02 }} className="bg-surface-container-highest text-primary font-label text-sm tracking-wide px-6 py-3 rounded-md self-start hover:bg-surface-variant transition-colors relative z-10">
              Explore Consultations
            </motion.button>
          </motion.div>

        </motion.div>
      </section>

      {/* Decorative BG element added for visual flair */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}
