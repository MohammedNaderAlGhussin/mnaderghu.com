"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const { t } = useTranslation("common");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const timeline = [
    {
      role: "Senior UI Designer",
      company: "DesignFlow Studio",
      date: "2021 - Present",
      desc: "Leading the design system initiative for Fortune 500 clients. Specialized in rapid prototyping and high-fidelity mockups.",
    },
    {
      role: "Product Developer",
      company: "TechNova Systems",
      date: "2018 - 2021",
      desc: "Engineered responsive front-end components using React and Tailwind CSS. Reduced average page load time by 40%.",
    },
    {
      role: "Frontend Engineer",
      company: "WebSphere Solutions",
      date: "2015 - 2018",
      desc: "Built progressive web applications and optimized legacy monolithic dashboards into React SPAs.",
    },
    {
      role: "Junior Web Developer",
      company: "Digital Horizon",
      date: "2013 - 2015",
      desc: "Maintained enterprise CMS installations and custom WordPress plugin development.",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <section className="text-center mb-16 md:mb-24">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            {t("experience.title", "Experience")}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl"
          >
            {t(
              "experience.desc",
              "A journey of growth, learning, and crafting exceptional digital products over the past decade.",
            )}
          </motion.p>
        </section>

        {/* Timeline */}
        <div className="relative border-l-2 md:border-l-0 md:mx-auto md:w-full max-w-5xl border-primary/20 rtl:border-r-2 rtl:border-l-0">
          {/* Middle Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 rtl:translate-x-1/2" />

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row justify-between items-center w-full mb-12 lg:mb-16 
                  ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 items-center justify-center shadow-[0_0_15px_rgba(0,194,255,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Placeholder for center alignment */}
                <div className="hidden md:block w-5/12" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-6 md:pl-0 rtl:pr-6 rtl:md:pr-0 rtl:pl-0">
                  <Card
                    className={`relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg
                    ${!isEven ? "md:text-left rtl:md:text-right md:mr-6 rtl:md:mr-0 rtl:md:ml-6" : "md:text-right rtl:md:text-left md:ml-6 rtl:md:ml-0 rtl:md:mr-6"}
                  `}
                  >
                    {/* Mobile Dot */}
                    <div className="absolute top-6 -left-[28px] rtl:left-auto rtl:-right-[28px] md:hidden w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,194,255,0.5)] border-2 border-background" />

                    <CardHeader className="pb-3 border-b border-border/30">
                      <Badge
                        variant="outline"
                        className={`w-fit bg-background text-primary tracking-widest uppercase mb-3 ${!isEven ? "mr-auto rtl:ml-auto rtl:mr-0" : "ml-auto rtl:mr-auto rtl:ml-0 md:mr-0 rtl:md:ml-0"}`}
                      >
                        {item.date}
                      </Badge>
                      <CardTitle className="text-2xl font-bold">
                        {item.role}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary">
                        {item.company}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
