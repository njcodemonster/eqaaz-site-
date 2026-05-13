/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

export type Page = 'home' | 'about';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'about') {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#008080]/30 selection:text-[#008080]">
        <Navbar setPage={setPage} currentPage={page} />
        <AboutPage onBack={() => setPage('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#008080]/30 selection:text-[#008080]">
      <Navbar setPage={setPage} currentPage={page} />
      <main>
        <Hero />
        <Programs />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

