"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Storefront() {
  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const itemImageHover: any = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="w-full relative overflow-hidden flex flex-col pt-8">
      {/* Storefront Hero */}
      <section className="w-full px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center max-w-[1440px] mx-auto">
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="w-full md:w-1/2 flex flex-col gap-6 items-start z-10"
        >
          <motion.span variants={fadeInUp} className="font-label text-xs tracking-[0.05em] text-tertiary uppercase">Curated Selection</motion.span>
          <motion.h1 variants={fadeInUp} className="font-headline text-4xl md:text-6xl tracking-[-0.02em] text-on-surface leading-tight">
            The Ritual<br />Continues at Home
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-body text-base text-on-surface-variant max-w-md leading-relaxed mt-4">
            Extend the serenity of the sanctuary. Discover our collection of professional-grade botanical skincare and sensory tools, designed to elevate your daily routine.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex gap-4 mt-6">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-tr from-primary to-primary-container text-on-primary font-body text-sm font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Shop All
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-surface-container-highest text-primary font-body text-sm font-medium px-8 py-3 rounded-md hover:bg-surface-container-high transition-colors">
              Explore Kits
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 h-[400px] md:h-[600px] rounded-xl overflow-hidden relative group"
        >
          <motion.div variants={itemImageHover} initial="rest" whileHover="hover" className="w-full h-full">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvXXJvOzYMrn2uQ9wFhw9qp3-ucv5I-JhF8_x2uFLl1wUjJCQEGApoQsjuQM9TSdqW6QAoR243mY3ih4VH10XQyUIeitrD9Zpy1OpA5QBovw-y84TzIKqjHONdKX8Nrsn5V1pam96euQrzIoITlBZaBHh6yGEuImEboLTC1lV1a0ALEH6qYIGGxsQ5Cwh3EVMwY5Iv5c9a1hISAgvNTdhs5VwlO3lBNTpFSnVj9usIbtxsVZxe9I3BPgCbC62Cz-QPwiMfk5qxLMd1" alt="Premium skincare bottles" fill className="object-cover" priority />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Category Navigation */}
      <section className="w-full px-6 md:px-12 py-8 bg-surface-container-low border-y border-outline-variant/15 relative z-20">
        <div className="flex gap-8 overflow-x-auto hide-scrollbar max-w-[1440px] mx-auto min-w-max pb-2">
          {['All Products', 'Cleansers', 'Serums & Oils', 'Ritual Kits', 'Tools'].map((category, index) => (
             <motion.button 
               key={category}
               whileHover={{ y: -2 }}
               className={`font-serif text-lg ${index === 0 ? 'text-primary border-b border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}
             >
               {category}
             </motion.button>
          ))}
        </div>
      </section>

      {/* Product Grid (Asymmetric) */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24 max-w-[1440px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >
          {/* Large Product Card */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-7 flex flex-col gap-4 group cursor-pointer">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container relative">
              <motion.div variants={itemImageHover} initial="rest" whileHover="hover" className="w-full h-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQS6VqoOAnnKAPtL9sBnx1uYrN_PmSCwaHJ128al4CdvwS2Wsmc89TsOARMwC0TX6WACRCacA4UU4yVkbxZk2m7mYyrKlXJiM-HNAke_S7RGRskrwBMS61X-c2hlT6KB5VR_hTDWLXDr9IFmoKeFME6leQ4VTNJwlA-BF9cSpnI2nc74QLunGXMXkxgUh2ijfykWQ8vOaj8L4uliWjvnFQP8dMl60WpgkZOBHdQSDICbPzU6h2gdqHf6jKr4a5J6WoatZz9G9dCcbz" alt="Luminous Botanical Serum" fill className="object-cover mix-blend-multiply opacity-90" />
              </motion.div>
              <span className="absolute top-4 left-4 bg-surface-container-lowest text-tertiary font-label text-xs tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">Bestseller</span>
            </div>
            <div className="flex justify-between items-start mt-2 px-2">
              <div>
                <h3 className="font-headline text-2xl text-on-surface transition-colors group-hover:text-primary">Luminous Botanical Serum</h3>
                <p className="font-body text-sm text-on-surface-variant mt-1">Nourishing overnight repair blend</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-headline text-xl text-primary">$85</span>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-primary hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Small Product Card 1 */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-5 flex flex-col gap-4 group md:mt-16 cursor-pointer">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-container relative">
              <motion.div variants={itemImageHover} initial="rest" whileHover="hover" className="w-full h-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4QXdLWdgLl_2KOh7Tbjo1h-x9osj51t97Q-V7bBVdaX5YRY5cu6atvxpydxcZxDMjuXkdh2UK6ieZnQF8tPx1Hj5_8rpeUrfUc9o3dC6SeJuRxrRJhNJSsZEGkj9iw_NJolEc0S0fT8n3qw8FLXK2o-M7LI3qYxu2aOM8hoHlAXboHk7SzAPvoaDzYjTSgF5Ov_AuMrSsDdM4S5Kzmzopt9X6Z6sTCd7ybG0Tl1k0j7p_1oO7MnfFFuPXQq3YhgTcV43D96xeSywy" alt="Purifying Clay Polish" fill className="object-cover mix-blend-multiply opacity-90" />
              </motion.div>
            </div>
            <div className="flex justify-between items-start mt-2 px-2">
              <div>
                <h3 className="font-headline text-xl text-on-surface transition-colors group-hover:text-primary">Purifying Clay Polish</h3>
                <p className="font-body text-sm text-on-surface-variant mt-1">Gentle daily exfoliant</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-headline text-lg text-primary">$42</span>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-primary hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Small Product Card 2 */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-4 flex flex-col gap-4 group cursor-pointer">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container relative">
              <motion.div variants={itemImageHover} initial="rest" whileHover="hover" className="w-full h-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4wuu4pQ03GxnDVnCoXJ95A-dXC58rEa9hGytftrVg0N9-uyEMHW6kpA-IYtZhnHkLlT-4hI5hp_RcB2XONrVkuLKp8RCuN0xnJaeovk_NYWsYrX5D8EpND1S_9tahDGGvHmYYBnSHHg5B2kmd4KOr4bU5StSB8iHsUd2ACwVdAd_f2DfqfSAZ-HVMhKR5Dyu_9ZybBQCK_Ukjuk8WnEFTcGzfdi_r3NetaPujOzHqX3mY_fsqM76j1EEzddqlCEL6rkSZ4EIGgcZC" alt="Rose Quartz Roller" fill className="object-cover mix-blend-multiply opacity-90" />
              </motion.div>
            </div>
            <div className="flex justify-between items-start mt-2 px-2">
              <div>
                <h3 className="font-headline text-xl text-on-surface transition-colors group-hover:text-primary">Rose Quartz Roller</h3>
                <p className="font-body text-sm text-on-surface-variant mt-1">Cooling sculpting tool</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-headline text-lg text-primary">$35</span>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-primary hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Medium Product Card (Ritual Kit) */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-8 flex flex-col gap-4 group bg-surface-container-low rounded-2xl p-6 md:p-10 shadow-[0px_20px_40px_rgba(75,71,56,0.06)] hover:shadow-[0px_30px_50px_rgba(75,71,56,0.1)] transition-all duration-500 overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full rounded-xl overflow-hidden relative">
                <motion.div variants={itemImageHover} initial="rest" whileHover="hover" className="w-full h-full absolute inset-0">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE0piBId6R5XjLM7Qwf58mPqjvKmS7iM7bbe1eo5rSkFeDhHeAsv5IkG5fBwh-c0Khi-6dOktgChzo9DFB9fZ2R-rmDZcF3mJPzMShsECrGtyQ-_LQro2bjhMlAmKRIeDpU9vHQRXRJ0GcJsK1idynAEx-ih-4F0D_Uo6KCkLszAe9upgF_yN9WtMKP8K35mTw4I7CIdpPXw5cn0vFM8BwcnNzVQqnLGE1mL9oku2f-knnZsFgXXDK7DbCZJCznL-ulGiKCnsnBCfJ" alt="Complete evening ritual set" fill className="object-cover" />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center relative z-10">
                <span className="font-label text-xs tracking-[0.05em] text-tertiary uppercase">Curated Kit</span>
                <h3 className="font-headline text-3xl text-on-surface leading-tight transition-colors group-hover:text-primary">The Evening<br/>Restoration Set</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                    A comprehensive 3-step ritual designed to cleanse away the day, deeply nourish, and lock in moisture while you sleep. Includes the Purifying Polish, Luminous Serum, and Rich Restorative Creme.
                </p>
                <div className="flex items-center gap-6">
                  <span className="font-headline text-2xl text-primary">$180</span>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-tr from-primary to-primary-container text-on-primary font-body text-sm font-medium px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                    Add to Bag
                  </motion.button>
                </div>
              </div>
            </div>
            {/* Soft background decor for the kit */}
            <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-primary-container/20 rounded-full blur-[80px] -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
          </motion.div>
          
        </motion.div>
      </section>
    </div>
  );
}
