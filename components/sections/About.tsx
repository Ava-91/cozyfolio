"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
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
              Hi! I’m Ava, a student and aspiring full-stack developer who loves
              building websites that feel clean, cozy and enjoyable to use. I
              spend most of my free time experimenting with new technologies,
              improving old projects and learning something new every day.
            </p>

            <p className="leading-8 text-text">
              My coding journey started with simple visual programming and later
              grew into HTML, CSS and JavaScript. Today I’m focused on React,
              Next.js, TypeScript and creating interfaces that balance good
              design with solid code.
            </p>

            <p className="leading-8 text-text">
              Outside of programming you’ll usually find me listening to music,
              customizing my development setup, organizing GitHub repositories,
              or turning random ideas into little side projects.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "WordPress",
                "UI Design",
                "Git & GitHub",
              ].map((item) => (
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