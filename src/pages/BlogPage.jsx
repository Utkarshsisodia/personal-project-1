import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Expanded dummy data for the full page

import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Page Header */}
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              The ModernApp Journal
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our latest thoughts on engineering, design, and building better products.
            </p>
          </div>

          {/* Expanded Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-muted bg-transparent hover:shadow-lg transition-all duration-300 flex flex-col">
                
                {/* Image */}
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

                {/* Content */}
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
                  
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center font-medium text-sm text-primary mt-auto group/link">
                    Read article 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}