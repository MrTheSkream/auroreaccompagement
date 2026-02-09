import { motion } from "framer-motion";
import { Flower2, Ear, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Flower2,
    title: "Douceur",
    description: "Chaque geste est empreint de délicatesse, pour que bébé se sente en sécurité et apaisé.",
  },
  {
    icon: Ear,
    title: "Écoute",
    description: "Votre ressenti et celui de votre enfant sont au cœur de ma pratique. Je m'adapte à vos besoins.",
  },
  {
    icon: HeartHandshake,
    title: "Bienveillance",
    description: "Un accompagnement sans jugement, dans le respect de votre rythme et de vos choix parentaux.",
  },
];

const Values = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Mes valeurs
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Ce qui guide <span className="italic text-primary">ma pratique</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mb-5">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
