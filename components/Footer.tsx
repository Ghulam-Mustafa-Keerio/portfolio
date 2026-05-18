'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

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
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:from-slate-900 dark:to-[#050505] dark:bg-gradient-to-b">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient mb-4 cursor-pointer inline-block"
            >
              GMK
            </motion.h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Machine Learning Engineer | Data Scientist | Full-Stack Developer
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Building intelligent systems that understand human emotions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-500 dark:text-slate-400 hover:text-gradient transition-colors text-sm"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg hover:glow-blue transition-all"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Let&apos;s create something amazing together
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200/40 dark:via-slate-700 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-500" />
            </motion.span>
            <span>using Next.js & Tailwind</span>
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Ghulam Mustafa Keerio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50 group"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
}
