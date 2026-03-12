import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Server Actions in Next.js 14",
    summary:
      "Dive deep into the new server actions paradigm and learn how to mutate data without writing traditional API routes.",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    date: "Oct 24, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Designing Accessible UI Components",
    summary:
      "Accessibility isn't a feature, it's a requirement. Learn the core principles of building inclusive interfaces with modern CSS.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    date: "Nov 02, 2025",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Future of Web Typography",
    summary:
      "How variable fonts and modern CSS viewport units are revolutionizing responsive typography on the web.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&auto=format&fit=crop",
    date: "Nov 15, 2025",
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <section className="py-24 mb-10 pb-40 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 bg-muted/50">
              Our Blog
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Latest from the journal
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover insights, tutorials, and platform updates straight from
              our engineering and design teams.
            </p>
          </div>

          <Link to="/blog">
            <Button className="hidden md:flex gap-2" aschild>
              View all posts <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-muted bg-transparent hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background/90">
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                  {post.summary}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-sm text-primary mt-auto group/link"
                >
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link to="/blog">
          <Button
            variant="outline"
            className="w-full mt-8 md:hidden gap-2"
            aschild
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
