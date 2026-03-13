"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle, Info, Terminal } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function SingleProject({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { t } = useTranslation("common");
  const resolvedParams = React.use(params);
  const { id, locale } = resolvedParams;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const defaultTitle = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title = String(t(`projects.${id}.title`, defaultTitle));

  const stats = [
    { label: String(t("project.stats.time", "Timeline")), value: "3 Months" },
    { label: String(t("project.stats.role", "My Role")), value: "Lead dev" },
    {
      label: String(t("project.stats.client", "Client")),
      value: "Fortune 500",
    },
    { label: String(t("project.stats.tech", "Stack")), value: "Modern Web" },
  ];

  return (
    <div
      ref={containerRef}
      className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-all text-sm font-black uppercase tracking-[0.2em] mb-8 group"
        >
          <ArrowLeft className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0 rtl:-scale-x-100 group-hover:-translate-x-2 transition-transform rtl:group-hover:translate-x-2" />
          {String(t("project.back", "Back to Projects"))}
        </Link>

        {/* Header */}
        <header className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-foreground font-heading lowercase tracking-tighter"
          >
            {title}
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            <p className="text-primary font-black text-xl uppercase tracking-widest font-heading">
              {String(t("project.completed", "Case Study / 2024"))}
            </p>
            <div className="h-px w-12 bg-border" />
            <Badge
              variant="outline"
              className="px-4 py-1 rounded-full border-primary/30 text-primary font-bold"
            >
              {id.includes("dashboard") ? "Analytics" : "Internal App"}
            </Badge>
          </motion.div>
        </header>

        {/* Parallax Feature Image */}
        <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative border border-border/20 bg-secondary/20">
          <motion.div
            style={{ y, scale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-foreground/[0.03] font-black text-[15rem] uppercase tracking-tighter select-none rotate-6">
              {title.split(" ")[0]}
            </span>
            <div className="absolute inset-0 bg-primary/5" />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
        </div>

        {/* Project Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-lg font-bold text-foreground font-body">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-20">
            {/* Overview */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black font-heading flex items-center gap-4">
                <Info className="text-primary h-8 w-8" />
                {String(t("project.overview.title", "Project Overview"))}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-body">
                {String(
                  t(
                    `projects.${id}.overview.desc`,
                    String(
                      t(
                        "project.overview.desc",
                        "A comprehensive redesign of a high-traffic analytics platform, focusing on user experience, performance optimization, and modern aesthetic principles.",
                      ),
                    ),
                  ),
                )}
              </p>
            </section>

            {/* Key Features */}
            <section className="space-y-12">
              <h2 className="text-3xl font-black font-heading flex items-center gap-4">
                <CheckCircle className="text-primary h-8 w-8" />
                {String(t("project.features.title", "Key Features"))}
              </h2>
              <div className="space-y-10">
                {[1, 2, 3].map((f) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: f * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="mt-1.5 p-1 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-black text-2xl text-foreground font-heading uppercase tracking-tight">
                        {String(
                          t(`project.features.${f}.title`, `Feature ${f}`),
                        )}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-body">
                        {String(
                          t(
                            `project.features.${f}.desc`,
                            "Integrated architecture for seamless user experience across all digital vertical touchpoints.",
                          ),
                        )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Tech Details */}
          <aside className="space-y-10">
            <section className="space-y-8 bg-secondary/10 rounded-[2rem] p-8 border border-border/10">
              <h2 className="text-xl font-black font-heading flex items-center gap-3 uppercase tracking-widest text-primary">
                <Terminal className="h-6 w-6" />
                {String(t("project.tech.title", "Stack"))}
              </h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Motion", "Tailwind"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-4 py-1.5 rounded-lg bg-background border border-border/50 font-bold text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="p-8 border border-border/10 rounded-[2rem] space-y-6">
              <p className="text-muted-foreground italic font-body text-lg leading-relaxed">
                &quot;
                {String(
                  t(
                    "project.tech.quote",
                    "Scaling this platform required a radical approach to state management.",
                  ),
                )}
                &quot;
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
