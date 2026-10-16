"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSession, signOut } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          id="nav-logo"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-foreground text-background text-sm font-bold">
            JH
          </span>
          <span className="hidden sm:inline">Jubair Hatem</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" id="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute inset-x-1 -bottom-[1.5px] h-0.5 bg-foreground rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full cursor-pointer"
                )}
                id="user-menu-btn"
              >
                <Avatar className="size-7">
                  <AvatarFallback className="bg-foreground text-background text-xs font-medium">
                    {session.user?.name?.charAt(0)?.toUpperCase() || session.user?.email?.charAt(0)?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{session.user?.name || "User"}</p>
                  <p className="text-xs text-muted-foreground">{session.user?.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} id="sign-out-btn">
                  <LogOut className="mr-2 size-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline" size="sm" id="sign-in-nav-btn">
                <User className="mr-1.5 size-3.5" />
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden cursor-pointer")}
              id="mobile-menu-btn"
            >
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-heading text-lg font-bold">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      pathname === link.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
