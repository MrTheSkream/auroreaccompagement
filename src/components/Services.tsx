import { motion } from "framer-motion";
import { Droplets, Heart, Baby, HandHeart } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Thérapeutique Bain Bébé",
    description:
      "Un moment de détente unique dans l'eau, inspiré du bain enveloppé, pour retrouver les sensations rassurantes du ventre maternel. Je me suis formée à l'École du Bien Naître.",
    duration: "1h30 environ",
    tariff: "90 €",
    color: "bg-sage-light text-sage",
    iconColor: "text-sage",
  },
  {
    icon: Heart,
    title: "Massage bien-être du bébé",
    description:
      "Des gestes doux et enveloppants pour apaiser votre bébé, favoriser son sommeil et renforcer le lien parent-enfant.",
    duration: "45 min",
    tariff: "35 € (ou 120 € pour 4 séances)",
    color: "bg-blush/20 text-blush-foreground",
    iconColor: "text-blush-foreground",
  },
  {
    icon: Baby,
    title: "Portage physiologique",
    description:
      "Découverte et mise en place du portage en écharpe ou en sling, dans le respect de la physiologie de bébé et du porteur.",
    duration: "1h30",
    tariff: "70 €",
    color: "bg-accent text-accent-foreground",
    iconColor: "text-accent-foreground",
  },
  {
    icon: HandHeart,
    title: "Accompagnement parentalité",
    description:
      "Soins, allaitement, réassurance… Un espace d'écoute bienveillant pour vous guider dans vos premiers pas de parent, en toute confiance.",
    duration: null,
    tariff: "Tarif à discuter ensemble selon la demande",
    color: "bg-warm/20 text-warm-foreground",
    iconColor: "text-warm-foreground",
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

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative rounded-2xl bg-card p-8 shadow-card hover:shadow-warm transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-6`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-sm mx-auto">
                {service.description}
              </p>

              <div className="w-full mt-auto pt-5 border-t border-border">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {service.duration && (
                    <div className="text-center">
                      <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                        Durée
                      </p>
                      <p className="text-sm font-body font-medium text-foreground">
                        {service.duration}
                      </p>
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Tarif
                    </p>
                    <p className="text-sm font-body font-semibold text-primary">
                      {service.tariff}
                    </p>
                  </div>
                </div>
              </div>

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
