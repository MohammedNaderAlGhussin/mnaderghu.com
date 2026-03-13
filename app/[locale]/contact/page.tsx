"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
    // simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            {t("contact.title", "Get in Touch")}
          </h1>
          <p className="text-lg md:text-xl md:text-2xl text-muted-foreground mx-auto max-w-3xl leading-relaxed">
            {t(
              "contact.subtitle",
              "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.",
            )}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Info Column */}
          <section className="space-y-10 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold border-b border-border/50 pb-4">
              {t("contact.info.title", "Contact Information")}
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-2xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {t("contact.info.location", "Location")}
                  </h3>
                  <p className="text-xl font-medium">Gaza, Palestine</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-2xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {t("contact.info.email", "Email")}
                  </h3>
                  <p className="text-xl font-medium">hello@nader.dev</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t("contact.social.title", "Follow me on social media")}
              </h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="p-4 bg-secondary rounded-2xl hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all group"
                >
                  <Linkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
                </Link>
                <Link
                  href="#"
                  className="p-4 bg-secondary rounded-2xl hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all group"
                >
                  <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
                </Link>
                <Link
                  href="#"
                  className="p-4 bg-secondary rounded-2xl hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all group"
                >
                  <Twitter className="h-6 w-6 transition-transform group-hover:scale-110" />
                </Link>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-none">
              <CardContent className="p-6">
                <p className="text-lg font-medium text-foreground">
                  {t(
                    "contact.availability",
                    "I'm currently looking for new full-time roles or freelance projects. I usually respond within 12-24 hours. Let's build something amazing together!",
                  )}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Form Column */}
          <section className="order-1 lg:order-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl overflow-hidden p-2 md:p-6 lg:p-8 rounded-[2rem]">
              <CardContent className="pt-6">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.name", "Your Name")}
                    </label>
                    <Input
                      id="name"
                      placeholder={t(
                        "contact.form.name.placeholder",
                        "John Doe",
                      )}
                      className="h-14 bg-secondary/30 border-secondary focus-visible:ring-primary focus-visible:bg-background transition-all text-base px-5 rounded-xl"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.email", "Email Address")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t(
                        "contact.form.email.placeholder",
                        "john@example.com",
                      )}
                      className="h-14 bg-secondary/30 border-secondary focus-visible:ring-primary focus-visible:bg-background transition-all text-base px-5 rounded-xl"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.message", "Message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t(
                        "contact.form.message.placeholder",
                        "How can I help you?",
                      )}
                      className="min-h-[160px] bg-secondary/30 border-secondary focus-visible:ring-primary focus-visible:bg-background transition-all text-base px-5 py-4 resize-none rounded-xl"
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-14 text-base font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t("contact.form.sending", "Sending...")}
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        {t("contact.form.sent", "Message Sent!")}
                      </>
                    ) : (
                      <>
                        {t("contact.form.submit", "Send Message")}
                        <Send className="ml-2 h-5 w-5 rtl:-scale-x-100 group-hover:-mt-1 group-hover:ml-3 transition-all" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
