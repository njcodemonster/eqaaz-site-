/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#008080] transition-colors">Home</a></li>
                <li><a href="#courses" className="text-gray-600 hover:text-[#008080] transition-colors">Courses</a></li>
                <li><a href="#admission" className="text-gray-600 hover:text-[#008080] transition-colors">Admission</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-gray-600 hover:text-[#008080] transition-colors">Contact</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-[#008080] transition-colors">About Us</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-[#008080]/10 rounded-full flex items-center justify-center text-[#008080]">
                  <Mail size={18} />
                </div>
                <span>eeqaz.edu@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-[#008080]/10 rounded-full flex items-center justify-center text-[#008080]">
                  <Phone size={18} />
                </div>
                <span>0324-2947341</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-12 h-12 bg-[#008080] text-white rounded-full flex items-center justify-center hover:bg-[#006666] transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-[#008080] text-white rounded-full flex items-center justify-center hover:bg-[#006666] transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-[#008080] text-white rounded-full flex items-center justify-center hover:bg-[#006666] transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eeqaz Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
