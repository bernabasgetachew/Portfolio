'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const pathname = usePathname();

    return (
    <nav className="flex justify-between items-center p-6 bg-black bg-opacity-70 text-white shadow-lg">
      {/* Name */}
      <div className="text-3xl font-extrabold text-gray-400">
        Bernabas Getachew
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
      <Link href="/" passHref>
        <span
          className={`text-white hover:text-gray-400 hover:underline focus:outline-none 
            ${pathname === '/' ? 'underline text-black-500' : ''}`}
        >
          Home
        </span>
      </Link>
      <Link href="/about" passHref>
        <span
          className={`text-white hover:text-gray-400 hover:underline focus:outline-none 
            ${pathname === '/about' ? 'underline text-black-500' : ''}`}
        >
          About
        </span>
      </Link>
      <Link href="/resume" passHref>
        <span
          className={`text-white hover:text-gray-400 hover:underline focus:outline-none 
            ${pathname === '/resume' ? 'underline text-black-500' : ''}`}
        >
          Resume
        </span>
      </Link>
      <Link href="/portfolio" passHref>
        <span
          className={`text-white hover:text-gray-400 hover:underline focus:outline-none 
            ${pathname === '/portfolio' ? 'underline text-black-500' : ''}`}
        >
          Portfolio
        </span>
      </Link>
      <Link href="/contact" passHref>
        <span
          className={`text-white hover:text-gray-400 hover:underline focus:outline-none 
            ${pathname === '/contact' ? 'underline text-black-500' : ''}`}
        >
          Contact
        </span>
      </Link>


        {/* Contact and Social Icons */}
        <a href="tel:+251912330412" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
          <img src="/phone-icon.png" alt="Phone" className="w-6 h-6" />
          <span className="text-sm">+251912330412</span>
        </a>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/_bernav_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/bernabas.getachew.5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bernabas-getachew-7299542a9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/bernavv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <img src="/telegram-icon.png" alt="Telegram" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/bernabasgetachew"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <img src="/github-icon.png" alt="github" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
