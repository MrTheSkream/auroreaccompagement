import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [{
  label: "Soins",
  href: "#services"
}, {
  label: "Valeurs",
  href: "#values"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-soft" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary">
          
          <span className="font-display text-lg font-semibold">Les petits rituels</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>)}
          <a href="#contact" className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
            Réserver
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block font-body text-base font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>)}
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
                Réserver un soin
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};
export default Navbar;