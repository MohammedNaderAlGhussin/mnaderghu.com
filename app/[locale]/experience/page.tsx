"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.dir() === "rtl";

  const timeline = [
    {
      role: String(t("experience.1.role")),
      company: String(t("experience.1.company")),
      date: String(t("experience.1.date")),
      type: String(t("experience.1.type")),
      desc: String(t("experience.1.desc")),
    },
    {
      role: String(t("experience.2.role")),
      company: String(t("experience.2.company")),
      date: String(t("experience.2.date")),
      type: String(t("experience.2.type")),
      desc: String(t("experience.2.desc")),
      status: String(t("experience.2.status")),
      isActive: true,
    },
    {
      role: String(t("experience.3.role")),
      company: String(t("experience.3.company")),
      date: String(t("experience.3.date")),
      type: String(t("experience.3.type")),
      desc: String(t("experience.3.desc")),
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
            {String(t("experience.title", "Experience"))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground mx-auto max-w-3xl font-body"
          >
            {String(
              t(
                "experience.desc",
                "A journey of growth, learning, and crafting exceptional digital products over the past decade.",
              ),
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
                  initial={{
                    opacity: 0,
                    x: isLeft ? (isRtl ? -80 : 80) : isRtl ? 80 : -80,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-[45%] pl-8 md:pl-0 rtl:pr-8 rtl:md:pr-0 rtl:pl-0"
                >
                  <Card
                    className={`relative bg-card/40 backdrop-blur-xl border-border/10 transition-all duration-500 hover:shadow-2xl group rounded-3xl p-1
                    ${item.isActive ? "border-primary/40 shadow-[0_0_30px_rgba(0,194,255,0.15)] ring-1 ring-primary/20" : "hover:border-primary/30"}
                    ${!isLeft ? "md:text-left rtl:md:text-right" : "md:text-right rtl:md:text-left"}
                  `}
                  >
                    <div className="p-6">
                      {/* Mobile Dot */}
                      <div className="absolute top-10 -left-[35px] rtl:left-auto rtl:-right-[35px] md:hidden w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(0,194,255,0.6)] border-4 border-background" />

                      <div
                        className={`flex flex-col mb-4 ${!isLeft ? "items-start" : "items-end"}`}
                      >
                        <div className={`flex items-center gap-3 mb-4 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/20 font-black uppercase tracking-widest px-4 py-1"
                          >
                            {item.date}
                          </Badge>
                          {item.isActive && (
                            <div className="flex items-center gap-2">
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                              </span>
                              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 font-bold px-2 py-0.5 text-[10px] uppercase tracking-tighter">
                                {item.status}
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        <div className={`flex flex-col ${!isLeft ? "items-start" : "items-end"}`}>
                          <Badge variant="outline" className="mb-2 text-[10px] uppercase font-bold border-primary/20 text-primary/60">
                            {item.type}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors font-heading leading-tight">
                            {item.role}
                          </h3>
                          <p className="text-xl font-bold text-primary/80 font-body mt-1">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/10">
                        <p className={`text-muted-foreground leading-relaxed text-lg font-body ${isRtl ? "text-right" : "text-left"}`}>
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
