import { motion } from "framer-motion";
import { Heart, Droplets, HandHeart } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Massage bien-être bébé",
    description:
      "Des gestes doux et enveloppants pour apaiser votre bébé, favoriser son sommeil et renforcer le lien parent-enfant.",
    color: "bg-blush/20 text-blush-foreground",
    iconColor: "text-blush-foreground",
  },
  {
    icon: Droplets,
    title: "Bain thérapeutique bébé",
    description:
      "Un moment de détente unique dans l'eau, inspiré du bain enveloppé, pour retrouver les sensations rassurantes du ventre maternel.",
    color: "bg-sage-light text-sage",
    iconColor: "text-sage",
  },
  {
    icon: HandHeart,
    title: "Accompagnement parentalité",
    description:
      "Un espace d'écoute bienveillant pour vous guider dans vos premiers pas de parent, en toute confiance.",
    color: "bg-accent text-accent-foreground",
    iconColor: "text-accent-foreground",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Mes soins
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Des soins pensés avec <span className="italic text-primary">tendresse</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative rounded-2xl bg-card p-8 shadow-card hover:shadow-warm transition-shadow duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-6`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
