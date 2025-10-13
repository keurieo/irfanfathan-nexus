import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

const experiences = [
  {
    role: "Robotics and IoT Intern",
    company: "Innoknowvex",
    location: "Bangalore, India",
    period: "May 2025 – Aug 2025",
    icon: Briefcase,
    responsibilities: [
      "Developed embedded systems and IoT prototypes using ESP32 and Arduino",
      "Integrated real-time data platforms (Blynk, ThingSpeak)",
      "Designed PCB layouts and optimized system performance",
    ],
  },
  {
    role: "Team Member",
    company: "Motridox Robotics",
    location: "Manjeri, India",
    period: "Jan 2023 – Present",
    icon: Users,
    responsibilities: [
      "Collaborated on IoT and robotics projects",
      "Participated in hackathons and competitions (NASA Space Apps, WorldSkills)",
      "Managed technical documentation and project coordination",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-primary">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-accent font-mono">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.location}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground/80"
                        >
                          <span className="text-primary mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
