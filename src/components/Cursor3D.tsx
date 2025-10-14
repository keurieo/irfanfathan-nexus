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
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.4,
        }}
      >
        <div
          className="w-10 h-10 relative"
          style={{
            transform: "rotateX(55deg) rotateZ(45deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Cube faces */}
          <div className="absolute inset-0 bg-primary/40 border-2 border-primary backdrop-blur-sm rounded-sm" 
               style={{ transform: "translateZ(5px)" }} />
          <div className="absolute inset-0 bg-primary/30 border-2 border-primary backdrop-blur-sm rounded-sm" 
               style={{ transform: "rotateY(90deg) translateZ(5px)" }} />
          <div className="absolute inset-0 bg-primary/20 border-2 border-primary backdrop-blur-sm rounded-sm" 
               style={{ transform: "rotateX(90deg) translateZ(5px)" }} />
        </div>
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          mass: 0.15,
        }}
      >
        <div className="w-2 h-2 bg-accent rounded-full opacity-50 shadow-lg" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 22,
          mass: 0.25,
        }}
      >
        <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-30 shadow-md" />
      </motion.div>
    </>
  );
};

export default Cursor3D;
