import { motion } from "framer-motion";
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
  return (
    <section id="achievements" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-primary">
            Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 group"
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
