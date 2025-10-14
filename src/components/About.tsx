import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";
import { Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative card-3d">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 blur-3xl animate-pulse" />
              <img
                src={profileImg}
                alt="Irfan Fathan M"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/40 shadow-3d"
                style={{ transform: 'translateZ(30px)' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm an Electronics and Communication Engineering student at{" "}
              <span className="text-primary font-semibold">Eranad Knowledge City Technical Campus</span>, 
              passionate about robotics, embedded systems, and automation.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With hands-on experience in microcontrollers like{" "}
              <span className="text-accent font-semibold">ESP32, STM32, and Arduino</span>, 
              I focus on designing smart, reliable hardware systems integrated with intelligent software.
            </p>

            {/* Mission Statement */}
            <motion.div 
              className="glass-card p-6 mt-8 card-3d"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</h3>
                  <p className="text-foreground/80">
                    To innovate at the intersection of hardware and AI, creating sustainable 
                    technology solutions for real-world challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
