"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "../constants/projects";
import type { Project } from "@/types/project";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-4 py-20">
      <div className="container max-w-6xl">
        <SectionTitle
          align="center"
          subtitle="A mix of polished interfaces, local-first tools, and oddly specific ideas I decided deserved software."
        >
          Things I&apos;ve <span className="text-primary">Built</span>
        </SectionTitle>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Featured work
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featuredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  featured
                />
              </motion.div>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <div className="flex items-center gap-3 pt-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                  More things I&apos;ve built
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {otherProjects.map((project: Project, index: number) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
