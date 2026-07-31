"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { links } from "@/components/constants/links";
import type { NavLink } from "@/types/link";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(`#${section.id}`);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        isScrolled
          ? "border-b border-border/70 bg-background/75 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
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
          className="group flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-150" />

          <span className="transition-colors duration-300 group-hover:text-primary">
            Ava
          </span>
        </Link>

        {/* Desktop */}

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link: NavLink) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={
                  activeSection === link.href ? "page" : undefined
                }
                className={cn(
                  "relative text-sm transition-colors duration-200",
                  activeSection === link.href
                    ? "text-primary"
                    : "text-muted hover:text-text"
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                    activeSection === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}

        <div className="hidden md:block">
          <Link href="#contact">
            <Button variant="primary" size="md">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 transition-colors hover:bg-surface md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen
            ? "max-h-screen border-t border-border bg-background/95 backdrop-blur-xl"
            : "max-h-0"
        )}
      >
        <ul className="container flex flex-col gap-2 py-6">
          {links.map((link: NavLink) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "block rounded-xl px-4 py-3 transition-colors",
                  activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-text hover:bg-surface"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="pt-4">
            <Link href="#contact" onClick={closeMenu}>
              <Button variant="primary" size="lg" fullWidth>
                Hire Me
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;