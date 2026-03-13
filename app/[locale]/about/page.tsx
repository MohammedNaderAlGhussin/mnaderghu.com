"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const { t } = useTranslation("common");

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

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto space-y-24"
      >
        {/* Split Hero & Bio */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {t("about.hero.title", "Creative Designer & Developer")}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              {t("about.bio.title", "Professional Bio")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "about.bio.text1",
                "With over 8 years of experience in the design industry, I focus on creating intuitive user interfaces and robust front-end architectures. Passionate about minimalism, accessibility, and the intersection of visual art and performance code.",
              )}
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section>
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-1 block">
                {t("about.experience.label", "analytics")}
              </span>
              {t("about.experience.title", "Work Experience")}
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        {t("about.exp1.role", "Senior UI Designer")}
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">
                        {t(
                          "about.exp1.company",
                          "DesignFlow Studio • San Francisco",
                        )}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {t("about.exp1.date", "2021 - Present")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(
                      "about.exp1.desc",
                      "Leading the design system initiative for Fortune 500 clients. Mentoring junior designers and collaborating with engineering teams to ensure pixel-perfect implementation of complex interactive features.",
                    )}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        {t("about.exp2.role", "Product Developer")}
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">
                        {t("about.exp2.company", "TechNova Systems • Remote")}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {t("about.exp2.date", "2018 - 2021")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(
                      "about.exp2.desc",
                      "Engineered responsive front-end components using React and Tailwind CSS. Reduced average page load time by 40% through code optimization and asset management strategies.",
                    )}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section>
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-1 block">
                {t("about.education.label", "school")}
              </span>
              {t("about.education.title", "Education")}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">
                      {t("about.edu.degree", "Master of Interaction Design")}
                    </CardTitle>
                    <p className="text-primary font-medium mt-1">
                      {t("about.edu.school", "Stanford University")}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {t("about.edu.date", "2016 - 2018")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(
                    "about.edu.desc",
                    "Specialized in Human-Computer Interaction and User Psychology. Graduated with honors.",
                  )}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
