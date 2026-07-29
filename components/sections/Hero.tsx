"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 text-xs text-muted mb-8">
            <span className="text-primary">●</span>
            Currently building cozy things on the internet
          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="text-primary">
              Ava
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-muted">
            Frontend-first developer building calm, minimal and thoughtful web
            experiences.
          </p>

          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted leading-8">
            I'm passionate about crafting interfaces that feel clean, modern and
            enjoyable to use. Currently exploring Next.js, TypeScript, React and
            building projects one commit at a time.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="#projects">
              <Button variant="primary" size="lg">
                View Projects
              </Button>
            </Link>

            <Link href="#about">
              <Button variant="ghost" size="lg">
                About Me
              </Button>
            </Link>
          </div>

          {/* Small info */}

          <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full border border-border bg-surface/40 px-3 py-1 text-muted">
                Next.js
            </span>

            <span className="rounded-full border border-border bg-surface/40 px-3 py-1 text-muted">
                TypeScript
            </span>

            <span className="rounded-full border border-border bg-surface/40 px-3 py-1 text-muted">
                Tailwind CSS
            </span>

            <span className="rounded-full border border-border bg-surface/40 px-3 py-1 text-muted">
                React
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;