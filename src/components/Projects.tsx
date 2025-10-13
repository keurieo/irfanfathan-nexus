import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import aquaIntelImg from "@/assets/aqua-intel.jpg";

const projects = [
  {
    title: "AQUA Intel",
    description: "Smart Water Quality Monitoring",
    details: "An IoT-based system using ESP32 and sensors to monitor water quality and detect unsafe conditions in real-time via the Blynk platform.",
    tools: ["ESP32", "Arduino IDE", "Blynk Cloud", "IoT Sensors"],
    image: aquaIntelImg,
    github: "https://github.com/IrfanFathan/Aqua-Intel",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 glow-text">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Explore my work in IoT, robotics, and embedded systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {project.description}
                </p>
                <p className="text-foreground/80 mb-4 text-sm">
                  {project.details}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex-1 glass-button"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
