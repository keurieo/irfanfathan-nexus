import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Cursor3D from "@/components/Cursor3D";

const Index = () => {
  return (
    <>
      <Cursor3D />
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
      <footer className="py-8 px-6 text-center border-t border-border/30 bg-card/20">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Irfan Fathan M. Built with passion for innovation.
        </p>
      </footer>
      </main>
    </>
  );
};

export default Index;
