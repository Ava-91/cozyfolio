"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "../constants/projects";
import type { Project } from "@/types/project";

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="container max-w-6xl">
        <SectionTitle
          align="center"
          subtitle="Things I&apos;ve built while learning, breaking, fixing, and rebuilding."
        >
          My <span className="text-primary">Projects</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
