'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🚀</div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.category === 'ml' ? 'bg-blue-500 text-white' :
            project.category === 'data-science' ? 'bg-green-500 text-white' :
            project.category === 'full-stack' ? 'bg-purple-500 text-white' :
            'bg-yellow-500 text-white'
          }`}>
            {project.category.toUpperCase().replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
          {project.tagline}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">{metric.label}: </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FiGithub size={20} />
            <span className="text-sm font-medium">View Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <FiExternalLink size={20} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
