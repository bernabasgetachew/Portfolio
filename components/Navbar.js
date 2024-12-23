'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 bg-black ${pathname === '/' ? 'bg-opacity-15' : 'bg-opacity-70'} text-white shadow-lg fixed top-0 w-full z-50 py-6`}
    >
      {/* Name */}
      <div className="text-3xl font-extrabold text-gray-400">
        Bernabas Getachew
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center space-x-2">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu} // Toggle the menu on click
        >
          <img src="/menu-icon.png" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links and Social Icons for Desktop */}
      <div className="hidden lg:flex items-center space-x-8">
        {[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Resume', path: '/resume' }, { name: 'Portfolio', path: '/portfolio' }, { name: 'Contact', path: '/contact' }].map((link) => (
          <Link key={link.name} href={link.path} passHref>
            <span
              className={`cursor-pointer text-white hover:text-gray-400 hover:underline 
              ${pathname === link.path ? 'underline text-gray-500' : 'text-white'}`}
            >
              {link.name}
            </span>
          </Link>
        ))}

        {/* Contact and Social Icons */}
        <a href="tel:+251912330412" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
          <img src="/phone-icon.png" alt="Phone" className="w-6 h-6" loading="lazy" />
          <span className="text-sm">+251912330412</span>
        </a>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          {[{ href: 'https://www.instagram.com/_bernav_', src: '/instagram-icon.png', alt: 'Instagram' },
            { href: 'https://www.facebook.com/bernabas.getachew.5', src: '/facebook-icon.png', alt: 'Facebook' },
            { href: 'https://www.linkedin.com/in/bernabas-getachew-7299542a9', src: '/linkedin-icon.png', alt: 'LinkedIn' },
            { href: 'https://t.me/bernavv', src: '/telegram-icon.png', alt: 'Telegram' },
            { href: 'https://github.com/bernabasgetachew', src: '/github-icon.png', alt: 'GitHub' }].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition duration-300"
              >
                <img src={social.src} alt={social.alt} className="w-6 h-6" loading="lazy" />
              </a>
            ))}
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white space-y-4 p-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Resume', path: '/resume' }, { name: 'Portfolio', path: '/portfolio' }, { name: 'Contact', path: '/contact' }]
          .map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span
                className={`cursor-pointer text-white hover:text-gray-400 hover:underline 
                ${pathname === link.path ? 'underline text-gray-500' : 'text-white'}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
      </div>
    </nav>
  );
}
