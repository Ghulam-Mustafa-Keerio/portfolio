'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Category configurations with icons and colors
const categoryConfig: Record<string, { icon: string; gradient: string; badge: string }> = {
  'ml': {
    icon: '🤖',
    gradient: 'from-blue-500 via-blue-600 to-purple-600',
    badge: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30',
  },
  'data-science': {
    icon: '📊',
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    badge: 'bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30',
  },
  'full-stack': {
    icon: '🌐',
    gradient: 'from-purple-500 via-pink-600 to-red-600',
    badge: 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30',
  },
  'research': {
    icon: '🔬',
    gradient: 'from-orange-500 via-amber-600 to-yellow-600',
    badge: 'bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-500/30',
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const config = categoryConfig[project.category] || categoryConfig['ml'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-xl overflow-hidden border border-blue-100/40 dark:border-white/10 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

      {/* Top banner with tech-colored gradient */}
      <div className={`relative h-40 bg-gradient-to-br ${config.gradient} overflow-hidden`}>
        {/* Animated diagonal shimmer overlay */}
        <motion.div
          initial={{ x: '-100%', y: '-100%' }}
          whileHover={{ x: '100%', y: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-45"
        />
        
        {/* Category icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform duration-300">
            {config.icon}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-sm ${config.badge} flex items-center gap-1.5`}>
            <span>{config.icon}</span>
            {project.category.toUpperCase().replace('-', ' ')}
          </span>
        </div>

        {/* Stars/Language indicator (placeholder) */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/90 text-sm">
          <span>⭐</span>
          <span className="font-medium">Open Source</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 space-y-4">
        {/* Project title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
          {project.tagline}
        </p>

        {/* Description with line clamp */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Metrics section */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass px-3 py-1.5 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-colors"
              >
                <span className="text-xs text-slate-500 dark:text-slate-400">{metric.label}: </span>
                <span className="text-sm font-bold text-gradient">{metric.value}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tech stack with colored badges */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-blue-50/50 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-full border border-blue-100/50 dark:border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-slate-400 dark:text-slate-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200/50 dark:via-slate-700 to-transparent"></div>

        {/* Footer with action buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg text-sm"
          >
            <FiGithub size={16} />
            <span>View Code</span>
          </motion.a>
          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 glass border border-purple-200/50 dark:border-purple-500/30 hover:border-purple-400/60 text-slate-800 dark:text-white rounded-lg font-medium transition-all hover:shadow-lg text-sm"
            >
              <FiExternalLink size={16} />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
