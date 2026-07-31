"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

import { cn } from "@/lib/utils";

import { skills } from "../constants/skills";

import type { Skill, SkillCategory } from "@/types/skill";

const categoryOrder: SkillCategory[] = [
  "Frontend",
  "Backend",
  "CMS",
  "Tools",
  "Design",
  "Other",
];

const levelStyles = {
  Learning:
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",

  Intermediate:
    "border-blue-500/30 bg-blue-500/10 text-blue-400",

  Advanced:
    "border-green-500/30 bg-green-500/10 text-green-400",
};

const Skills = () => {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push(skill);

      return acc;
    },
    {} as Record<SkillCategory, Skill[]>
  );

  return (
    <section
      id="skills"
      className="py-24 px-4"
    >
      <div className="container max-w-5xl">
        <SectionTitle
          subtitle="Technologies, tools, and platforms I enjoy working with."
          align="center"
        >
          My <span className="text-primary">Skills</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="space-y-10">
              {categoryOrder.map((category) => {
                const items = groupedSkills[category];

                if (!items?.length) return null;

                const sorted = [...items].sort((a, b) => {
                  if (a.featured === b.featured) return 0;
                  return a.featured ? -1 : 1;
                });

                return (
                  <div key={category}>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="h-px flex-1 bg-border" />

                      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                        {category}
                      </h3>

                      <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {sorted.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="default"
                            className={cn(
                              "flex items-center gap-2 border px-4 py-2 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg",
                              levelStyles[skill.level]
                            )}
                          >
                            <span>{skill.name}</span>

                            {skill.featured && (
                              <span className="text-yellow-400">
                                ★
                              </span>
                            )}

                            <span className="text-[10px] uppercase tracking-wider opacity-70">
                              {skill.level}
                            </span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;