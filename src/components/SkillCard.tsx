import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  color?: 'cyan' | 'blue' | 'purple' | 'pink';
}

const colorClasses = {
  cyan: {
    bg: 'bg-neon-cyan/10',
    border: 'border-neon-cyan/30',
    text: 'text-neon-cyan',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]',
    bar: 'from-neon-cyan to-neon-blue',
  },
  blue: {
    bg: 'bg-neon-blue/10',
    border: 'border-neon-blue/30',
    text: 'text-neon-blue',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.3)]',
    bar: 'from-neon-blue to-neon-purple',
  },
  purple: {
    bg: 'bg-neon-purple/10',
    border: 'border-neon-purple/30',
    text: 'text-neon-purple',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]',
    bar: 'from-neon-purple to-neon-pink',
  },
  pink: {
    bg: 'bg-neon-pink/10',
    border: 'border-neon-pink/30',
    text: 'text-neon-pink',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)]',
    bar: 'from-neon-pink to-neon-cyan',
  },
};

const SkillCard = ({ name, level, icon: Icon, color = 'cyan' }: SkillCardProps) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group glass-card p-5 transition-all duration-500 hover:border-primary/30 ${colors.glow}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center transition-all duration-300`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
      </div>
      
      <div className="skill-bar">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${colors.bar}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
