/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, Users, Globe, Star, Heart, Award, Target, Lightbulb } from 'lucide-react';

const VALUES = [
  {
    icon: BookOpen,
    title: 'Quranic Foundation',
    desc: 'Every student begins with the Book of Allah — Hifz, Tajweed, and deep understanding of Quranic Arabic form the bedrock of all learning.',
  },
  {
    icon: Globe,
    title: 'Modern Academic Excellence',
    desc: 'We integrate contemporary science, mathematics, English, and technology so our graduates thrive in the modern world without compromising their Deen.',
  },
  {
    icon: Heart,
    title: 'Character & Tarbiyah',
    desc: 'Academic results alone are not our goal. We invest in the moral, spiritual, and social development of every student under our care.',
  },
  {
    icon: Users,
    title: 'Qualified Scholarship',
    desc: 'Our Dars-e-Nizami track produces fully qualified Islamic scholars trained in Fiqh, Hadith, Tafsir, Usul, Mantiq, and classical Arabic sciences.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Pedagogy',
    desc: 'We embrace modern teaching methodologies — interactive lessons, digital tools, and structured learning tracks tailored to each student\'s pace.',
  },
  {
    icon: Star,
    title: 'Bilingual Proficiency',
    desc: 'Arabic and English language mastery are core pillars, ensuring students can access classical texts and communicate effectively on the global stage.',
  },
];

const PROGRAMS = [
  { name: 'Dars-e-Nizami', tag: 'Classical Islamic Sciences', color: 'bg-teal-50 border-teal-200 text-teal-800' },
  { name: 'Hifz ul Quran', tag: 'Memorisation & Tajweed', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { name: 'Huffaz Arabic', tag: 'Classical Arabic Language', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
  { name: 'Huffaz English', tag: 'Global Communication', color: 'bg-purple-50 border-purple-200 text-purple-800' },
  { name: 'Matric Science', tag: 'Contemporary Education', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
];

const STATS = [
  { value: '500+', label: 'Enrolled Students' },
  { value: '25+', label: 'Qualified Scholars & Teachers' },
  { value: '5', label: 'Academic Programs' },
  { value: '10+', label: 'Years of Excellence' },
];

const MILESTONES = [
  { year: '2014', event: 'Eeqaz founded in Karachi with a vision to blend Deeni and Asri education.' },
  { year: '2016', event: 'Hifz programme launched — first batch of 12 Huffaz graduated with Ijazah.' },
  { year: '2018', event: 'Full Dars-e-Nizami track established, covering 8-year classical scholarship curriculum.' },
  { year: '2021', event: 'Huffaz Arabic & English language programmes introduced to serve graduates globally.' },
  { year: '2023', event: 'Matric Science programme launched, integrating modern STEM with Islamic values.' },
  { year: '2026', event: 'Amali Mantiq digital platform launched — AI-powered learning of classical logic sciences.' },
];

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Banner */}
      <section className="relative bg-[#2b5a9e] overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 border-[16px] border-white rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] border-[16px] border-white rounded-full" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-teal-200 text-sm font-semibold mb-4"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            About <span className="text-teal-300">Eeqaz</span> Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            إيقاظ للعلوم الإسلامية والتربية — Awakening through Islamic Sciences and Character Development.
            A unique institution where classical scholarship meets modern excellence.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            ← Back to Home
          </motion.button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#008080] font-semibold uppercase tracking-widest text-sm">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-snug">
                Nurturing Scholars for Both Worlds
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Eeqaz Education System was founded on a singular conviction: that a Muslim can be both a deeply rooted
                Islamic scholar <em>and</em> a globally competent professional. We refuse to present these as a
                contradiction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our students memorise the Quran at dawn, master classical Arabic logic in the morning, study
                contemporary science in the afternoon, and build their character through structured Tarbiyah
                throughout the day. This is the Eeqaz model.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in Patel Para, Karachi, we serve students from across the city and beyond — offering
                boarding, day programmes, and increasingly, digital learning through our <strong>Amali Mantiq</strong> platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-4xl font-bold text-[#008080] mb-2">{stat.value}</p>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#008080] font-semibold uppercase tracking-widest text-sm">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-[#008080]/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#008080]/10 rounded-xl flex items-center justify-center text-[#008080] mb-5 group-hover:bg-[#008080] group-hover:text-white transition-all">
                  <val.icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#008080] font-semibold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Academic Programmes</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {PROGRAMS.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-2xl px-8 py-5 text-center ${prog.color}`}
              >
                <p className="font-bold text-lg">{prog.name}</p>
                <p className="text-xs mt-1 opacity-70 font-medium">{prog.tag}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#008080] font-semibold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Journey & Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#008080]/20 -translate-x-1/2" />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#008080] rounded-full border-4 border-white shadow -translate-x-1/2 mt-1.5" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                    <span className="inline-block bg-[#008080] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{m.year}</span>
                    <p className="text-gray-600 leading-relaxed text-sm">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#2b5a9e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="mx-auto mb-6 text-teal-300" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              To become the leading institution in Pakistan — and beyond — where Islamic scholarship and
              modern academic achievement are not competing forces, but complementary pillars of a single,
              integrated education that produces confident, knowledgeable, and God-conscious individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                onClick={onBack}
                className="bg-[#008080] hover:bg-[#006666] text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Get In Touch
              </a>
              <button
                onClick={onBack}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full font-semibold transition-all"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
