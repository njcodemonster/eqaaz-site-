/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2b5a9e] rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
            
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
              Eeqaz Lill Ulloomil Islamiah Wal Tarbiah (Eeqaz Education System) is a unique educational 
              institution dedicated to providing a balanced blend of Islamic education (Deeni) and 
              modern (Asri) learning. Our aim is not academic excellence that builds the development 
              of Quranic character, discipline, and warm contemporary subjects modern teaching students.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              We strive to build a generation that is knowledgeable and grounded in Islamic values, 
              prepared to excel in both worlds, in this world and the Hereafter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
