import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <div id="values">
        <Values />
      </div>
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
