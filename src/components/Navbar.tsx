/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Page } from '../App';

const NAV_LINKS = [
  { name: 'Home', href: '#', page: 'home' as Page },
  { name: 'Courses', href: '#courses', page: null },
  { name: 'Admission', href: '#admission', page: null },
  { name: 'About Us', href: '#about', page: 'about' as Page },
  { name: 'Contact', href: '#contact', page: null },
];

interface NavbarProps {
  setPage: (p: Page) => void;
  currentPage: Page;
}

export default function Navbar({ setPage, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#008080] rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden">
               {/* Logo placeholder - in real app would be an img */}
               <img src="https://picsum.photos/seed/eeqaz-logo/100/100" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className={`text-xl font-bold ${scrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'}`}>
                Eeqaz <span className="text-[#008080]">Education</span>
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.page ? undefined : link.href}
                onClick={link.page ? (e) => { e.preventDefault(); setPage(link.page!); } : undefined}
                className={`text-sm font-medium transition-colors hover:text-[#008080] cursor-pointer ${
                  currentPage === link.page ? 'text-[#008080] font-semibold' : scrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#008080] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#006666] transition-colors">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#008080] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.page ? undefined : link.href}
                  onClick={link.page ? (e) => { e.preventDefault(); setPage(link.page!); setIsOpen(false); } : () => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-medium hover:text-[#008080] hover:bg-gray-50 rounded-lg transition-colors cursor-pointer ${
                    currentPage === link.page ? 'text-[#008080] font-semibold' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-[#008080] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#006666] transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
