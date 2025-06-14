
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Photography } from "../components/Photography";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Services />
        <Photography />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
