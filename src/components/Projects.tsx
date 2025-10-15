import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import aquaIntelImg from "@/assets/aqua-intel.jpg";

const projects = [
  {
    title: "AQUA Intel – Smart Water Quality Monitoring",
    description: "IoT-based system using ESP32 to monitor water quality in real-time",
    details: "Integrates pH, TDS, turbidity, and temperature sensors with LSTM models to analyze water quality and predict contamination patterns.",
    tools: ["ESP32", "Python", "LSTM", "IoT", "Blynk"],
    image: aquaIntelImg,
    github: "https://github.com/IrfanFathan/Aqua-Intel",
    demo: "",
  },
  {
    title: "NASA Space Apps Challenge – Farm Analysis",
    description: "Web app leveraging NASA's open data for smart farming",
    details: "Assists farmers in monitoring soil moisture, weather patterns, and crop health for data-driven agricultural decisions.",
    tools: ["Django", "NASA API", "Data Analysis", "Bootstrap"],
    image: "/placeholder.svg",
    github: "https://github.com/irfanfathan",
    demo: "",
  },
  {
    title: "Automation Waste Management Robot",
    description: "Autonomous robot for automated waste segregation",
    details: "Uses ultrasonic sensors, servo motors, and real-time control logic to identify and sort waste materials automatically.",
    tools: ["Arduino", "Sensors", "Servo Motors", "C++"],
    image: "/placeholder.svg",
    github: "https://github.com/irfanfathan",
    demo: "",
  },
  {
    title: "Django E-Commerce Platform",
    description: "Full-stack e-commerce website with modern UI",
    details: "Features include product catalog, shopping cart, admin panel, and responsive design with Tailwind CSS.",
    tools: ["Django", "Tailwind CSS", "PostgreSQL", "Python"],
    image: "/placeholder.svg",
    github: "https://github.com/irfanfathan",
    demo: "",
  },
  {
    title: "CineFlask Movie Website",
    description: "Media platform for movie uploads and streaming",
    details: "Django-based platform allowing users to upload, manage, and stream movies with a modern Bootstrap interface.",
    tools: ["Django", "Bootstrap", "SQLite", "Python"],
    image: "/placeholder.svg",
    github: "https://github.com/irfanfathan",
    demo: "",
  },
  {
    title: "Streamify KTU – Flutter Learning App",
    description: "Mobile learning resource platform for engineering students",
    details: "Provides access to study materials, notes, and resources for KTU engineering curriculum.",
    tools: ["Flutter", "Dart", "Firebase", "Material Design"],
    image: "/placeholder.svg",
    github: "https://github.com/irfanfathan",
    demo: "",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="section-padding bg-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my work combining hardware and software to build innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ y }}
            >
              <motion.div 
                className="glass-card overflow-hidden h-full flex flex-col card-3d"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
                    {project.details}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 border-primary/40 hover:bg-primary/10"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="flex-1 glass-button"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
