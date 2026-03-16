"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  Monitor,
  Server,
  Wrench,
  Code2,
  ArrowRight,
  Cpu,
  Globe,
  Zap,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  NextjsOriginal,
  ReduxOriginal,
  TailwindcssOriginal,
  BootstrapOriginal,
  SassOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  GitOriginal,
  FigmaOriginal,
  VercelOriginal,
  BashOriginal,
} from "devicons-react";

// For missing icons, common fallbacks
const SkillIcon = ({ name, className }: { name: string; className?: string }) => {
  const size = 18;
  const icons: { [key: string]: React.ReactNode } = {
    JavaScript: <JavascriptOriginal size={size} />,
    TypeScript: <TypescriptOriginal size={size} />,
    React: <ReactOriginal size={size} />,
    "Next.js": <NextjsOriginal size={size} className="bg-white rounded-full p-0.5" />,
    Redux: <ReduxOriginal size={size} />,
    "TanStack Query": <Globe size={size} className="text-[#FF4154]" />,
    "Tailwind CSS": <TailwindcssOriginal size={size} />,
    Bootstrap: <BootstrapOriginal size={size} />,
    Sass: <SassOriginal size={size} />,
    "shadcn/ui": <Zap size={size} className="text-foreground" />,
    MUI: <Cpu size={size} className="text-[#007FFF]" />,
    "Responsive Design": <Monitor size={size} className="text-primary" />,
    "Node.js": <NodejsOriginal size={size} />,
    "Express.js": <ExpressOriginal size={size} className="bg-white rounded-md p-0.5" />,
    MongoDB: <MongodbOriginal size={size} />,
    PostgreSQL: <PostgresqlOriginal size={size} />,
    Supabase: <Zap size={size} className="text-[#3ECF8E]" />,
    "Prisma ORM": <PrismaOriginal size={size} />,
    "Server Actions": <Zap size={size} className="text-yellow-500" />,
    "REST API": <ShieldCheck size={size} className="text-blue-400" />,
    "Web Security": <ShieldCheck size={size} className="text-red-500" />,
    Git: <GitOriginal size={size} />,
    GitHub: <Globe size={size} className="text-foreground" />,
    Linux: <Terminal size={size} className="text-foreground" />,
    Figma: <FigmaOriginal size={size} />,
    "Adobe XD": <Cpu size={size} className="text-[#FF61F6]" />,
    Postman: <Zap size={size} className="text-[#FF6C37]" />,
    Vercel: <VercelOriginal size={size} className="bg-white rounded-full p-0.5" />,
    Netlify: <Globe size={size} className="text-[#00ADBB]" />,
    Railway: <Zap size={size} className="text-[#0B0D0E]" />,
    Cursor: <Terminal size={size} className="text-primary" />,
    "Lovable AI": <Zap size={size} className="text-pink-500" />,
    Antigravity: <Cpu size={size} className="text-cyan-400" />,
    Claude: <Terminal size={size} className="text-[#D97757]" />,
    "Bash Scripting": <BashOriginal size={size} />,
  };

  return <div className={className}>{icons[name] || <Code2 size={size} />}</div>;
};

export default function Skills() {
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.dir() === "rtl";
  const shouldReduceMotion = useReducedMotion();

  const skillCategories = [
    {
      id: "frontend",
      title: String(t("skills.frontend.title")),
      subtitle: String(t("skills.frontend.desc")),
      icon: <Monitor className="w-6 h-6 text-cyan-400" />,
      skills: [
        "JavaScript", "TypeScript", "React", "Next.js", "Redux",
        "TanStack Query", "Tailwind CSS", "Bootstrap", "Sass",
        "shadcn/ui", "MUI", "Responsive Design",
      ],
    },
    {
      id: "backend",
      title: String(t("skills.backend.title")),
      subtitle: String(t("skills.backend.desc")),
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      skills: [
        "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase",
        "Prisma ORM", "Server Actions", "REST API", "Web Security",
      ],
    },
    {
      id: "tools",
      title: String(t("skills.database.title")), // Using .database key for Tools as mapped in common.json
      subtitle: String(t("skills.database.desc")),
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      skills: [
        "Git", "GitHub", "Linux", "Figma", "Adobe XD", "Postman",
        "Vercel", "Netlify", "Railway", "Cursor", "Lovable AI",
        "Antigravity", "Claude",
      ],
    },
    {
      id: "languages",
      title: String(t("skills.devops.title")), // Using .devops key for Languages
      subtitle: String(t("skills.devops.desc")),
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      skills: ["JavaScript", "TypeScript", "Bash Scripting"],
    },
  ];

  const approaches = [1, 2, 3, 4].map((i) => ({
    title: String(t(`skills.approach.${i}.title`)),
    desc: String(t(`skills.approach.${i}.desc`)),
  }));

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header */}
        <section className={`max-w-4xl ${isRtl ? "text-right" : "text-left"}`}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-black mb-8 leading-tight font-heading tracking-tighter"
          >
            {String(t("skills.hero.title", "Skills & Technologies"))}
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body"
          >
            {String(t("skills.hero.desc"))}
          </motion.p>
        </section>

        {/* Skills Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full bg-[#0D1426] border-border/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 rounded-3xl p-8 group flex flex-col hover:-translate-y-1">
                  <div className={`mb-6 ${isRtl ? "self-end" : "self-start"}`}>
                    <div className="p-3 bg-cyan-400/10 rounded-2xl w-fit">
                      {category.icon}
                    </div>
                  </div>
                  <div className={`mb-6 ${isRtl ? "text-right" : "text-left"}`}>
                    <h3 className="text-2xl font-black mb-2 font-heading text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-6 border-t border-white/5 mt-auto">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`flex items-center gap-2 group/skill ${isRtl ? "flex-row-reverse text-right" : "flex-row text-left"}`}
                      >
                        <SkillIcon name={skill} className="shrink-0 transition-transform group-hover/skill:scale-110" />
                        <span className="text-[13px] font-bold text-muted-foreground group-hover/skill:text-foreground transition-colors truncate font-body">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={isRtl ? "text-right" : "text-left"}
          >
            <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight uppercase">
              {String(t("skills.how.title", "How I Work"))}
              <span className="text-primary">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-secondary/10 border border-border/10 hover:border-cyan-400/20 transition-all duration-300 flex flex-col">
                  {/* Top Cyan Border Glow on Hover */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`mb-6 flex ${isRtl ? "justify-end" : "justify-start"}`}>
                    <div className="text-4xl font-black text-primary/20 font-heading">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-black mb-4 group-hover:text-primary transition-colors font-heading ${isRtl ? "text-right" : "text-left"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed font-body ${isRtl ? "text-right" : "text-left"}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-border/10 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-black mb-12 max-w-4xl mx-auto leading-tight font-heading">
            {String(t("skills.cta.title", "Let's build something great together."))}
          </h2>
          <Link
            href={`/${i18n.language}/contact`}
            className="inline-flex h-16 items-center justify-center rounded-2xl bg-primary px-12 text-lg font-black text-primary-foreground shadow-xl transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 uppercase tracking-widest font-body"
          >
            {String(t("skills.cta.btn", "Start a Project"))}
            <ArrowRight className={`ml-4 h-5 w-5 ${isRtl ? "rotate-180" : ""}`} />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
