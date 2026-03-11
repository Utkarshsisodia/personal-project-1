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
import FadeIn from "@/components/FadeIn";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        <FadeIn direction="none" delay={0.2}>
          <Hero />
        </FadeIn>

        <FadeIn direction="up">
          <LogoCloud />
        </FadeIn>
        
        <FadeIn direction="up">
          <BentoFeatures />
        </FadeIn>
        
        <FadeIn direction="up">
          <Integrations />
        </FadeIn>
        
        <FadeIn direction="up">
          <Customers />
        </FadeIn>
        
        <FadeIn direction="up">
          <FAQ />
        </FadeIn>
        
        <FadeIn direction="up">
          <Blog />
        </FadeIn>
        
        <FadeIn direction="up">
          <CTA />
        </FadeIn>

      </main>
        <Footer />
    </div>
  );
}

export default App;
