"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const { t, i18n } = useTranslation("common");
  const [filter, setFilter] = React.useState("All");

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

  const categories = ["All", "Frontend", "Backend", "Full-Stack", "UI Design"];

  const projects = [
    {
      id: "ai-analytics-dashboard",
      title: "AI Analytics Dashboard",
      category: "Full-Stack",
      desc: "A real-time predictive analytics dashboard for SaaS platforms using OpenAI APIs and dynamic data streaming.",
      tech: ["React", "Next.js", "Redux", "Tailwind"],
    },
    {
      id: "ecommerce-engine",
      title: "E-commerce Engine",
      category: "Full-Stack",
      desc: "High-performance storefront with headless CMS integration, global state management, and Stripe payments.",
      tech: ["Next.js", "Stripe", "Sanity", "Zustand"],
    },
    {
      id: "web3-wallet",
      title: "Web3 Wallet Tracker",
      category: "Frontend",
      desc: "Multi-chain portfolio visualizer with live pricing, transaction history, and NFT gallery integration.",
      tech: ["Ethers.js", "React", "Tailwind", "Wagmi"],
    },
    {
      id: "sentinel-security",
      title: "Sentinel Security",
      category: "Backend",
      desc: "Infrastructure monitoring tool for cloud deployments with automated threat detection and alert systems.",
      tech: ["Python", "Docker", "AWS", "PostgreSQL"],
    },
    {
      id: "healthsync-pro",
      title: "HealthSync Pro",
      category: "UI Design",
      desc: "A cross-platform health application integrating wearable data for holistic lifestyle coaching.",
      tech: ["Figma", "React Native"],
    },
    {
      id: "nexus-editor",
      title: "Nexus Code Editor",
      category: "Frontend",
      desc: "Lightweight browser-based IDE with collaborative editing features and real-time compilation.",
      tech: ["Monaco", "WebSockets", "React"],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-16"
      >
        <section className="text-center md:text-left rtl:md:text-right max-w-3xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            {t("projects.hero.title", "My Projects")}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {t(
              "projects.hero.desc",
              "A curated selection of my professional work and personal experiments in the realm of full-stack development and UI design.",
            )}
          </motion.p>
        </section>

        {/* Filter Bar */}
        <motion.section
          variants={itemVariants}
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="rounded-full font-semibold px-6"
            >
              {cat}
            </Button>
          ))}
        </motion.section>

        {/* Grid */}
        <motion.section
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={`/${i18n.language}/projects/${project.id}`}
                className="block h-full group"
              >
                <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                  <div className="h-48 bg-secondary/80 w-full relative overflow-hidden group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                    <span className="text-muted-foreground/30 font-black text-4xl uppercase tracking-widest">
                      {project.title.split(" ")[0]}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {project.category}
                      </Badge>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-2xl line-clamp-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-3 text-sm text-foreground/80 leading-relaxed">
                      {project.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold text-muted-foreground border border-border/50 px-2 py-1 rounded"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={itemVariants}
          className="py-20 mt-20 text-center bg-gradient-to-br from-secondary/50 to-background border border-border rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {t("projects.cta.title", "Want to collaborate?")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg md:text-xl">
              {t(
                "projects.cta.desc",
                "I'm currently available for freelance work and open-source collaborations. Let's build something amazing together.",
              )}
            </p>
            <Link
              href={`/${i18n.language}/contact`}
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
            >
              {t("projects.cta.btn", "Contact Me")}
              <ArrowRight className="ml-3 h-5 w-5 rtl:-scale-x-100" />
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
