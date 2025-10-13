import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 glow-text">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                B.Tech in Electronics and Communication Engineering
              </h3>
              
              <p className="text-primary font-semibold mb-1">
                Eranad Knowledge City Technical Campus
              </p>
              
              <p className="text-muted-foreground mb-1">
                Manjeri, Kerala, India
              </p>
              
              <p className="text-accent font-mono mb-4">
                Sept 2022 – May 2026
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Network Theory",
                    "Analog Circuits",
                    "Communication Systems",
                    "Logic Circuit Design",
                    "Embedded Programming",
                    "Signals & Systems",
                  ].map((course) => (
                    <span
                      key={course}
                      className="text-sm px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full border border-border/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
