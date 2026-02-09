import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Prenons <span className="italic text-primary">rendez-vous</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">Je me déplace à votre domicile sur Rennes et ses alentours. N'hésitez pas à me contacter pour en savoir plus ou pour réserver un soin.</p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="bg-card rounded-2xl p-8 md:p-10 shadow-warm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Zone d'intervention</p>
              <p className="text-muted-foreground font-body">Rennes et alentours (35)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blush/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-blush-foreground" />
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Téléphone</p>
              <a className="text-muted-foreground font-body hover:text-primary transition-colors" href="tel:+33785591628">
                07 85 59 16 28    
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Email</p>
              <a className="text-muted-foreground font-body hover:text-primary transition-colors" href="mailto:lespetitsrituels.contact@gmail.com">
                lespetitsrituels.contact@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-4">
            <a href="tel:+33600000000" className="block w-full text-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-base shadow-warm hover:opacity-90 transition-opacity">
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Contact;