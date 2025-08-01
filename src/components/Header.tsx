'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import QuickCartOffCanvas from './QuickCartOffCanvas';
import SkipToContent from './SkipToContent';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowMobileSearch(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?q=${searchTerm.trim()}`);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main header (sticky) */}
      <header className="bg-white shadow-lg sticky top-0 z-50" role="banner">
        <SkipToContent />
        
        {/* Main header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Left side */}
            <Link href="/" className="flex-shrink-0" aria-label="Toolex UAE Home">
              <Image 
                src="/Toolex-Logo.png" 
                alt="Toolex UAE" 
                width={120} 
                height={32} 
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Right side - Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search */}
              <div className="hidden md:block w-80">
                <form onSubmit={handleSearch} className="relative" role="search">
                  <label htmlFor="desktop-search" className="sr-only">Search equipment</label>
                  <Input
                    id="desktop-search"
                    type="text"
                    placeholder="Search equipment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-4 pr-12 py-2 w-full border-2 border-gray-200 focus:border-blue-950 rounded-lg text-sm"
                    aria-label="Search equipment"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-950 hover:bg-blue-900 text-white p-1.5 rounded-md"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Mobile Search Toggle */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="md:hidden p-2 text-blue-950 hover:text-blue-700 transition-colors"
                aria-label="Toggle search"
                aria-expanded={showMobileSearch}
              >
                {showMobileSearch ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </button>

              {/* Cart */}
              <div className="flex-shrink-0">
                <QuickCartOffCanvas />
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden text-blue-950 p-2 -mr-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile Search Dropdown */}
            {showMobileSearch && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50 p-4" ref={searchRef}>
                <form onSubmit={handleSearch} className="relative" role="search">
                  <label htmlFor="mobile-search" className="sr-only">Search equipment</label>
                  <div className="relative">
                    <Input
                      id="mobile-search"
                      type="text"
                      placeholder="Search equipment..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 focus:border-blue-950 rounded-lg text-sm"
                      aria-label="Search equipment"
                      autoFocus
                    />
                    <button 
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-950 hover:bg-blue-900 text-white p-1.5 rounded-md"
                      aria-label="Search"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Desktop navigation items are now handled in the navigation bar below */}
          </div>

          {/* Navigation */}
          <nav className="hidden md:block mt-4 border-t pt-4" role="navigation" aria-label="Main navigation">
            <div className="flex flex-wrap items-center justify-between">
              <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-blue-950 text-sm sm:text-base" role="menubar">
                <li role="none"><Link href="/" className="hover:text-red-600 font-medium border-b-2 border-transparent hover:border-red-600 pb-1 transition-all" role="menuitem">Home</Link></li>
                <li role="none"><Link href="/products" className="hover:text-red-600 font-medium border-b-2 border-transparent hover:border-red-600 pb-1 transition-all" role="menuitem">Equipment</Link></li>
                <li role="none"><Link href="/about" className="hover:text-red-600 font-medium border-b-2 border-transparent hover:border-red-600 pb-1 transition-all" role="menuitem">About</Link></li>
                <li role="none"><Link href="/contact" className="hover:text-red-600 font-medium border-b-2 border-transparent hover:border-red-600 pb-1 transition-all" role="menuitem">Contact</Link></li>
              </ul>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-blue-950">Popular:</span>
                <Link href="/products?q=Stacker" className="bg-gray-100 hover:bg-red-50 hover:text-red-600 px-2 py-1 rounded text-xs transition-colors">Stacker</Link>
                <Link href="/products?q=Pallet" className="bg-gray-100 hover:bg-red-50 hover:text-red-600 px-2 py-1 rounded text-xs transition-colors">Pallet</Link>
                <Link href="/products?q=Jack" className="bg-gray-100 hover:bg-red-50 hover:text-red-600 px-2 py-1 rounded text-xs transition-colors">Jack</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Hamburger Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
            <div className="bg-white w-4/5 max-w-xs h-full shadow-xl p-6 flex flex-col relative animate-slide-in-left" id="mobile-menu">
              <button
                className="absolute top-4 right-4 text-blue-950"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="mt-10 flex flex-col gap-6" role="navigation" aria-label="Mobile navigation">
                <Link href="/" className="text-blue-950/60 text-lg font-semibold hover:text-red-600" onClick={closeMobileMenu}>Home</Link>
                <Link href="/products" className="text-blue-950 text-lg font-semibold hover:text-red-600" onClick={closeMobileMenu}>Equipment</Link>
                <Link href="/about" className="text-blue-950/60 text-lg font-semibold hover:text-red-600" onClick={closeMobileMenu}>About</Link>
                <Link href="/contact" className="text-blue-950/60 text-lg font-semibold hover:text-red-600" onClick={closeMobileMenu}>Contact</Link>
              </nav>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={closeMobileMenu} />
          </div>
        )}
        <style>{`
          @keyframes slide-in-left {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.2s ease-out;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
