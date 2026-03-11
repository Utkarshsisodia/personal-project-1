import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-40 mb-10  md:pt-32 md:pb-40">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 -z-10 h-full w-full bg-background">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-[20%] rounded-full bg-primary/20 opacity-50 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center flex flex-col items-center z-10 relative">
        
        {/* Modern Announcement Pill */}
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-1.5 text-sm rounded-full bg-muted/50 backdrop-blur-sm border-primary/20 hover:bg-muted/80 transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="text-primary font-semibold">New</span> 
            Introducing ModernApp v2.0
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Badge>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Build Beautiful UIs with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Speed and Precision
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
          Everything you need to launch your next application. 
          Accessible, customizable, and perfectly integrated with your modern tech stack.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
            Get Started for Free
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base gap-2">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </div>
        
      </div>
    </section>
  );
}