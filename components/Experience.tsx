'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiAward, FiCheckCircle, FiBookOpen } from 'react-icons/fi';

const experiences = [
  {
    type: 'work',
    title: 'Machine Learning Engineer',
    organization: 'Independent Research',
    period: '2022 - Present',
    description: 'Developing state-of-the-art emotion recognition systems with 91.3% accuracy. Focus on audio processing, speech recognition, and NLP applications.',
    achievements: [
      'Achieved 91.3% accuracy in audio emotion recognition',
      'Built 9 production-ready ML projects',
      'Published open-source contributions',
    ],
  },
  {
    type: 'work',
    title: 'Data Scientist',
    organization: 'Freelance Projects',
    period: '2021 - Present',
    description: 'Data analysis, visualization, and machine learning solutions for various clients. Specializing in customer segmentation and business intelligence.',
    achievements: [
      'Delivered customer segmentation analysis',
      'Built automated data analysis platforms',
      'Created comprehensive data visualizations',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University',
    period: '2018 - 2022',
    focus: 'Machine Learning & Artificial Intelligence',
  },
];

const currentlyLearning = [
  'Advanced RAG',
  'LLM Fine-tuning',
  'MLOps',
  'Vector Databases',
  'Langchain',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <FiBriefcase className="text-white" size={24} />
              </div>
              Professional Experience
            </h3>
            <div className="space-y-6 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-10 pb-6 last:pb-0"
                >
                  {/* Timeline dot with pulsing ring */}
                  <div className="absolute left-0 top-0">
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-blue-500/30 blur-sm"
                      />
                      <div className="relative w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
                    </div>
                  </div>

                  {/* Connecting line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  )}

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                      <h4 className="text-lg font-bold text-gradient">
                        {exp.title}
                      </h4>
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-500/30 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                          className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                        >
                          <FiCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                <FiAward className="text-white" size={24} />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <FiBookOpen className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-500/30 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Focus:</span> {edu.focus}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass rounded-xl p-6 border border-purple-500/20"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {[
                    'Published 9 professional repositories on GitHub',
                    'State-of-the-art results in emotion recognition',
                    'Active open-source contributor'
                  ].map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <FiCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3">
            <span className="text-3xl">🚀</span>
            Currently Learning
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {currentlyLearning.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass px-6 py-3 rounded-full border-2 border-blue-500/30 hover:border-blue-500/60 transition-all cursor-pointer group"
              >
                <span className="text-sm font-semibold text-gradient group-hover:scale-110 inline-block transition-transform">
                  {topic}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
