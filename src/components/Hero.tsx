import { motion } from "framer-motion";
import logo from "@/assets/logo-les-petits-rituels.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blush/30 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage-light/50 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-lg mx-auto text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-48 h-48 md:w-64 md:h-64"
        >
          <img
            src={logo}
            alt="Logo Les Petits Rituels — bébé endormi dans une main avec couronne florale"
            className="w-full h-full object-contain animate-float rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary">
            Rennes & alentours
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground text-balance">
            Douceur & bien-être
            <br />
            <span className="text-primary italic">pour votre bébé</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-md mx-auto">
            Massage bien-être, bain thérapeutique et accompagnement à la parentalité — à domicile, avec bienveillance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-base shadow-warm hover:opacity-90 transition-opacity"
          >
            Découvrir mes soins
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-secondary text-secondary-foreground font-body font-semibold text-base shadow-soft hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
