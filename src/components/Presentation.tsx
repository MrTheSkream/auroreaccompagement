import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <section className="relative px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-card border border-border shadow-warm overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-72 flex-shrink-0">
            <img
              src="/aurore.png"
              alt="Aurore Lucas — Infirmière puéricultrice, accompagnement du nouveau-né et des parents"
              className="w-full h-80 md:h-full object-cover object-top"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Aurore Lucas
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed space-y-3">
              Je suis <strong className="text-foreground">infirmière puéricultrice</strong>, spécialisée dans l'accompagnement du nouveau-né et de ses parents.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Forte d'une expérience en néonatalogie, j'ai développé une expertise approfondie dans l'observation du bébé, l'évaluation de ses besoins et l'accompagnement des familles dès les premiers jours de vie.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Bienveillante, à l'écoute et profondément empathique, je vous propose un accompagnement personnalisé, respectueux de votre rythme, de vos choix et des besoins de votre enfant. Mon objectif est de vous soutenir, de vous rassurer et de vous transmettre des repères solides pour que vous puissiez avancer en toute confiance dans votre parentalité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
