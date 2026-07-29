"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-xs text-muted mb-6">
            <span className="text-primary">●</span>
            Available for work
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-text tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Ava</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted mb-6">
            Full-stack developer & UI/UX enthusiast
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10">
            I build clean, performant, and accessible web experiences.
            Passionate about minimal design and thoughtful interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#projects">
              <Button variant="primary" size="lg">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="ghost" size="lg">
                Get in touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;