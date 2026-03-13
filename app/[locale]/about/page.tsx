"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";

export default function About() {
  const { t } = useTranslation("common");

  const bioText = t(
    "about.bio.text1",
    "With over 8 years of experience in the design industry, I focus on creating intuitive user interfaces and robust front-end architectures. Passionate about minimalism, accessibility, and the intersection of visual art and performance code.",
  );

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Split Hero & Bio */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight font-heading">
              {t("about.hero.title", "Creative Designer & Developer")}
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-black text-primary uppercase tracking-widest font-heading">
              {t("about.bio.title", "Professional Bio")}
            </h2>
            <div className="text-xl text-muted-foreground leading-relaxed font-body">
              <TextGenerateEffect words={bioText} />
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/10 pb-8"
          >
            <h2 className="text-3xl md:text-5xl font-black font-heading">
              {t("about.experience.title", "Work Experience")}
            </h2>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mt-4 md:mt-0 font-body">
              {t("about.experience.label", "The Journey")}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Card className="bg-secondary/10 border-border/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl rounded-3xl overflow-hidden group">
                  <CardHeader className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors font-heading text-foreground">
                          {t(`about.exp${i}.role`, i === 1 ? "Senior UI Designer" : "Product Developer")}
                        </CardTitle>
                        <p className="text-primary text-lg font-bold mt-2 font-body">
                          {t(
                            `about.exp${i}.company`,
                            i === 1 ? "DesignFlow Studio" : "TechNova Systems"
                          )}
                        </p>
                      </div>
                      <Badge variant="secondary" className="w-fit px-6 py-2 bg-primary/10 text-primary border border-primary/20 font-black rounded-xl font-body">
                        {t(`about.exp${i}.date`, i === 1 ? "2021 - Present" : "2018 - 2021")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-0">
                    <p className="text-muted-foreground text-lg leading-relaxed font-body">
                      {t(
                        `about.exp${i}.desc`,
                        i === 1 
                          ? "Leading the design system initiative for Fortune 500 clients. Mentoring junior designers and collaborating with engineering teams to ensure pixel-perfect implementation of complex interactive features."
                          : "Engineered responsive front-end components using React and Tailwind CSS. Reduced average page load time by 40% through code optimization and asset management strategies."
                      )}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/10 pb-8"
          >
            <h2 className="text-3xl md:text-5xl font-black font-heading">
              {t("about.education.title", "Education")}
            </h2>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mt-4 md:mt-0 font-body">
              {t("about.education.label", "Foundation")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-primary/5 border-primary/10 hover:border-primary/30 transition-all duration-500 rounded-3xl p-2 group">
              <div className="bg-card rounded-2xl p-8 transition-colors group-hover:bg-secondary/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-black font-heading text-foreground">
                      {t("about.edu.degree", "Master of Interaction Design")}
                    </CardTitle>
                    <p className="text-primary text-lg font-bold mt-2 font-body">
                      {t("about.edu.school", "Stanford University")}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit px-6 py-2 bg-primary/10 text-primary border border-primary/20 font-black rounded-xl font-body">
                    {t("about.edu.date", "2016 - 2018")}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-body">
                  {t(
                    "about.edu.desc",
                    "Specialized in Human-Computer Interaction and User Psychology. Graduated with honors.",
                  )}
                </p>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
