"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypewriterRotating } from "@/components/ui/aceternity/typewriter-rotating";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles";

export default function Home() {
  const { t, i18n } = useTranslation("common");

  const roles = [
    String(t("home.role.frontend", "Front-End Engineer")),
    String(t("home.role.fullstack", "Full-Stack Developer")),
    String(t("home.role.software", "Software Engineer")),
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <FloatingParticles />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-4">
              <TextGenerateEffect
                words={String(t("home.title", "Nader"))}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter text-foreground mb-4 font-heading"
              />
            </div>

            <div className="h-20 md:h-32 flex items-center mb-8">
              <TypewriterRotating
                words={roles}
                className="text-3xl sm:text-4xl md:text-6xl font-black text-primary font-heading whitespace-nowrap"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-body"
            >
              {String(
                t(
                  "home.heroText",
                  "Crafting robust digital experiences with modern web technologies. From scalable architectures to pixel-perfect interfaces.",
                ),
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={`/${i18n.language}/projects`}
                className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-primary px-10 text-sm md:text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
              >
                {String(t("home.cta.projects", "View Projects"))}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180 rtl:ml-0 rtl:mr-2" />
              </Link>
              <Link
                href={`/${i18n.language}/contact`}
                className="inline-flex h-12 md:h-14 items-center justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm px-10 text-sm md:text-base font-bold shadow-sm transition-all hover:bg-secondary hover:text-foreground hover:scale-105"
              >
                {String(t("home.cta.contact", "Get in Touch"))}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="relative z-10 border-y border-border/10 bg-card/30 backdrop-blur-md py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rtl:gap-x-12 lg:divide-x rtl:lg:divide-x-reverse divide-border/20 text-center lg:text-left rtl:lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-2 group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
                {String(t("home.stats.experience.val", "5+"))}
              </div>
              <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
                {String(t("home.stats.experience", "Years of Experience"))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-2 group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
                {String(t("home.stats.projects.val", "40+"))}
              </div>
              <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
                {String(t("home.stats.projects", "Projects Built"))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2 group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
                {String(t("home.stats.clients.val", "25+"))}
              </div>
              <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
                {String(t("home.stats.clients", "Happy Clients"))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
