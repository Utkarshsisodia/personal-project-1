import * as React from "react";
import { Menu, Rocket } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button"; // Note: We imported buttonVariants
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full mb-10  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">ModernApp</span>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Rocket className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Getting Started
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Everything you need to know to build your next great
                          app.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Components
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Pre-built, beautiful UI elements.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Themes
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Customizable styling and colors.
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#about" className={navigationMenuTriggerStyle()}>
                  About
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" aschild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button aschild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left">Navigation</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  About
                </a>
                <div className="mt-8 flex flex-col gap-3">
                  <Button variant="outline" className="w-full" aschild>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button className="w-full" aschild>
                    <Link to="/signup">Sign up</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
