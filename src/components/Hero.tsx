/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/eeqaz-hero/1920/1080?brightness=0.8"
          alt="Students in library"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Arabic Script Placeholder */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-6xl font-serif text-[#006666] leading-tight" dir="rtl">
                إيقاظ للعلوم الإسلامية والتربية
              </h2>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Eeqaz Lill Ulloomil Islamiah Wal Tarbiah <br />
              <span className="text-[#008080]">And Strong Qualified Islamic Scholars</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              Empowering the next generation with a balanced approach to Islamic studies 
              and contemporary academic excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#008080] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-[#008080]/30 hover:bg-[#006666] transition-all flex items-center gap-2"
              >
                Join Us
                <ChevronRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#008080] px-8 py-4 rounded-full text-lg font-bold border-2 border-[#008080] hover:bg-gray-50 transition-all"
              >
                View Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#008080]/10 blur-[100px] rounded-full -mr-20 -mb-20" />
    </section>
  );
}
