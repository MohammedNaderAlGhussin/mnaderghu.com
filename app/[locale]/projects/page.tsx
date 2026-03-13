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
import { HoverEffect } from "@/components/ui/aceternity/hover-effect";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { t, i18n } = useTranslation("common");
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Frontend", "Backend", "Full-Stack", "UI Design"];

  const projects = [
    {
      id: "ai-analytics-dashboard",
      title: t(
        "projects.ai-analytics-dashboard.title",
        "AI Analytics Dashboard",
      ),
      category: "Full-Stack",
      description: t(
        "projects.ai-analytics-dashboard.desc",
        "A real-time predictive analytics dashboard for SaaS platforms using OpenAI APIs and dynamic data streaming.",
      ),
      link: `/${i18n.language}/projects/ai-analytics-dashboard`,
      tech: ["React", "Next.js", "Redux", "Tailwind"],
    },
    {
      id: "ecommerce-engine",
      title: t("projects.ecommerce-engine.title", "E-commerce Engine"),
      category: "Full-Stack",
      description: t(
        "projects.ecommerce-engine.desc",
        "High-performance storefront with headless CMS integration, global state management, and Stripe payments.",
      ),
      link: `/${i18n.language}/projects/ecommerce-engine`,
      tech: ["Next.js", "Stripe", "Sanity", "Zustand"],
    },
    {
      id: "web3-wallet",
      title: t("projects.web3-wallet.title", "Web3 Wallet Tracker"),
      category: "Frontend",
      description: t(
        "projects.web3-wallet.desc",
        "Multi-chain portfolio visualizer with live pricing, transaction history, and NFT gallery integration.",
      ),
      link: `/${i18n.language}/projects/web3-wallet`,
      tech: ["Ethers.js", "React", "Tailwind", "Wagmi"],
    },
    {
      id: "sentinel-security",
      title: t("projects.sentinel-security.title", "Sentinel Security"),
      category: "Backend",
      description: t(
        "projects.sentinel-security.desc",
        "Infrastructure monitoring tool for cloud deployments with automated threat detection and alert systems.",
      ),
      link: `/${i18n.language}/projects/sentinel-security`,
      tech: ["Python", "Docker", "AWS", "PostgreSQL"],
    },
    {
      id: "healthsync-pro",
      title: t("projects.healthsync-pro.title", "HealthSync Pro"),
      category: "UI Design",
      description: t(
        "projects.healthsync-pro.desc",
        "A cross-platform health application integrating wearable data for holistic lifestyle coaching.",
      ),
      link: `/${i18n.language}/projects/healthsync-pro`,
      tech: ["Figma", "React Native"],
    },
    {
      id: "nexus-editor",
      title: t("projects.nexus-editor.title", "Nexus Code Editor"),
      category: "Frontend",
      description: t(
        "projects.nexus-editor.desc",
        "Lightweight browser-based IDE with collaborative editing features and real-time compilation.",
      ),
      link: `/${i18n.language}/projects/nexus-editor`,
      tech: ["Monaco", "WebSockets", "React"],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
            {t("projects.hero.title", "My Projects")}
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body"
          >
            {t(
              "projects.hero.desc",
              "A curated selection of my professional work and personal experiments in the realm of full-stack development and UI design.",
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
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full font-black px-8 h-12 transition-all active:scale-95 uppercase tracking-widest text-xs",
                filter === cat
                  ? "shadow-lg shadow-primary/20"
                  : "border-border/50 text-muted-foreground",
              )}
            >
              {t(`projects.cat.${cat.toLowerCase()}`, cat)}
            </Button>
          ))}
        </motion.section>

        {/* Grid with HoverEffect */}
        <section className="relative z-10">
          <HoverEffect
            items={filteredProjects}
            renderItem={(item) => (
              <Link href={item.link} className="block h-full group">
                <Card className="h-full flex flex-col bg-card/60 backdrop-blur-md border-border/10 group-hover:border-primary/30 transition-all duration-500 overflow-hidden relative rounded-[2rem]">
                  <div className="h-64 bg-secondary/20 w-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-foreground/[0.03] font-black text-8xl uppercase tracking-tighter transform -rotate-12 select-none group-hover:scale-125 transition-transform duration-700">
                      {item.title.split(" ")[0]}
                    </span>
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  </div>

                  <CardHeader className="flex-1 relative z-20 -mt-16 mx-6 bg-card backdrop-blur-xl border border-border/10 rounded-[1.5rem] p-8 group-hover:border-primary/20 transition-all shadow-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20 font-black px-4 py-1 text-[10px] uppercase tracking-widest rounded-lg"
                      >
                        {t(
                          `projects.cat.${item.category.toLowerCase().replace("-", "")}`,
                          item.category,
                        )}
                      </Badge>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors hover:scale-125" />
                    </div>
                    <CardTitle className="text-3xl font-black line-clamp-1 group-hover:text-primary transition-colors font-heading tracking-tight">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-6 text-base text-muted-foreground leading-relaxed font-body">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-8 relative z-20">
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/5">
                      {item.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-[9px] uppercase font-black text-muted-foreground/50 border border-border/10 px-3 py-1 rounded-full bg-secondary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
              {t("projects.cta.title", "Ready to collaborate?")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-xl md:text-2xl font-body leading-relaxed">
              {t(
                "projects.cta.desc",
                "I'm currently available for freelance work and open-source collaborations. Let's build something amazing together.",
              )}
            </p>
            <Link
              href={`/${i18n.language}/contact`}
              className="inline-flex h-20 items-center justify-center rounded-3xl bg-primary px-16 text-xl font-black text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 uppercase tracking-widest"
            >
              {t("projects.cta.btn", "Get in touch")}
              <ArrowRight className="ml-4 h-6 w-6 rtl:rotate-180" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
