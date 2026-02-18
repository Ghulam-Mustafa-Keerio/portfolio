'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiAward } from 'react-icons/fi';

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

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FiBriefcase className="text-blue-600 dark:text-blue-400" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {exp.description}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FiAward className="text-purple-600 dark:text-purple-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Focus: {edu.focus}
                  </p>
                </motion.div>
              ))}
              
              {/* Certifications Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 rounded-lg p-6 border border-purple-200 dark:border-purple-800"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    Published 9 professional repositories on GitHub
                  </li>
                  <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    State-of-the-art results in emotion recognition
                  </li>
                  <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    Active open-source contributor
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
