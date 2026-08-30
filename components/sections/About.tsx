"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Python",
  "Git & GitHub",
  "UI Design",
  "WordPress",
];

const About = () => {
  return (
    <section id="about" className="px-4 py-24">
      <div className="container max-w-4xl">
        <SectionTitle
          subtitle="A little about the person behind the commits."
          align="left"
        >
          About <span className="text-primary">Me</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="space-y-6">
            <p className="leading-8 text-text">
              Hi! I’m Ava. I like making software that solves annoyingly specific
              problems, whether that means a polished interface, a local-first
              utility, or a tiny tool that makes an everyday workflow less
              frustrating.
            </p>

            <p className="leading-8 text-text">
              I started with visual programming and gradually moved through HTML,
              CSS and JavaScript into React, Next.js, TypeScript and Python. These
              days I enjoy exploring the space between thoughtful UI and the
              behind-the-scenes engineering that makes a project dependable.
            </p>

            <p className="leading-8 text-text">
              Outside of coding, I’m usually listening to music, customizing my
              setup, organizing digital things, or turning a random idea into a
              side project. I especially like software that feels calm to use but
              has more engineering underneath than you might expect.
            </p>

            <div
              className="flex flex-wrap gap-2 pt-2"
              aria-label="Technologies and tools"
            >
              {technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
