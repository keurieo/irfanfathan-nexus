import { Trophy, Award, Rocket, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    title: "WorldSkills India 2024",
    description: "Mobile App Development – State Level Participant, showcasing expertise in mobile application development",
    icon: Trophy,
  },
  {
    title: "NASA International Space Apps Challenge 2024",
    description: "Global participant developing innovative solutions using NASA's open data for agricultural applications",
    icon: Rocket,
  },
  {
    title: "Eight Plane Robotics Workshop",
    description: "Completed comprehensive robotics workshop, gaining hands-on experience in robot design and programming",
    icon: Award,
  },
  {
    title: "B.Tech in Electronics & Communication Engineering",
    description: "Eranad Knowledge City Technical Campus – Specializing in Robotics, IoT, and Embedded Systems",
    icon: GraduationCap,
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
    <section id="achievements" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16">
            Milestones that showcase my growth and commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-card p-8 group card-3d"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
