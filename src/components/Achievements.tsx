import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Medal } from "lucide-react";

const achievements = [
  {
    title: "WorldSkills India 2024",
    description: "State Finalist - Mobile App Development",
    icon: Trophy,
  },
  {
    title: "NASA Space Apps Challenge",
    description: "Global Participant (2024)",
    icon: Award,
  },
  {
    title: "Robotics Workshop",
    description: "Certified by Eight Plane (2023)",
    icon: Medal,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="achievements" className="section-padding bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-35" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                style={{ y }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.5 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="glass-card p-6 text-center group card-3d"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full border border-primary/20 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
