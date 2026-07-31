"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";

import { cn } from "@/lib/utils";
import { links } from "@/components/constants/links";
import type { NavLink } from "@/types/link";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsOpen(false);

  // Prevent body scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll detection + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 140;

      for (const link of links) {
        const section = document.querySelector(link.href) as HTMLElement | null;

        if (!section) continue;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(link.href);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close with Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled &&
          "border-b border-border/60 bg-background/75 backdrop-blur-xl shadow-lg shadow-black/5"
      )}
    >
      <nav
        className="container flex h-20 items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_14px_var(--color-primary)]" />

          <div className="leading-none">
            <h2 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
              Ava
            </h2>

            <p className="hidden text-xs text-muted lg:block">
              building cozy internet things ✨
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link: NavLink) => {
            const active = activeSection === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5",
                    active
                      ? "text-primary"
                      : "text-muted hover:text-text"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300",
                      active
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    )}
                  />

                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}

        <div className="hidden md:block">
          <Link href="#contact">
            <Button variant="primary" size="md">
              <Mail className="h-4 w-4" />
              Say hi ✨
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-xl border border-border bg-surface/40 p-2 transition-all duration-200 hover:bg-surface md:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-125" : "max-h-0"
        )}
      >
        <div className="container pb-5">
          <div className="rounded-3xl border border-border bg-surface/90 p-5 shadow-2xl backdrop-blur-xl">
            <ul className="space-y-2">
              {links.map((link: NavLink) => {
                const active = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-text hover:bg-background"
                      )}
                    >
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full bg-primary",
                          active ? "opacity-100" : "opacity-0"
                        )}
                      />

                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5">
              <Link href="#contact" onClick={closeMenu}>
                <Button variant="primary" size="lg" fullWidth>
                  <Mail className="h-4 w-4" />
                  Say hi ✨
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;