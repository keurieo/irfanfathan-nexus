import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-2, 0]);

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-25" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <motion.div
          style={{ scale, rotate }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          whileHover={{ y: -8 }}
          className="glass-card p-8 max-w-3xl mx-auto card-3d"
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
