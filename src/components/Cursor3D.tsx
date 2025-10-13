import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main 3D cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className="w-10 h-10 relative"
          style={{
            transform: "rotateX(60deg) rotateZ(45deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Cube faces */}
          <div className="absolute inset-0 bg-primary/30 border border-primary backdrop-blur-sm" 
               style={{ transform: "translateZ(5px)" }} />
          <div className="absolute inset-0 bg-primary/20 border border-primary backdrop-blur-sm" 
               style={{ transform: "rotateY(90deg) translateZ(5px)" }} />
          <div className="absolute inset-0 bg-primary/10 border border-primary backdrop-blur-sm" 
               style={{ transform: "rotateX(90deg) translateZ(5px)" }} />
        </div>
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-1 h-1 bg-accent rounded-full opacity-60" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-40" />
      </motion.div>
    </>
  );
};

export default Cursor3D;
