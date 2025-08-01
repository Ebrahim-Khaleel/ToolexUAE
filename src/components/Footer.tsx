import { Phone, Mail, MapPin, } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1.5 rounded">
                <Image 
                  src="/Toolex-Logo.png" 
                  alt="Toolex UAE" 
                  width={120} 
                  height={40}
                  className="h-6 w-auto max-w-[120px]"
                  priority
                />
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed max-w-xs text-sm sm:text-base">
              Your trusted partner for professional equipment, and tools across UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div> 
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/products" className="text-blue-200 hover:text-red-400 transition-colors">Equipment</Link></li>
              <li><Link href="/about" className="text-blue-200 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm sm:text-base">Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-blue-200 text-sm sm:text-base">+971 58 690 0124</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@toolexuae.com"
                  className="text-blue-200 hover:text-red-400 transition-colors text-sm sm:text-base"
                >
                  enquiry@toolexuae.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-blue-200 text-xs sm:text-sm text-center md:text-left">
              © 2025 Toolex. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-blue-200 hover:text-red-400 text-xs sm:text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-red-400 text-xs sm:text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-red-400 text-xs sm:text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
