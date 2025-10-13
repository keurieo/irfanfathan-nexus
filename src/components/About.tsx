import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-primary">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-2xl" />
              <img
                src={profileImg}
                alt="Irfan Fathan M"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            <div className="glass-card p-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Mission</h3>
                  <p className="text-foreground/80">
                    To innovate at the intersection of hardware and AI, creating sustainable 
                    technology solutions for real-world challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
