import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Download, ChevronRight, Sparkles } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import PageTransition from '@/components/PageTransition';

const techStack = [
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'Java', 'PostgreSQL', 'AWS', 'Docker'
];

const Index = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <div className="container mx-auto max-w-5xl text-center">
            {/* Badge */}
            

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Nithyananth</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
            >
              <span className="text-xl md:text-2xl text-foreground font-medium">Full Stack Developer</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-xl md:text-2xl text-muted-foreground">MERN Stack</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-xl md:text-2xl text-muted-foreground">Java</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              I craft elegant, high-performance web applications that solve real-world problems. 
              Passionate about clean code, innovative solutions, and creating exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <Link to="/projects" className="btn-neon flex items-center gap-2">
                View My Projects
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="/Resume.pdf"
                download
                className="btn-ghost-glow flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                  Download Resume
              </a>

            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Tech Stack I Love</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 text-sm font-medium bg-muted/50 text-foreground rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-wider">Scroll Down</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
