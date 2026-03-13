"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="flex flex-col min-h-full py-10 md:py-20 lg:py-28">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center container mx-auto px-4 lg:px-8 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6">
            {t("home.title", "Nader")} <br className="hidden md:block" />
            <span className="text-primary">
              {t("home.role", "Full-Stack Engineer")}
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            {t(
              "home.heroText",
              "Crafting robust digital experiences with modern web technologies. From scalable architectures to pixel-perfect interfaces.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${i18n.language}/projects`}
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-primary px-8 text-sm md:text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {t("home.cta.projects", "View Projects")}
              <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180 rtl:ml-0 rtl:mr-2" />
            </Link>
            <Link
              href={`/${i18n.language}/contact`}
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-sm md:text-base font-medium shadow-sm transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t("home.cta.contact", "Get in Touch")}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Highlights Strip */}
      <section className="border-y border-border bg-card shadow-sm py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rtl:gap-x-8 lg:divide-x rtl:lg:divide-x-reverse divide-border text-center lg:text-left rtl:lg:text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start rtl:lg:items-end"
            >
              <span className="text-5xl md:text-6xl font-black text-primary mb-2">
                5+
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {t("home.stats.experience", "Years of Experience")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center lg:items-center rtl:lg:items-center"
            >
              <span className="text-5xl md:text-6xl font-black text-primary mb-2">
                40+
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {t("home.stats.projects", "Projects Built")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center lg:items-end rtl:lg:items-start"
            >
              <span className="text-5xl md:text-6xl font-black text-primary mb-2">
                25+
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {t("home.stats.clients", "Happy Clients")}
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
