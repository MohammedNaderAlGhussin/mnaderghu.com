"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/aceternity/hover-effect";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

export default function Projects() {
  const { t, i18n } = useTranslation("common");
  const [filter, setFilter] = React.useState("All");

  const categories = [
    { label: String(t("projects.filter.all", "All")), value: "All" },
    { label: String(t("projects.filter.frontend", "Front-End")), value: "frontend" },
    { label: String(t("projects.filter.fullstack", "Full-Stack")), value: "full-stack" },
    { label: String(t("projects.filter.aiengineered", "AI Engineered")), value: "ai-engineered" },
  ];

  const filteredProjects = projects
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "full-stack":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      case "ai-engineered":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <section className="text-center md:text-left rtl:md:text-right max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-heading tracking-tighter"
          >
            {String(t("projects.hero.title", "My Projects"))}
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body"
          >
            {String(
              t(
                "projects.hero.desc",
                "A curated selection of my professional work and personal experiments in the realm of full-stack development and UI design.",
              ),
            )}
          </motion.p>
        </section>

        {/* Filter Bar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              onClick={() => setFilter(cat.value)}
              className={cn(
                "rounded-full font-black px-8 h-12 transition-all active:scale-95 uppercase tracking-widest text-xs",
                filter === cat.value
                  ? "shadow-lg shadow-primary/20"
                  : "border-border/50 text-muted-foreground",
              )}
            >
              {cat.label}
            </Button>
          ))}
        </motion.section>

        {/* Grid with HoverEffect */}
        <section className="relative z-10">
          <HoverEffect
            items={filteredProjects}
            renderItem={(project) => (
              <div className="h-full flex flex-col bg-card/60 backdrop-blur-md border-border/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative rounded-[2rem] group/card">
                <div className="h-64 w-full relative overflow-hidden flex items-center justify-center bg-secondary/20">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-secondary/10">
                      <span className="text-foreground/20 font-black text-2xl uppercase tracking-tighter text-center px-4">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity z-10" />
                </div>

                <CardHeader className="flex-1 relative z-20 -mt-16 mx-6 bg-card backdrop-blur-xl border border-border/10 rounded-[1.5rem] p-8 group-hover/card:border-primary/20 transition-all shadow-2xl">
                  <div className="flex justify-between items-start mb-6">
                    <Badge
                      variant="secondary"
                      className={cn(
                        "font-black px-4 py-1 text-[10px] uppercase tracking-widest rounded-lg border",
                        getBadgeColor(project.category)
                      )}
                    >
                      {String(t(`projects.cat.${project.category.replace("-", "")}`, project.category))}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-black line-clamp-1 group-hover/card:text-primary transition-colors font-heading tracking-tight text-center">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mt-6 text-base text-muted-foreground leading-relaxed font-body">
                    {String(
                      t(
                        `projects.${project.id}.shortDescription`,
                        project.shortDescription,
                      ),
                    )}
                  </CardDescription>

                  <div className="flex flex-wrap gap-4 mt-8 pt-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          "p-0 h-auto text-xs font-black uppercase tracking-widest text-primary hover:no-underline flex items-center gap-2 group/btn"
                        )}
                      >
                        <Globe className="w-4 h-4" />
                        {String(t("project.live", "Live Demo"))}
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          "p-0 h-auto text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary hover:no-underline flex items-center gap-2 group/btn"
                        )}
                      >
                        <Github className="w-4 h-4" />
                        {String(t("project.github", "GitHub"))}
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8 relative z-20 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border/5">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase font-black text-muted-foreground/50 border border-border/10 px-3 py-1 rounded-full bg-secondary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/${i18n.language}/projects/${project.id}`}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full rounded-2xl h-14 font-black uppercase tracking-widest text-xs group/btn"
                    )}
                  >
                    {String(t("project.viewDetails", "View Details"))}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1" />
                  </Link>
                </CardContent>
              </div>
            )}
          />
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-32 mt-32 text-center bg-linear-to-br from-secondary/30 to-background/50 border border-border/10 rounded-[4rem] relative overflow-hidden backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 px-8">
            <h2 className="text-4xl md:text-7xl font-black mb-10 font-heading tracking-tighter">
              {String(t("projects.cta.title", "Ready to collaborate?"))}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-xl md:text-2xl font-body leading-relaxed">
              {String(
                t(
                  "projects.cta.desc",
                  "I'm currently available for freelance work and open-source collaborations. Let's build something amazing together.",
                ),
              )}
            </p>
            <Link
              href={`/${i18n.language}/contact`}
              className="inline-flex h-20 items-center justify-center rounded-3xl bg-primary px-16 text-xl font-black text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 uppercase tracking-widest"
            >
              {String(t("projects.cta.btn", "Get in touch"))}
              <ArrowRight className="ml-4 h-6 w-6 rtl:rotate-180" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
