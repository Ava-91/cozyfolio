"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { skills } from "../constants/skills";
import type { Skill, SkillCategory } from "@/types/skill";

const Skills = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const levelColors = {
    Learning: "border-yellow-500/30 text-yellow-500",
    Intermediate: "border-blue-500/30 text-blue-500",
    Advanced: "border-success/30 text-success",
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-4xl">
        <SectionTitle align="center">
          My <span className="text-primary">Skills</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted mb-3 uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill: Skill, index: number) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="default" 
                          className={cn(
                            "px-3 py-1.5 text-sm border",
                            levelColors[skill.level]
                          )}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;