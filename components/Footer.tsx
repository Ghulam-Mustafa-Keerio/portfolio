'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Ghulam-Mustafa-Keerio',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ghulam-mustafa-keerio',
    icon: FiLinkedin,
  },
  {
    name: 'Email',
    href: 'mailto:contact@ghulamkeerio.com',
    icon: FiMail,
  },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ghulam Mustafa Keerio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Machine Learning Engineer | Data Scientist | Full-Stack Developer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Building intelligent systems that understand human emotions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <FiHeart className="text-red-500" /> by Ghulam Mustafa Keerio © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
