'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/menu-icon.png" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links for Desktop */}
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

        {/* Desktop Social Media Links */}
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

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-3/4 bg-black bg-opacity-90 text-white p-6 z-50 shadow-lg">
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/close-icon.png" alt="Close" className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <div className="space-y-6 mt-12">
            {[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Resume', path: '/resume' }, { name: 'Portfolio', path: '/portfolio' }, { name: 'Contact', path: '/contact' }].map((link) => (
              <Link key={link.name} href={link.path} passHref>
                <span
                  className={`block text-lg cursor-pointer text-white hover:text-gray-400 hover:underline 
                  ${pathname === link.path ? 'underline text-gray-500' : 'text-white'}`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center space-x-4 mt-8">
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
      )}
    </nav>
  );
}
