import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-card/50 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-primary">
          <Heart className="w-4 h-4 fill-current" />
          <span className="font-display text-lg font-semibold">Bien-être Bébé</span>
          <Heart className="w-4 h-4 fill-current" />
        </div>
        <p className="text-sm text-muted-foreground font-body">
          Soins à domicile · Rennes & alentours
        </p>
        <p className="text-xs text-muted-foreground/60 font-body">
          © {new Date().getFullYear()} — Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
