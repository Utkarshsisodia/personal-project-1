import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CTA() {
  return (
    <section className="py-24 mb-10 pb-40 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Clean, standard card container matching your Bento grid */}
        <div className="relative overflow-hidden rounded-3xl border bg-background px-6 py-24 text-center shadow-sm isolate">
          
          {/* Subtle Dot Pattern Background 
            It uses a radial gradient mask so the dots smoothly fade out at the edges of the container 
          */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]"></div>

          {/* CTA Content */}
          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
            
            <Badge variant="secondary" className="mb-8 px-4 py-1.5 shadow-sm">
              <Zap className="w-4 h-4 mr-2 text-amber-500" />
              <span className="font-medium text-sm">Ready to get started?</span>
            </Badge>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              Build your next idea <br className="hidden sm:block" /> faster than ever.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Stop reinventing the wheel. Use our robust, accessible, and highly customizable UI blocks to ship your application in record time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-12 px-8 text-base rounded-lg shadow-md hover:shadow-lg transition-all">
                Start Building Free
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-lg group bg-background">
                Read Documentation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}