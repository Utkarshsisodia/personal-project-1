import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Customer review data with Unsplash placeholder faces
const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO @ TechFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&auto=format&fit=crop",
    review:
      "This platform completely revolutionized how our engineering team ships features. The integration process was seamless, and the performance gains were immediate. Highly recommended.",
  },
  {
    name: "David Chen",
    role: "Lead Designer @ Nexus",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&auto=format&fit=crop",
    review:
      "As a designer, I am incredibly picky about UI. ModernApp not only provides a rock-solid backend but the frontend components are gorgeous right out of the box. It saved us months of work.",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product @ Innovate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&auto=format&fit=crop",
    review:
      "The analytics tools are next level. We finally have clear visibility into our user journeys without needing a dedicated data science team to build custom dashboards for us.",
  },
  {
    name: "Marcus Johnson",
    role: "Founder @ StartupX",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&auto=format&fit=crop",
    review:
      "We evaluated five different vendors before choosing this one. The pricing is transparent, the security is enterprise-grade, and their support team is insanely responsive.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Director @ ScaleUp",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&auto=format&fit=crop",
    review:
      "Connecting our CRM and email marketing tools took less than ten minutes. The pre-built integrations are flawless and have completely automated our lead-generation pipeline.",
  },
  {
    name: "Alexei Volkov",
    role: "Senior Engineer @ CloudBase",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&auto=format&fit=crop",
    review:
      "The documentation is actually readable and accurate, which is a rare find these days. Moving our legacy system over to this modern architecture was the best decision we made this year.",
  },
];

export default function Customers() {
  return (
    <section className="py-24 mb-10 pb-40 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Loved by builders worldwide.
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here is what industry leaders have
            to say about building with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col justify-between bg-muted/20 border-muted hover:bg-muted/40 transition-colors duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-8">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="h-12 w-12 border shadow-sm">
                  <AvatarImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover"
                  />

                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
