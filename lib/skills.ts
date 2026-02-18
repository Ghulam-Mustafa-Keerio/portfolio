export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Machine Learning & AI',
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'Deep Learning', level: 90 },
      { name: 'Computer Vision', level: 80 },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 95 },
      { name: 'Matplotlib', level: 90 },
      { name: 'Seaborn', level: 85 },
      { name: 'Data Analysis', level: 90 },
    ],
  },
  {
    name: 'Audio & NLP',
    skills: [
      { name: 'Librosa', level: 90 },
      { name: 'NLTK', level: 85 },
      { name: 'SpaCy', level: 80 },
      { name: 'Transformers', level: 85 },
      { name: 'Speech Processing', level: 90 },
    ],
  },
  {
    name: 'Full-Stack Development',
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Flask', level: 85 },
      { name: 'FastAPI', level: 80 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Firebase', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];
