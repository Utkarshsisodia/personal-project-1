import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import BentoFeatures from "../components/BentoFeatures"; 
import "../App.css";
import Integrations from "../components/Integrations";
import Customers from "../components/Customers";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <BentoFeatures />
        <Integrations />
        <Customers />
        <FAQ />
        <Blog />
        <CTA />

        <Footer />
      </main>
      
    </div>
  );
}

export default App;