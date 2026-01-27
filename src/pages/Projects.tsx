import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
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
                Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="section-title mt-4"
              >
                Featured <span className="text-gradient">Projects</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-subtitle mx-auto mt-6"
              >
                A showcase of my best work, featuring real-world applications built 
                with modern technologies and best practices.
              </motion.p>
            </div>
          </div>
        </SectionWrapper>

        {/* Projects Grid */}
        <SectionWrapper>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.shortDescription}
                    image={project.image}
                    techStack={project.techStack}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects and opportunities. 
                Let's create something amazing together.
              </p>
              <a href="/contact" className="btn-neon inline-block">
                Let's Talk
              </a>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default Projects;
