"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Loader2,
  Send,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DotBackground } from "@/components/ui/aceternity/dot-background";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useTranslation("common");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DotBackground className="opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-7xl mx-auto space-y-24"
        >
          <section className="text-center space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-heading tracking-tighter"
            >
              {String(t("contact.title", "Let's Talk"))}
              <span className="text-primary">.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mx-auto max-w-3xl leading-relaxed font-body"
            >
              {String(
                t(
                  "contact.subtitle",
                  "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.",
                ),
              )}
            </motion.p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            {/* Info Column */}
            <section className="space-y-12 order-2 lg:order-1">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-black uppercase tracking-[0.2em] text-primary font-heading"
              >
                {String(t("contact.info.title", "Contact Information"))}
              </motion.h2>

              <div className="space-y-12">
                {[
                  { icon: MapPin, label: "Location", val: "Gaza, Palestine" },
                  { icon: Mail, label: "Email", val: "hello@mohammed.dev" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-4 bg-primary/10 rounded-[1.5rem] border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">
                        {String(
                          t(
                            `contact.info.${item.label.toLowerCase()}`,
                            item.label,
                          ),
                        )}
                      </h3>
                      <p className="text-xl md:text-2xl font-bold font-body">
                        {item.val}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="pt-12 space-y-6">
                <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                  {String(t("contact.social.title", "Digital Presence"))}
                </h3>
                <div className="flex gap-4">
                  {[Linkedin, Github, Twitter].map((Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="p-5 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-primary/5 border-primary/10 shadow-2xl rounded-[2rem] overflow-hidden">
                  <CardContent className="p-10">
                    <p className="text-xl font-medium leading-relaxed font-body">
                      {String(
                        t(
                          "contact.availability",
                          "I'm currently looking for new full-time roles or freelance projects. I usually respond within 12-24 hours. Let's build something amazing together!",
                        ),
                      )}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Form Column */}
            <section className="order-1 lg:order-2">
              <motion.div variants={itemVariants}>
                <Card className="bg-card/40 backdrop-blur-2xl border-border/10 shadow-2xl rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-primary overflow-hidden opacity-10 pointer-events-none">
                    <Send className="h-40 w-40 -rotate-12 translate-x-10 -translate-y-10" />
                  </div>

                  <CardContent className="p-0">
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <div className="space-y-3">
                        <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">
                          {String(t("contact.form.name", "Your Name"))}
                        </label>
                        <Input
                          placeholder="John Doe"
                          className="h-16 bg-background/50 border-border/50 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg px-6 rounded-2xl font-body"
                          {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-destructive font-bold">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">
                          {String(t("contact.form.email", "Email Address"))}
                        </label>
                        <Input
                          type="email"
                          placeholder="hello@example.com"
                          className="h-16 bg-background/50 border-border/50 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg px-6 rounded-2xl font-body"
                          {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive font-bold">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">
                          {String(t("contact.form.message", "Message"))}
                        </label>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[200px] bg-background/50 border-border/50 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg p-6 rounded-2xl font-body resize-none"
                          {...form.register("message")}
                        />
                        {form.formState.errors.message && (
                          <p className="text-sm text-destructive font-bold">
                            {form.formState.errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-16 text-lg font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative group overflow-hidden"
                        disabled={isSubmitting}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="submitting"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center justify-center"
                            >
                              <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                              {String(t("contact.form.sending", "Processing"))}
                            </motion.div>
                          ) : isSuccess ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ type: "spring" }}
                              className="flex items-center justify-center text-green-400"
                            >
                              <CheckCircle className="mr-3 h-6 w-6" />
                              {String(t("contact.form.sent", "Success!"))}
                            </motion.div>
                          ) : (
                            <motion.div
                              key="idle"
                              className="flex items-center justify-center group-hover:scale-105 transition-transform"
                            >
                              {String(t("contact.form.submit", "Send Message"))}
                              <Send className="ml-3 h-5 w-5 rtl:-scale-x-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
