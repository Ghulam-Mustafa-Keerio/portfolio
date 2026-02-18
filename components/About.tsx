'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import { FiDownload, FiAward, FiTarget, FiTrendingUp } from 'react-icons/fi';

const achievements = [
  {
    icon: FiAward,
    value: 91.3,
    suffix: '%',
    label: 'Audio Recognition Accuracy',
    description: 'RAVDESS Dataset',
  },
  {
    icon: FiTarget,
    value: 86.9,
    suffix: '%',
    label: 'Speech Emotion Recognition',
    description: 'High Accuracy',
  },
  {
    icon: FiTrendingUp,
    value: 95,
    suffix: '%+',
    label: 'Plagiarism Detection',
    description: 'AI-Powered',
  },
  {
    icon: FiAward,
    value: 9,
    suffix: '',
    label: 'Open Source Projects',
    description: 'Professional Repos',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about building intelligent systems that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Machine Learning Engineer</span> and{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Data Scientist</span> with expertise in Emotion AI, Natural Language Processing, and Full-Stack Development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I specialize in building intelligent systems that understand human emotions through voice, text, and behavioral patterns. With a proven track record of achieving state-of-the-art results, I combine deep technical knowledge with practical problem-solving to create production-ready machine learning systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My work spans across deep learning, audio signal processing, natural language understanding, and modern web technologies. I'm committed to open-source contribution and building tools that help researchers and developers advance the field of AI.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                <FiDownload size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <achievement.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  <AnimatedCounter 
                    end={achievement.value} 
                    suffix={achievement.suffix}
                  />
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
