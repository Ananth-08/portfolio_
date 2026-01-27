export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solution: string;
  features: string[];
  image: string;
  screenshots: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'A full-featured online shopping platform with real-time inventory and payment processing.',
    fullDescription: 'A comprehensive e-commerce solution built with modern web technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    problemStatement: 'Small businesses struggle with complex e-commerce solutions that require extensive technical knowledge and have high operational costs.',
    solution: 'Built a user-friendly platform with drag-and-drop store builder, automated inventory sync, and integrated payment processing that reduces setup time by 80%.',
    features: [
      'Real-time inventory management',
      'Secure Stripe payment integration',
      'Admin dashboard with analytics',
      'Mobile-responsive design',
      'Order tracking system',
      'Customer review system',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    shortDescription: 'A collaborative task management tool with real-time updates and team workspaces.',
    fullDescription: 'An enterprise-grade task management application designed for teams of all sizes, featuring real-time collaboration, custom workflows, and detailed analytics.',
    problemStatement: 'Remote teams face challenges in coordinating tasks, tracking progress, and maintaining visibility across projects.',
    solution: 'Developed a real-time collaborative platform with customizable boards, automated notifications, and comprehensive reporting tools.',
    features: [
      'Real-time collaboration',
      'Custom workflow automation',
      'Team workspaces',
      'Progress tracking',
      'File attachments',
      'Calendar integration',
    ],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
    ],
    techStack: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    shortDescription: 'An AI-powered platform that generates marketing content and social media posts.',
    fullDescription: 'A cutting-edge content generation platform leveraging GPT models to create high-quality marketing copy, blog posts, and social media content.',
    problemStatement: 'Content creators spend hours writing and optimizing content for different platforms, leading to bottlenecks in marketing workflows.',
    solution: 'Created an AI-powered tool that generates platform-optimized content in seconds, with built-in SEO optimization and brand voice customization.',
    features: [
      'Multiple content formats',
      'SEO optimization',
      'Brand voice customization',
      'Multi-language support',
      'Content scheduling',
      'Analytics dashboard',
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&h=800&fit=crop',
    ],
    techStack: ['Next.js', 'OpenAI API', 'Python', 'FastAPI', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    shortDescription: 'A comprehensive fitness tracking app with workout plans and progress analytics.',
    fullDescription: 'A mobile-first fitness application that helps users track workouts, monitor nutrition, and achieve their health goals with personalized recommendations.',
    problemStatement: 'Fitness enthusiasts struggle to maintain consistency and track progress across multiple dimensions of their health journey.',
    solution: 'Built an all-in-one fitness companion with smart workout suggestions, progress visualization, and community features for motivation.',
    features: [
      'Custom workout builder',
      'Progress tracking',
      'Nutrition logging',
      'Social challenges',
      'Wearable integration',
      'AI recommendations',
    ],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
    ],
    techStack: ['React Native', 'Firebase', 'Node.js', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];
