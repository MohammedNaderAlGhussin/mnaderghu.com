"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.language === "ar";

  const timeline = [
    {
      role: t("experience.1.role", "Senior UI Designer"),
      company: t("experience.1.company", "DesignFlow Studio"),
      date: t("experience.1.date", "2021 - Present"),
      desc: t(
        "experience.1.desc",
        "Leading the design system initiative for Fortune 500 clients. Specialized in rapid prototyping and high-fidelity mockups.",
      ),
    },
    {
      role: t("experience.2.role", "Product Developer"),
      company: t("experience.2.company", "TechNova Systems"),
      date: t("experience.2.date", "2018 - 2021"),
      desc: t(
        "experience.2.desc",
        "Engineered responsive front-end components using React and Tailwind CSS. Reduced average page load time by 40%.",
      ),
    },
    {
      role: t("experience.3.role", "Frontend Engineer"),
      company: t("experience.3.company", "WebSphere Solutions"),
      date: t("experience.3.date", "2015 - 2018"),
      desc: t(
        "experience.3.desc",
        "Built progressive web applications and optimized legacy monolithic dashboards into React SPAs.",
      ),
    },
    {
      role: t("experience.4.role", "Junior Web Developer"),
      company: t("experience.4.company", "Digital Horizon"),
      date: t("experience.4.date", "2013 - 2015"),
      desc: t(
        "experience.4.desc",
        "Maintained enterprise CMS installations and custom WordPress plugin development.",
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-16 md:mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-black mb-6 leading-tight font-heading"
          >
            {t("experience.title", "Experience")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground mx-auto max-w-3xl font-body"
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/30 via-primary/10 to-transparent -translate-x-1/2 rtl:translate-x-1/2" />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row justify-between items-center w-full mb-16 lg:mb-24
                  ${isLeft ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot with Pulse */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,194,255,1)]" 
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
                </div>

                {/* Placeholder for center alignment */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card with Scroll Animation */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? (isRtl ? -80 : 80) : (isRtl ? 80 : -80) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-[45%] pl-8 md:pl-0 rtl:pr-8 rtl:md:pr-0 rtl:pl-0"
                >
                  <Card
                    className={`relative bg-card/40 backdrop-blur-xl border-border/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group rounded-3xl p-1
                    ${!isLeft ? "md:text-left rtl:md:text-right" : "md:text-right rtl:md:text-left"}
                  `}
                  >
                    <div className="p-6">
                      {/* Mobile Dot */}
                      <div className="absolute top-10 -left-[35px] rtl:left-auto rtl:-right-[35px] md:hidden w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(0,194,255,0.6)] border-4 border-background" />

                      <div className={`flex flex-col mb-4 ${!isLeft ? "items-start" : "items-end"}`}>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20 font-black uppercase tracking-widest px-4 py-1 mb-4"
                        >
                          {item.date}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors font-heading">
                          {item.role}
                        </h3>
                        <p className="text-xl font-bold text-primary/80 font-body">
                          {item.company}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-border/10">
                        <p className="text-muted-foreground leading-relaxed text-lg font-body">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
