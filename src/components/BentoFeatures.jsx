import { Zap, Shield, Smartphone, LineChart } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BentoFeatures() {
  return (
    <section className="py-24 mb-10 pb-40 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Everything you need to scale.
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed to help you build faster,
            manage smarter, and deliver exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          <Card className="md:col-span-2 overflow-hidden flex flex-col relative group bg-muted/30">
            <CardHeader className="relative z-10 md:w-[55%]">
              <Zap className="h-8 w-8 text-amber-500 mb-2" />
              <CardTitle className="text-2xl">
                Lightning Fast Performance
              </CardTitle>
              <CardDescription className="text-base">
                Built on a modern edge network, our platform ensures your
                application responds in milliseconds, no matter where your users
                are located.
              </CardDescription>
            </CardHeader>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
              alt="Dashboard Mockup"
              className="absolute bottom-[-10%] right-[-5%] w-[80%] md:w-[50%] h-[80%] rounded-tl-xl object-cover object-left-top border shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2"
            />
          </Card>

          <Card className="md:col-span-1 md:row-span-2 overflow-hidden flex flex-col relative group bg-muted/30">
            <CardHeader className="relative z-10">
              <Shield className="h-8 w-8 text-emerald-500 mb-2" />
              <CardTitle className="text-2xl">Bank-Grade Security</CardTitle>
              <CardDescription className="text-base">
                Your data is protected by enterprise-level encryption,
                continuous monitoring, and automated threat detection systems.
              </CardDescription>
            </CardHeader>

            <div className="flex-1 relative mt-4">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                alt="Security Mockup"
                className="absolute inset-x-6 bottom-0 h-[85%] w-[calc(100%-3rem)] rounded-t-xl object-cover object-top border-x border-t shadow-2xl transition-all duration-500 group-hover:h-[90%]"
              />
            </div>
          </Card>

          <Card className="overflow-hidden relative flex flex-col group bg-muted/30">
            <CardHeader className="relative z-10 pb-0">
              <Smartphone className="h-6 w-6 text-blue-500 mb-2" />
              <CardTitle>Mobile Optimized</CardTitle>
              <CardDescription>
                Flawless responsive design that looks and feels native on any
                screen size.
              </CardDescription>
            </CardHeader>

            <div className="flex-1 relative mt-6 min-h-[140px]">
              <img
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                alt="Mobile Mockup"
                className="absolute right-4 bottom-[-10%] w-[80%] h-[110%] rounded-t-xl object-cover object-top border shadow-lg transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </Card>

          <Card className="overflow-hidden relative flex flex-col group bg-muted/30">
            <CardHeader className="relative z-10 pb-0">
              <LineChart className="h-6 w-6 text-rose-500 mb-2" />
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Real-time insights and beautiful charts to help you make
                data-driven decisions.
              </CardDescription>
            </CardHeader>

            <div className="flex-1 relative mt-6 min-h-[140px]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                alt="Analytics Mockup"
                className="absolute inset-x-6 bottom-[-15%] h-[110%] w-[calc(100%-3rem)] rounded-t-xl object-cover object-top border shadow-lg transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
