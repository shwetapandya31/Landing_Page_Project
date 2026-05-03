import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white tracking-tighter font-display">
          STRAT_OS
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-display tracking-tight">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300 px-2 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tertiary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-tertiary text-on-tertiary label-caps px-6 py-2 rounded-sm active:scale-95 transition-transform font-bold">
          Get Started
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-on-surface font-display text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-tertiary text-on-tertiary label-caps py-3 rounded-sm font-bold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
