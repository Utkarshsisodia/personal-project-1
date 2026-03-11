import { Github, Slack, Figma, Trello, MessageSquare, Mail, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Configuration array for your integrations
const integrationsData = [
  {
    name: "GitHub",
    description: "Link pull requests, track issues, and automate your deployment workflows seamlessly.",
    icon: Github,
    color: "bg-neutral-900 text-white", // Brand color block
  },
  {
    name: "Slack",
    description: "Get real-time notifications, alerts, and report summaries directly in your team channels.",
    icon: Slack,
    color: "bg-[#4A154B] text-white",
  },
  {
    name: "Figma",
    description: "Embed live design files, collaborate in real-time, and keep your development team in sync.",
    icon: Figma,
    color: "bg-[#F24E1E] text-white",
  },
  {
    name: "Trello",
    description: "Sync your project boards, automate card movements, and track task progress effortlessly.",
    icon: Trello,
    color: "bg-[#0052CC] text-white",
  },
  {
    name: "Discord",
    description: "Build community bots, manage roles, and push platform updates directly to your server.",
    icon: MessageSquare,
    color: "bg-[#5865F2] text-white",
  },
  {
    name: "Mailchimp",
    description: "Sync your user base, manage subscriber lists, and trigger automated email campaigns.",
    icon: Mail,
    color: "bg-[#FFE01B] text-black",
  }
];

export default function Integrations() {
  return (
    <section className="py-24 mb-10 pb-40 bg-muted/30 border-y border-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 bg-background">
            Integrations
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Connect your favorite tools
          </h2>
          <p className="text-lg text-muted-foreground">
            ModernApp plugs seamlessly into your existing workflow. Sync data across your entire tech stack with just a few clicks.
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrationsData.map((app) => (
            <Card 
              key={app.name} 
              className="p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-background border-muted"
            >
              {/* Card Header: Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${app.color}`}>
                  <app.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{app.name}</h3>
                  <p className="text-xs text-muted-foreground font-medium">Official Integration</p>
                </div>
              </div>
              
              {/* Card Body: Description */}
              <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
                {app.description}
              </p>
              
              {/* Card Footer: Action */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
              >
                Connect
              </Button>
            </Card>
          ))}
        </div>

        {/* View All Call-to-Action */}
        <div className="mt-12 text-center flex justify-center">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
            View all 50+ integrations <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}