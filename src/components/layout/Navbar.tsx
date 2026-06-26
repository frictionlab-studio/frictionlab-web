"use client";

// Navbar — sticky top navigation with a glass background that intensifies
// on scroll. Includes the brand mark, primary links, a CTA, and a mobile menu.
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  // Tracks whether the page has scrolled, to strengthen the glass effect.
  const [scrolled, setScrolled] = useState(false);
  // Tracks the mobile menu open/closed state.
  const [menuOpen, setMenuOpen] = useState(false);
  // Current route, used to mark the active nav link.
  const pathname = usePathname();

  // True when the given href is the current section of the site.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-white/10 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container size="wide">
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between"
        >
          {/* Brand mark */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/logo.png" alt="FrictionLab" className="h-8 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-foreground",
                    isActive(link.href) ? "text-foreground" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform",
                  menuOpen && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-opacity",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform",
                  menuOpen && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="glass border-t border-white/10 md:hidden">
          <Container size="wide">
            <ul className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-base transition-colors hover:bg-white/5 hover:text-foreground",
                      isActive(link.href) ? "text-foreground" : "text-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  href="/contact"
                  size="md"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
