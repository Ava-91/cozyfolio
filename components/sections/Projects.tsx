"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "../constants/projects";
import type { Project } from "@/types/project";

const statusLegend = ["Active", "Maintained", "Experiment", "Completed"] as const;

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const renderProject = (project: Project, index: number, featured = false) => (
    <motion.div
      key={project.title}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <ProjectCard title={project.title} description={project.description} image={project.image} tags={project.tags} liveUrl={project.liveUrl} githubUrl={project.githubUrl} featured={featured} preview={project.preview} status={project.status} problem={project.problem} solution={project.solution} />
    </motion.div>
  );

  return (
    <section id="projects" className="px-4 py-20" aria-labelledby="projects-title">
      <div className="container max-w-6xl">
        <SectionTitle align="center" subtitle="A mix of polished interfaces, local-first tools, and oddly specific ideas I decided deserved software.">
          Things I&apos;ve <span id="projects-title" className="text-primary">Built</span>
        </SectionTitle>
        <div className="mb-8 flex flex-wrap justify-center gap-3 text-xs text-muted" aria-label="Project status legend">
          {statusLegend.map((status) => <span key={status} className="rounded-full border border-border bg-surface/50 px-3 py-1">{status}</span>)}
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Featured work</span><div className="h-px flex-1 bg-border" /></div>
          <div className="grid grid-cols-1 gap-6">{featuredProjects.map((project, index) => renderProject(project, index, true))}</div>
          {otherProjects.length > 0 && <><div className="flex items-center gap-3 pt-8"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">More things I&apos;ve built</span><div className="h-px flex-1 bg-border" /></div><div className="grid grid-cols-1 gap-6 md:grid-cols-2">{otherProjects.map((project, index) => renderProject(project, index))}</div></>}
        </div>
      </div>
    </section>
  );
};

export default Projects;
