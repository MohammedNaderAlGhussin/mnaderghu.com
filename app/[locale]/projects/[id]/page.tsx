"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Info, Terminal } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function SingleProject({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { t, i18n } = useTranslation("common");
  const resolvedParams = React.use(params);
  const { id, locale } = resolvedParams;

  const title = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0 rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1" />
          {t("project.back", "Back to Projects")}
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
            {title}
          </h1>
          <p className="text-primary font-medium text-lg">
            {t(
              "project.completed",
              "Project Completed: October 2023 • Case Study",
            )}
          </p>
        </header>

        {/* Feature Image */}
        <div className="w-full aspect-video bg-secondary rounded-2xl overflow-hidden shadow-inner relative group flex items-center justify-center border border-border">
          <span className="text-foreground/5 font-black text-6xl uppercase tracking-widest">
            {title.split(" ")[0]}
          </span>
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Info className="text-primary h-6 w-6" />
            {t("project.overview.title", "Project Overview")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(
              "project.overview.desc",
              "A comprehensive redesign of a high-traffic analytics platform, focusing on user experience, performance optimization, and modern aesthetic principles. The challenge was to transform complex data sets into intuitive, actionable insights for enterprise-level decision makers.",
            )}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle className="text-primary h-6 w-6" />
            {t("project.features.title", "Key Features")}
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {t("project.features.1.title", "Real-time Data Streaming")}
                </h3>
                <p className="text-muted-foreground mt-1 text-base">
                  {t(
                    "project.features.1.desc",
                    "Integrated WebSocket architecture for sub-second data updates across all widgets.",
                  )}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {t("project.features.2.title", "Customizable Widget Engine")}
                </h3>
                <p className="text-muted-foreground mt-1 text-base">
                  {t(
                    "project.features.2.desc",
                    "Drag-and-drop interface allowing users to personalize their reporting view.",
                  )}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {t("project.features.3.title", "Advanced Filtering System")}
                </h3>
                <p className="text-muted-foreground mt-1 text-base">
                  {t(
                    "project.features.3.desc",
                    "Complex multi-parameter query builder with natural language processing capabilities.",
                  )}
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Technical Details */}
        <section className="space-y-5 bg-card/60 rounded-3xl p-8 border border-border shadow-sm">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Terminal className="text-primary h-6 w-6" />
            {t("project.tech.title", "Technical Details")}
          </h2>
          <blockquote className="text-muted-foreground italic text-lg lg:text-xl leading-relaxed border-l-4 border-primary pl-6 rtl:pl-0 rtl:border-l-0 rtl:pr-6 rtl:border-r-4 py-3 my-6 bg-secondary/20 rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none">
            "
            {t(
              "project.tech.quote",
              "The main technical hurdle was managing state for thousands of concurrent data points. We implemented a custom Redux middleware and memoized React components to ensure 60FPS performance even during heavy data spikes.",
            )}
            "
          </blockquote>

          <div className="pt-4 border-t border-border/50">
            <h3 className="font-bold mb-4 text-foreground tracking-wide uppercase text-sm">
              {t("project.tech.used", "Technologies Used")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                React
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                Redux
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                WebSockets
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                Tailwind CSS
              </Badge>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
