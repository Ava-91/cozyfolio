"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { links } from "../constants/links";
import type { NavLink } from "../../types/link";
import Button from "../../components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-text hover:text-primary transition-colors duration-200"
          onClick={closeMenu}
        >
          <span className="text-primary">●</span> Ava
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link: NavLink) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="#projects">
            <Button variant="primary" size="md">
              View Projects
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-text hover:text-primary transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 md:top-20 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          )}
          aria-hidden={!isOpen}
        >
          <ul className="container flex flex-col py-6 gap-4">
            {links.map((link: NavLink) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-text hover:text-primary transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="#projects" onClick={closeMenu}>
                <Button variant="primary" size="lg" fullWidth>
                  View Projects
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;