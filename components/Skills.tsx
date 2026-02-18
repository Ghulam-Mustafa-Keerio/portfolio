'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '@/lib/skills';

// Icon mapping
const categoryIcons: Record<string, string> = {
  'Machine Learning & AI': '🧠',
  'Data Science': '📊',
  'Audio & NLP': '🎤',
  'Full-Stack Development': '💻',
  'Cloud & DevOps': '☁️',
};

// Color themes for each category
const categoryColors: Record<string, { border: string; gradient: string; bg: string }> = {
  'Machine Learning & AI': {
    border: 'border-blue-500/30',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-500/10',
  },
  'Data Science': {
    border: 'border-purple-500/30',
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-500/10',
  },
  'Audio & NLP': {
    border: 'border-green-500/30',
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-500/10',
  },
  'Full-Stack Development': {
    border: 'border-orange-500/30',
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-500/10',
  },
  'Cloud & DevOps': {
    border: 'border-cyan-500/30',
    gradient: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-500/10',
  },
};

// Get proficiency label
const getProficiencyLabel = (level: number): string => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  return 'Beginner';
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = categoryColors[category.name] || categoryColors['Machine Learning & AI'];
            const icon = categoryIcons[category.name] || '🚀';

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass rounded-xl p-6 border-2 ${colors.border} hover:shadow-2xl transition-all group`}
              >
                {/* Category header with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-3xl p-2 rounded-lg ${colors.bg}`}>
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {skill.level}%
                          </span>
                          {/* Proficiency badge on hover */}
                          <span className="text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity bg-blue-50 dark:bg-slate-700 px-2 py-1 rounded-full text-blue-600 dark:text-slate-300">
                            {getProficiencyLabel(skill.level)}
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full bg-blue-100/50 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                        {/* Animated skill bar with shimmer effect */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut'
                          }}
                          className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer effect overlay */}
                          <motion.div
                            initial={{ x: '-200%' }}
                            animate={isInView ? { x: '200%' } : { x: '-200%' }}
                            transition={{
                              duration: 2,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1,
                              ease: 'easeInOut'
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
