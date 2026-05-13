/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#008080]/30 selection:text-[#008080]">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

