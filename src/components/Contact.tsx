import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration would go here
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, url: "mailto:muhammadirfanvnb@gmail.com", label: "muhammadirfanvnb@gmail.com" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/irfan-fathan", label: "LinkedIn Profile" },
    { icon: Github, url: "https://github.com/irfanfathan", label: "GitHub Profile" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/motridox-robotics", label: "Motridox Robotics" },
  ];

  return (
    <section id="contact" className="section-padding bg-mesh relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-center text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Let's connect and collaborate on innovative tech solutions!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -4 }}
            className="glass-card p-8 card-3d"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" className="w-full glass-button font-semibold">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">
                Connect with me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-secondary/30 rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">
                Location
              </h3>
              <p className="text-foreground/80">
                Manjeri, Kerala, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
