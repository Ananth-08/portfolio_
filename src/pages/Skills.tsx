import { motion } from 'framer-motion';
import { 
  Code2, Database, Cloud, Terminal, 
  Palette, GitBranch, Server, Layout,
  Smartphone, Zap, Shield, Settings
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionWrapper from '@/components/SectionWrapper';
import SkillCard from '@/components/SkillCard';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'cyan' as const,
    skills: [
      { name: 'React', level: 95, icon: Code2 },
      { name: 'TypeScript', level: 90, icon: Code2 },
      { name: 'Next.js', level: 85, icon: Code2 },
      { name: 'Tailwind CSS', level: 92, icon: Palette },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'blue' as const,
    skills: [
      { name: 'Node.js', level: 92, icon: Server },
      { name: 'Java', level: 88, icon: Code2 },
      { name: 'Express.js', level: 90, icon: Server },
      { name: 'Spring Boot', level: 82, icon: Server },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'purple' as const,
    skills: [
      { name: 'MongoDB', level: 90, icon: Database },
      { name: 'PostgreSQL', level: 85, icon: Database },
      { name: 'Redis', level: 78, icon: Database },
      { name: 'MySQL', level: 88, icon: Database },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Settings,
    color: 'pink' as const,
    skills: [
      { name: 'Git', level: 95, icon: GitBranch },
      { name: 'Docker', level: 82, icon: Terminal },
      { name: 'AWS', level: 78, icon: Cloud },
      { name: 'CI/CD', level: 85, icon: Zap },
    ],
  },
];

const additionalSkills = [
  { name: 'REST APIs', icon: Server },
  { name: 'GraphQL', icon: Database },
  { name: 'WebSockets', icon: Zap },
  { name: 'Microservices', icon: Cloud },
  { name: 'Jest', icon: Shield },
  { name: 'Agile/Scrum', icon: Settings },
  { name: 'Mobile First', icon: Smartphone },
  { name: 'Performance Optimization', icon: Zap },
];

const Skills = () => {
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
                Technical Skills
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="section-title mt-4"
              >
                My <span className="text-gradient">Tech Arsenal</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-subtitle mx-auto mt-6"
              >
                A comprehensive overview of my technical skills and expertise across 
                various domains of software development.
              </motion.p>
            </div>
          </div>
        </SectionWrapper>

        {/* Skills Grid */}
        {skillCategories.map((category, categoryIndex) => (
          <SectionWrapper key={category.title}>
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color={category.color}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        ))}

        {/* Additional Skills */}
        <SectionWrapper>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">More Skills</span>
              <h2 className="text-2xl font-bold text-foreground mt-4">Also Experienced In</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-5 py-3 glass-card-hover cursor-default"
                >
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default Skills;
