export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'ml' | 'data-science' | 'full-stack' | 'research';
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  github: string;
  demo?: string;
  features: string[];
  technologies: string[];
  challenges?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: 'audio-emotion',
    title: 'Audio Emotion Recognition',
    tagline: 'State-of-the-art emotion detection from audio',
    description: 'Deep learning model achieving 91.3% accuracy on RAVDESS dataset',
    longDescription: 'Advanced deep learning system for recognizing emotions from audio signals using CNN and LSTM architectures. Trained on the RAVDESS emotional speech audio dataset with 7 emotion classes.',
    image: '/images/projects/audio-emotion.jpg',
    category: 'ml',
    tags: ['PyTorch', 'Deep Learning', 'Audio ML', 'CNN', 'LSTM'],
    metrics: [
      { label: 'Accuracy', value: '91.3%' },
      { label: 'Dataset', value: 'RAVDESS' },
      { label: 'Test Loss', value: '0.5009' }
    ],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Audio_Emotion-Analysis',
    features: [
      'CNN + LSTM architecture',
      '7-class emotion detection',
      'Production-ready model',
      'Real-time inference capability'
    ],
    technologies: ['Python', 'PyTorch', 'Librosa', 'NumPy', 'Scikit-learn']
  },
  {
    id: 'speech-emotion',
    title: 'Speech Emotion Recognition',
    tagline: 'High-accuracy emotion detection from speech',
    description: 'Speech emotion recognition system with 86.9% accuracy',
    longDescription: 'Advanced speech emotion recognition system capable of detecting emotions from spoken language with high accuracy.',
    image: '/images/projects/speech-emotion.jpg',
    category: 'ml',
    tags: ['Machine Learning', 'Audio Processing', 'NLP', 'Deep Learning'],
    metrics: [
      { label: 'Accuracy', value: '86.9%' }
    ],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Speech-Emotion-Recognition-',
    features: [
      'Multi-class emotion detection',
      'Audio feature extraction',
      'Real-world speech processing'
    ],
    technologies: ['Python', 'TensorFlow', 'Librosa', 'Scikit-learn']
  },
  {
    id: 'plagiarism-assistant',
    title: 'AI Plagiarism & Paraphrase Assistant',
    tagline: 'Advanced plagiarism detection with AI',
    description: 'AI-powered plagiarism detection system achieving 95%+ accuracy',
    longDescription: 'Intelligent plagiarism detection and paraphrasing assistant using state-of-the-art NLP models to identify copied content and suggest improvements.',
    image: '/images/projects/plagiarism.jpg',
    category: 'ml',
    tags: ['NLP', 'Transformers', 'Text Analysis', 'Deep Learning'],
    metrics: [
      { label: 'Accuracy', value: '95%+' }
    ],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/AI-Plagiarism-Paraphrase-Assistant',
    features: [
      'High-accuracy plagiarism detection',
      'AI-powered paraphrasing',
      'Multiple text comparison'
    ],
    technologies: ['Python', 'Transformers', 'BERT', 'SpaCy', 'NLTK']
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Analysis',
    tagline: 'Data-driven customer insights',
    description: 'Machine learning-based customer segmentation for business intelligence',
    longDescription: 'Comprehensive customer segmentation analysis using clustering algorithms to identify distinct customer groups and drive business decisions.',
    image: '/images/projects/segmentation.jpg',
    category: 'data-science',
    tags: ['Data Science', 'Clustering', 'ML', 'Business Intelligence'],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Customer-Segmentation-Analysis',
    features: [
      'K-means clustering',
      'Customer behavior analysis',
      'Interactive visualizations',
      'Business insights generation'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn']
  },
  {
    id: 'autonomous-analyst',
    title: 'Autonomous Analyst',
    tagline: 'AI-powered data analysis platform',
    description: 'Intelligent data analysis platform automating insights and visualizations using AI',
    longDescription: 'An advanced autonomous data analysis platform that leverages Firebase Studio and AI to automatically understand industry data, generate dynamic visualizations, extract meaningful insights, and produce comprehensive analytical reports. Built with TypeScript and React for a seamless user experience.',
    image: '/images/projects/analyst.jpg',
    category: 'full-stack',
    tags: ['TypeScript', 'Firebase', 'Data Visualization', 'Full-Stack'],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Autonomus-Analyst',
    features: [
      'Automated data understanding',
      'Dynamic visualizations',
      'AI-powered insights',
      'Comprehensive reporting'
    ],
    technologies: ['TypeScript', 'React', 'Firebase', 'Chart.js']
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    tagline: 'Modern developer portfolio with animations',
    description: 'A polished, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion animations.',
    longDescription: 'A modern, visually stunning portfolio website featuring dark/light theme, smooth scroll animations, glassmorphism UI, typing effects, and a complete showcase of ML and data science projects.',
    image: '/images/projects/portfolio.jpg',
    category: 'full-stack',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Framework', value: 'Next.js 15' },
      { label: 'Theme', value: 'Dark/Light' }
    ],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/portfolio',
    demo: 'https://portfolio-ghulam-mustafa-keerio.vercel.app',
    features: [
      'Responsive design',
      'Dark/Light theme toggle',
      'Framer Motion animations',
      'Glassmorphism UI',
      'TypeScript throughout'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React']
  },
  {
    id: 'text-emotion',
    title: 'Text Emotion Detection Model',
    tagline: 'Emotion recognition from text',
    description: 'XGBoost-based emotion detection from textual data',
    longDescription: 'Machine learning model for detecting emotions in text using advanced feature engineering and XGBoost classifier.',
    image: '/images/projects/text-emotion.jpg',
    category: 'ml',
    tags: ['XGBoost', 'NLP', 'Text Classification', 'ML'],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Text-Emotion-Detection-Model',
    features: [
      'Multi-class emotion detection',
      'Feature engineering',
      'High accuracy classification'
    ],
    technologies: ['Python', 'XGBoost', 'NLTK', 'Scikit-learn', 'Pandas']
  },
  {
    id: 'chatbot',
    title: 'ChatBot Development',
    tagline: 'AI-powered conversational agents',
    description: 'Intelligent chatbot for workflow automation',
    longDescription: 'Development of AI chatbots designed to automate daily time-consuming workflows and improve productivity.',
    image: '/images/projects/chatbot.jpg',
    category: 'full-stack',
    tags: ['AI', 'Chatbot', 'Automation', 'NLP'],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/ChatBot-development',
    features: [
      'Conversational AI',
      'Workflow automation',
      'Natural language understanding'
    ],
    technologies: ['Python', 'NLP', 'Flask', 'DialogFlow']
  },
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection System',
    tagline: 'AI-powered misinformation detection',
    description: 'Machine learning system for detecting fake news articles using NLP and deep learning techniques',
    longDescription: 'An intelligent fake news detection system that leverages natural language processing and deep learning to classify news articles as real or fake. The system uses advanced text analysis, feature engineering, and transformer-based models to identify misinformation with high accuracy.',
    image: '/images/projects/fake-news.jpg',
    category: 'ml',
    tags: ['NLP', 'Deep Learning', 'Text Classification', 'Transformers', 'Python'],
    metrics: [
      { label: 'Task', value: 'Classification' },
      { label: 'Type', value: 'NLP' }
    ],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/fack-neww-detection-system',
    features: [
      'Fake vs real news classification',
      'NLP-based text analysis',
      'Deep learning model architecture',
      'Feature engineering pipeline'
    ],
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Scikit-learn', 'Pandas']
  },
  {
    id: 'research-work',
    title: 'Research Work - Algorithm Evaluation',
    tagline: 'ML algorithm benchmarking',
    description: 'Algorithm evaluation framework for model predictions',
    longDescription: 'Research project focused on verifying and evaluating different machine learning algorithms for model prediction accuracy.',
    image: '/images/projects/research.jpg',
    category: 'research',
    tags: ['Research', 'ML Algorithms', 'Evaluation', 'Jupyter'],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Research-work',
    features: [
      'Algorithm benchmarking',
      'Performance metrics',
      'Comparative analysis'
    ],
    technologies: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas']
  },
  {
    id: 'iris-classification',
    title: 'Iris Classification Model',
    tagline: 'Classic ML classification',
    description: 'Machine learning classification on Iris dataset',
    longDescription: 'Classic machine learning project implementing various classification algorithms on the Iris dataset.',
    image: '/images/projects/iris.jpg',
    category: 'ml',
    tags: ['Classification', 'ML', 'Scikit-learn', 'Jupyter'],
    github: 'https://github.com/Ghulam-Mustafa-Keerio/Iris-Classification-Model',
    features: [
      'Multiple classifiers',
      'Model comparison',
      'Visualization of results'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter']
  }
];
