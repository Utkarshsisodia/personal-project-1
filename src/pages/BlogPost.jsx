import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { blogPosts } from "@/lib/blogData";

export default function BlogPost() {
  const { id } = useParams();

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the article you were looking for.
          </p>
          <Button asChild>
            <Link to="/blog">Back to all posts</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <article className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </Button>

          <header className="mb-10 text-center md:text-left">
            <Badge className="mb-6" variant="secondary">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {post.summary}
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-border py-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.initials}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    {post.author.name}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2">
                  Share:
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          <figure className="mb-12 rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </figure>

          <div className="prose prose-zinc dark:prose-invert max-w-3xl mx-auto md:text-lg leading-loose text-muted-foreground space-y-8">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-foreground font-medium text-xl leading-relaxed"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
