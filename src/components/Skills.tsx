import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Code, Cpu, Wrench, MonitorSmartphone } from "lucide-react";

const skillsData = {
  Programming: [
    { name: "C", level: 85 },
    { name: "C++", level: 80 },
    { name: "Python", level: 75 },
    { name: "Dart", level: 70 },
  ],
  "Embedded Tools": [
    { name: "ESP-IDF", level: 85 },
    { name: "STM32CubeIDE", level: 75 },
    { name: "Arduino IDE", level: 90 },
    { name: "Keil", level: 70 },
    { name: "Proteus", level: 80 },
  ],
  Hardware: [
    { name: "ESP32", level: 90 },
    { name: "Arduino UNO", level: 95 },
    { name: "STM32", level: 75 },
    { name: "8051", level: 70 },
  ],
  Software: [
    { name: "MATLAB", level: 75 },
    { name: "Proteus", level: 80 },
    { name: "Altium 365", level: 70 },
    { name: "KiCad", level: 75 },
  ],
};

const categories = [
  { name: "Programming", icon: Code },
  { name: "Embedded Tools", icon: Cpu },
  { name: "Hardware", icon: Wrench },
  { name: "Software", icon: MonitorSmartphone },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  return (
    <section id="skills" className="section-padding bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
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
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all card-3d ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-primary to-accent text-white"
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
