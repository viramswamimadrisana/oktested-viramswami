'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faChevronDown, 
  faChevronUp, 
  faBars, 
  faTimes 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp, 
  faFacebookF, 
  faYoutube, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'દર્શન' },
    { href: '/donate', label: 'દાન' },
    { href: '/history', label: 'ઈતિહાસ' },
    { href: '/books', label: 'પુસ્તકો' },
    { href: '/photos', label: 'ફોટો ગેલેરી' },
    { href: '/videos', label: 'વિડિઓ' },
    { href: '/music', label: 'સંગીત' },
  ];

  const dropdownItems = [
    { href: 'https://wa.me/919265628726', label: 'ગાયો ના ઘાસ ચારા માટે' },
    { href: 'https://wa.me/919265628726', label: 'બર્થ ડે' },
    { href: 'https://wa.me/919265628726', label: 'શ્રદ્ધાંજલિ' },
    { href: 'https://wa.me/919265628726', label: 'પોસ્ટર' },
    { href: '/about-us', label: 'About Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/terms-and-conditions', label: 'Terms and Conditions' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <>
      {/* Enhanced Topbar with better gradient and spacing */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 py-3 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0 space-x-2">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className="text-yellow-300 text-lg" 
              />
              <span className="font-medium text-sm md:text-base">
                મદ્રીસણા, ગુજરાત 382145
              </span>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="text-yellow-300 text-lg" 
                />
                <span className="text-sm md:text-base">+91 92656 28726</span>
              </div>
              
              <div className="flex space-x-3">
                <a 
                  href="https://chat.whatsapp.com/GOwCjrajneMIfktUqFQGs9" 
                  className="w-8 h-8 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-green-100 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                </a>
                <a 
                  href="https://www.facebook.com/jayviramswami.madrisana" 
                  className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCQmBR2D3zXZgbkAoD1ZL9Jw" 
                  className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center hover:bg-red-100 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/jay_vadvada_dham_madrisana/" 
                  className="w-8 h-8 rounded-full bg-white text-pink-600 flex items-center justify-center hover:bg-pink-100 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navbar with better transitions and shadows */}
      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo with better hover effect */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="Vadwala Dham Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-3 font-bold text-green-800 hidden sm:inline text-lg group-hover:text-green-700 transition-colors duration-300">
                જય શ્રી વિરમ સ્વામી મહારાજ, મદ્રીસણા
              </span>
            </Link>

            {/* Desktop Navigation with better hover effects */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium ${pathname === link.href ? 
                    'text-green-700 bg-green-50 border-b-2 border-green-600' : 
                    'text-gray-700 hover:text-green-700 hover:bg-green-50'}`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Enhanced Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium ${isDropdownOpen ? 
                    'text-green-700 bg-green-50' : 
                    'text-gray-700 hover:text-green-700 hover:bg-green-50'}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  અન્ય 
                  <FontAwesomeIcon 
                    icon={isDropdownOpen ? faChevronUp : faChevronDown} 
                    className="ml-1 text-xs transition-transform duration-200" 
                  />
                </button>
                <div 
                  className={`absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-1 z-50 transition-all duration-200 border border-gray-200 ${isDropdownOpen ? 
                    'visible opacity-100 translate-y-0' : 
                    'invisible opacity-0 -translate-y-2'}`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Contact Button */}
              <Link 
                href="https://wa.me/919265628726"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                <span>સંપર્ક કરો</span>
              </Link>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button 
                id="mobile-menu-button"
                className="text-gray-700 hover:text-green-700 focus:outline-none p-3 rounded-full hover:bg-green-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon 
                  icon={isMobileMenuOpen ? faTimes : faBars} 
                  className="text-xl" 
                />
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div 
            className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 
              'max-h-screen border-t border-gray-200 shadow-inner' : 
              'max-h-0'}`}
          >
            <div className="py-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 transition-all duration-200 rounded-md my-1 text-sm font-medium ${pathname === link.href ? 
                    'text-green-700 bg-green-50' : 
                    'text-gray-700 hover:text-green-700 hover:bg-green-50'}`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="py-1">
                <button 
                  className={`w-full text-left flex justify-between items-center py-3 px-4 rounded-md my-1 transition-all duration-200 text-sm font-medium ${isMobileDropdownOpen ? 
                    'text-green-700 bg-green-50' : 
                    'text-gray-700 hover:text-green-700 hover:bg-green-50'}`}
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  <span>અન્ય</span>
                  <FontAwesomeIcon 
                    icon={isMobileDropdownOpen ? faChevronUp : faChevronDown} 
                    className="text-xs transition-transform duration-200" 
                  />
                </button>
                <div 
                  className={`pl-4 transition-all duration-300 overflow-hidden ${isMobileDropdownOpen ? 
                    'max-h-screen' : 
                    'max-h-0'}`}
                >
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 px-4 text-sm text-gray-700 hover:text-green-700 transition-colors duration-200 rounded-md hover:bg-green-50"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 mt-2 border-t border-gray-200">
                <Link 
                  href="https://wa.me/919265628726"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full text-center block flex items-center justify-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  <span>સંપર્ક કરો</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;