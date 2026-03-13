"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Skills() {
  const { t, i18n } = useTranslation("common");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      title: t("skills.frontend.title", "Frontend Development"),
      desc: t("skills.frontend.desc", "Crafting immersive user interfaces"),
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    },
    {
      title: t("skills.backend.title", "Backend & Logic"),
      desc: t("skills.backend.desc", "Scalable systems and robust APIs"),
      icon: <Server className="w-8 h-8 text-primary" />,
      tags: ["Node.js", "Express", "Python", "Go", "GraphQL"],
    },
    {
      title: t("skills.database.title", "Database"),
      desc: t("skills.database.desc", "Secure and structured data"),
      icon: <Database className="w-8 h-8 text-primary" />,
      tags: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
    },
    {
      title: t("skills.devops.title", "DevOps"),
      desc: t("skills.devops.desc", "Deployment and infrastructure"),
      icon: <Settings className="w-8 h-8 text-primary" />,
      tags: ["Docker", "AWS", "Vercel", "CI/CD", "Linux"],
    },
  ];

  const approaches = [
    {
      title: t("skills.approach.1.title", "Understand First"),
      desc: t(
        "skills.approach.1.desc",
        "I dive deep into the problem domain to ensure every line of code serves a business goal.",
      ),
    },
    {
      title: t("skills.approach.2.title", "Architecture Matters"),
      desc: t(
        "skills.approach.2.desc",
        "Scalable, maintainable, and clean architecture is the foundation of every project I build.",
      ),
    },
    {
      title: t("skills.approach.3.title", "Iterative by Nature"),
      desc: t(
        "skills.approach.3.desc",
        "Continuous feedback loops and rapid prototyping ensure the final product hits the mark.",
      ),
    },
    {
      title: t("skills.approach.4.title", "Collaboration"),
      desc: t(
        "skills.approach.4.desc",
        "I work best as part of a team, sharing knowledge and bridging silos between departments.",
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto space-y-24"
      >
        {/* Header Section */}
        <section className="text-center md:text-left rtl:md:text-right max-w-3xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            {t("skills.hero.title", "Skills & Technologies")}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {t(
              "skills.hero.desc",
              "Designing and developing robust digital experiences with a modern tech stack. I bridge the gap between complex engineering and human-centered design.",
            )}
          </motion.p>
        </section>

        {/* Tech Stack Grid */}
        <section>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-2xl w-fit">
                      {skill.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {skill.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {skill.desc}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Approach Section */}
        <section className="space-y-12">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              {t("skills.how.title", "How I Work")}
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          variants={itemVariants}
          className="py-12 border-t border-border mt-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            {t("skills.cta.title", "Let's build something great together.")}
          </h2>
          <Link
            href={`/${i18n.language}/contact`}
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
          >
            {t("skills.cta.btn", "Start a Project")}
            <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180 rtl:ml-0 rtl:mr-2" />
          </Link>
        </motion.section>
      </motion.div>
    </div>
  );
}
