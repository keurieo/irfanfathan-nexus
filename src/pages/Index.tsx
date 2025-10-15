import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Cursor3D from "@/components/Cursor3D";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeToggleDropdown } from "@/components/ThemeToggleDropdown";

const Index = () => {
  return (
    <>
      <Cursor3D />
      <ThemeToggle />
      <ThemeToggleDropdown />
      <main className="min-h-screen cursor-none">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-border/30 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground text-base mb-4">
            © {new Date().getFullYear()} Irfan Fathan | Built with ❤️ using React + Tailwind CSS
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://www.linkedin.com/in/irfan-fathan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/irfanfathan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
};

export default Index;
