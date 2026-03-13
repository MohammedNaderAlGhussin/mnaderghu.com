"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  LayoutTemplate,
  Server,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";

export default function Skills() {
  const { t, i18n } = useTranslation("common");

  const skills = [
    {
      title: String(t("skills.frontend.title", "Frontend Development")),
      desc: String(
        t("skills.frontend.desc", "Crafting immersive user interfaces"),
      ),
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    },
    {
      title: String(t("skills.backend.title", "Backend & Logic")),
      desc: String(
        t("skills.backend.desc", "Scalable systems and robust APIs"),
      ),
      icon: <Server className="w-8 h-8 text-primary" />,
      tags: ["Node.js", "Express", "Python", "Go", "GraphQL"],
    },
    {
      title: String(t("skills.database.title", "Database")),
      desc: String(t("skills.database.desc", "Secure and structured data")),
      icon: <Database className="w-8 h-8 text-primary" />,
      tags: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
    },
    {
      title: String(t("skills.devops.title", "DevOps")),
      desc: String(t("skills.devops.desc", "Deployment and infrastructure")),
      icon: <Settings className="w-8 h-8 text-primary" />,
      tags: ["Docker", "AWS", "Vercel", "CI/CD", "Linux"],
    },
  ];

  const approaches = [
    {
      title: String(t("skills.approach.1.title", "Understand First")),
      desc: String(
        t(
          "skills.approach.1.desc",
          "I dive deep into the problem domain to ensure every line of code serves a business goal.",
        ),
      ),
    },
    {
      title: String(t("skills.approach.2.title", "Architecture Matters")),
      desc: String(
        t(
          "skills.approach.2.desc",
          "Scalable, maintainable, and clean architecture is the foundation of every project I build.",
        ),
      ),
    },
    {
      title: String(t("skills.approach.3.title", "Iterative by Nature")),
      desc: String(
        t(
          "skills.approach.3.desc",
          "Continuous feedback loops and rapid prototyping ensure the final product hits the mark.",
        ),
      ),
    },
    {
      title: String(t("skills.approach.4.title", "Collaboration")),
      desc: String(
        t(
          "skills.approach.4.desc",
          "I work best as part of a team, sharing knowledge and bridging silos between departments.",
        ),
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Header Section */}
        <section className="text-center md:text-left rtl:md:text-right max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-heading tracking-tighter"
          >
            {String(t("skills.hero.title", "Expertise"))}
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
                "skills.hero.desc",
                "Designing and developing robust digital experiences with a modern tech stack. I bridge the gap between complex engineering and human-centered design.",
              ),
            )}
          </motion.p>
        </section>

        {/* Tech Stack Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardSpotlight className="h-full group hover:shadow-2xl transition-shadow duration-500 rounded-[2rem] border-border/10">
                  <div className="space-y-8 relative z-10">
                    <div className="p-5 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-primary transition-colors font-heading tracking-tight">
                        {skill.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                        {skill.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-border/5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-secondary/30 text-secondary-foreground text-[10px] font-black uppercase tracking-widest rounded-lg border border-border/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left rtl:md:text-right"
          >
            <h2 className="text-3xl md:text-6xl font-black font-heading tracking-tighter uppercase">
              {String(t("skills.how.title", "Philosophies"))}
              <span className="text-primary">.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 p-10 rounded-[2.5rem] bg-secondary/10 border border-border/5 hover:border-primary/20 hover:bg-secondary/20 transition-all group"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-primary transition-colors font-heading tracking-tight underline decoration-primary/20 decoration-4 underline-offset-8">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-body mt-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-32 border-t border-border/10 text-center"
        >
          <h2 className="text-4xl md:text-8xl font-black mb-12 max-w-5xl mx-auto leading-[1.1] font-heading tracking-tighter">
            {String(
              t("skills.cta.title", "Let's build something exceptional."),
            )}
          </h2>
          <Link
            href={`/${i18n.language}/contact`}
            className="inline-flex h-20 items-center justify-center rounded-2xl bg-primary px-16 text-xl font-black text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-110 active:scale-95 uppercase tracking-widest"
          >
            {String(t("skills.cta.btn", "Start a Project"))}
            <ArrowRight className="ml-4 h-6 w-6 rtl:rotate-180" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
