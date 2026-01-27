import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-16"
          >
            {/* Icon */}
            <div className="absolute left-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>

            {/* Content Card */}
            <div className="glass-card-hover p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/30">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-primary mb-2">{item.subtitle}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
