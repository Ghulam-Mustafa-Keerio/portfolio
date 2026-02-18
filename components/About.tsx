'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import { FiDownload, FiAward, FiTarget, FiTrendingUp, FiCode, FiCheckCircle } from 'react-icons/fi';

const achievements = [
  {
    icon: FiAward,
    value: 91.3,
    suffix: '%',
    label: 'Audio Recognition',
    description: 'RAVDESS Dataset Accuracy',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiTarget,
    value: 86.9,
    suffix: '%',
    label: 'Speech Emotion',
    description: 'Recognition Accuracy',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiTrendingUp,
    value: 95,
    suffix: '+',
    label: 'Plagiarism Detection',
    description: 'AI-Powered System',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    icon: FiCode,
    value: 9,
    suffix: '+',
    label: 'Open Source',
    description: 'Professional Projects',
    gradient: 'from-cyan-500 to-cyan-600',
  },
];

const whatIDo = [
  'Build state-of-the-art ML models for emotion recognition',
  'Develop full-stack applications with modern frameworks',
  'Create production-ready deep learning systems',
  'Contribute to open-source AI projects',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a passionate <span className="font-semibold text-gradient">Machine Learning Engineer</span> and{' '}
                <span className="font-semibold text-gradient">Data Scientist</span> with expertise in Emotion AI, Natural Language Processing, and Full-Stack Development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I specialize in building intelligent systems that understand human emotions through voice, text, and behavioral patterns. With a proven track record of achieving state-of-the-art results, I combine deep technical knowledge with practical problem-solving to create production-ready machine learning systems.
              </p>
            </div>

            {/* Highlighted Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg"
            >
              "Transforming data into intelligence, and intelligence into impact through innovative AI solutions."
            </motion.blockquote>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h3>
              <ul className="space-y-3">
                {whatIDo.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <FiCheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FiDownload size={20} />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Achievements Grid with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* Gradient border wrapper */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass p-6 rounded-xl hover:shadow-2xl transition-all cursor-pointer group"
                    >
                      {/* Icon with gradient background */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${achievement.gradient} rounded-lg shadow-lg`}>
                          <achievement.icon className="text-white" size={24} />
                        </div>
                      </div>
                      
                      {/* Animated counter */}
                      <div className="text-4xl font-bold mb-2">
                        <span className="text-gradient">
                          <AnimatedCounter 
                            end={achievement.value} 
                            suffix={achievement.suffix}
                          />
                        </span>
                      </div>
                      
                      {/* Label and description */}
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
