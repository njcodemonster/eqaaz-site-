/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const PROGRAMS = [
  {
    id: 'dars-e-nizami',
    title: 'Dars e Nizami',
    description: 'A comprehensive Islamic program covering classical social texts in Fiqh, Tafsir, and Arabic grammar, developed to design qualified Islamic scholars.',
    image: 'https://picsum.photos/seed/dars/400/300',
  },
  {
    id: 'hifz',
    title: 'Hifz',
    description: 'A structured program focused on memorization of the Holy Quran and spiritual development, building a strong foundation in Islamic teachings.',
    image: 'https://picsum.photos/seed/hifz/400/300',
  },
  {
    id: 'huffaz-arabic',
    title: 'Huffaz Arabic',
    description: 'Specialized Arabic language training for Huffaz to enhance understanding of Quranic (Deeni) modern education, grammar, and classical texts.',
    image: 'https://picsum.photos/seed/arabic/400/300',
  },
  {
    id: 'huffaz-english',
    title: 'Huffaz English',
    description: 'An English language program designed for communication skills, enabling them to connect knowledge effectively in a global context.',
    image: 'https://picsum.photos/seed/english/400/300',
  },
  {
    id: 'matric-science',
    title: 'Matric Science',
    description: 'A modern education program focusing on academic excellence, using science subjects while maintaining Islamic character building.',
    image: 'https://picsum.photos/seed/science/400/300',
  },
];

export default function Programs() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Our Programs
            <div className="absolute -bottom-4 left-0 w-1/2 h-1.5 bg-[#008080] rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-100 border border-gray-50 hover:shadow-2xl transition-all group"
            >
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-[#008080] mb-3 group-hover:text-[#006666] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
