"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl">
        <SectionTitle align="left">
          About <span className="text-primary">Me</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="space-y-4">
            <p className="text-text leading-relaxed">
              I'm a full-stack developer with a passion for creating clean,
              minimal, and user-friendly digital experiences. With a background
              in both design and development, I bridge the gap between
              aesthetics and functionality.
            </p>
            <p className="text-text leading-relaxed">
              Currently focused on building web applications with Next.js,
              TypeScript, and Tailwind CSS. I believe in writing clean code,
              thoughtful design, and creating products that people love to use.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-muted bg-surface/50 px-3 py-1 rounded-full border border-border">
                Next.js
              </span>
              <span className="text-xs text-muted bg-surface/50 px-3 py-1 rounded-full border border-border">
                TypeScript
              </span>
              <span className="text-xs text-muted bg-surface/50 px-3 py-1 rounded-full border border-border">
                Tailwind CSS
              </span>
              <span className="text-xs text-muted bg-surface/50 px-3 py-1 rounded-full border border-border">
                React
              </span>
              <span className="text-xs text-muted bg-surface/50 px-3 py-1 rounded-full border border-border">
                Node.js
              </span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;