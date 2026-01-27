import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target, Heart, Code2, Rocket } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionWrapper from '@/components/SectionWrapper';
import Timeline from '@/components/Timeline';

const timelineItems = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    subtitle: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.',
    icon: Briefcase,
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    subtitle: 'StartupXYZ',
    description: 'Built and maintained multiple web applications serving 100k+ users. Implemented CI/CD pipelines and improved performance by 40%.',
    icon: Code2,
  },
  {
    year: '2021',
    title: 'Bachelor of Computer Science',
    subtitle: 'State University',
    description: 'Graduated with honors. Specialized in Software Engineering and Data Structures. Led multiple team projects and hackathon competitions.',
    icon: GraduationCap,
  },
  {
    year: '2020',
    title: 'Software Engineering Intern',
    subtitle: 'Global Tech Corp',
    description: 'Developed internal tools using Java and Spring Boot. Gained hands-on experience with agile methodologies and version control.',
    icon: Rocket,
  },
];

const strengths = [
  {
    icon: Code2,
    title: 'Clean Code Advocate',
    description: 'I believe in writing maintainable, readable, and scalable code that stands the test of time.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'I thrive on complex challenges and love finding elegant solutions to difficult problems.',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Every line of code I write is with the end-user in mind, ensuring exceptional experiences.',
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24">
        {/* Hero Section */}
        <SectionWrapper className="pb-0">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-sm font-semibold uppercase tracking-wider"
              >
                About Me
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="section-title mt-4"
              >
                Crafting Digital <span className="text-gradient">Experiences</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-subtitle mx-auto mt-6"
              >
                I'm a passionate Full Stack Developer with 4+ years of experience building 
                web applications that make a difference. I specialize in the MERN stack and 
                Java enterprise solutions.
              </motion.p>
            </div>
          </div>
        </SectionWrapper>

        {/* Bio Section */}
        <SectionWrapper>
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop)` 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-xl -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground">
                  A Developer Who Cares About <span className="text-primary">Impact</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    From a young age, I've been fascinated by how technology can transform ideas into 
                    reality. What started as curiosity about how websites work has evolved into a 
                    passionate career in software development.
                  </p>
                  <p>
                    I specialize in building scalable web applications using React, Node.js, and Java. 
                    My approach combines technical excellence with a deep understanding of user needs, 
                    ensuring that every project I work on delivers real value.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or mentoring aspiring developers. I believe in continuous 
                    learning and sharing knowledge with the community.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Strengths Section */}
        <SectionWrapper>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">What Drives Me</span>
              <h2 className="section-title mt-4">My Core Strengths</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-8 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <strength.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Timeline Section */}
        <SectionWrapper>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">My Journey</span>
              <h2 className="section-title mt-4">Experience & Education</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Timeline items={timelineItems} />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default About;
