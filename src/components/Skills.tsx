import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Cpu, Wrench, Monitor, Cog, Users } from "lucide-react";
import { useState, useRef } from "react";

const skillsData = {
  programming: [
    { name: "Python", level: 90 },
    { name: "C", level: 85 },
    { name: "C++", level: 85 },
    { name: "Django", level: 80 },
    { name: "Flutter", level: 75 },
    { name: "React", level: 65 },
  ],
  embedded: [
    { name: "ESP32", level: 95 },
    { name: "Arduino", level: 95 },
    { name: "Raspberry Pi", level: 85 },
    { name: "Sensors & Actuators", level: 90 },
    { name: "Circuit Design", level: 80 },
  ],
  robotics: [
    { name: "Robot Systems Integration", level: 90 },
    { name: "ROS (learning)", level: 60 },
    { name: "Machine Learning basics", level: 70 },
    { name: "Computer Vision", level: 65 },
  ],
  tools: [
    { name: "MATLAB", level: 75 },
    { name: "Proteus", level: 85 },
    { name: "KiCad", level: 70 },
    { name: "Fusion 360", level: 65 },
    { name: "Blynk", level: 80 },
    { name: "GitHub", level: 85 },
  ],
  soft: [
    { name: "Leadership", level: 90 },
    { name: "Team Collaboration", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
  ],
};

const categories = [
  { name: "Programming & Frameworks", icon: Code, key: "programming" },
  { name: "Hardware & Embedded", icon: Cpu, key: "embedded" },
  { name: "Robotics & AI", icon: Wrench, key: "robotics" },
  { name: "Tools", icon: Monitor, key: "tools" },
  { name: "Soft Skills", icon: Users, key: "soft" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16">
            A comprehensive toolkit spanning hardware, software, and interpersonal expertise
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all card-3d ${
                  activeCategory === category.key
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          style={{ rotate }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          whileHover={{ y: -8 }}
          className="glass-card p-8 max-w-3xl mx-auto card-3d"
        >
          <div className="space-y-6">
            {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
