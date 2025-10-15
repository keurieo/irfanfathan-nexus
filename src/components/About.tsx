import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";
import { Users, Rocket, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { icon: Rocket, label: "Years in Robotics", value: "3+" },
    { icon: Award, label: "Projects Completed", value: "10+" },
    { icon: Users, label: "Co-Founder", value: "Motridox Robotics" }
  ];

  return (
    <section id="about" className="section-padding bg-mesh relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div 
            ref={ref}
            className="relative"
            style={{ y }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden card-3d"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImg} 
                alt="Irfan Fathan" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I'm <span className="text-primary font-semibold">Irfan Fathan</span>, an Electronics and Communication Engineering student passionate about <span className="text-accent font-semibold">robotics, IoT, and embedded systems</span>.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I thrive at the intersection of hardware and software—creating innovative solutions like intelligent robots, smart water monitoring systems, and automation platforms.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              As the co-founder of <span className="text-primary font-semibold">Motridox Robotics</span>, I'm committed to advancing robotics education and developing automation solutions for real-world applications.
            </p>

            <motion.div 
              className="glass-card p-8 mt-8 card-3d"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                🎯 Mission
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To integrate robotics and AI for sustainable automation and intelligent systems.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-8 mt-6 card-3d"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ⚙️ Interests
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Robotics, Embedded Systems, AI in Edge Computing, Industrial Automation
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 text-center card-3d"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
