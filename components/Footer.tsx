"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="w-full py-8 text-muted-foreground border-t border-border mt-auto bg-secondary/50 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-sm text-center md:text-left rtl:md:text-right">
          &copy; {new Date().getFullYear()} {String(t("home.title", "Nader"))}.{" "}
          {String(
            t(
              "footer.rights",
              "Designed and engineered for excellence. All rights reserved.",
            ),
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 w-full md:w-auto">
          <Link
            href="https://github.com/NaderAlghussin"
            className="hover:text-primary transition-colors"
          >
            <span className="sr-only">
              {String(t("social.github", "GitHub"))}
            </span>
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohammednader-alghussin"
            className="hover:text-primary transition-colors"
          >
            <span className="sr-only">
              {String(t("social.linkedin", "LinkedIn"))}
            </span>
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:hello@nader.dev"
            className="hover:text-primary transition-colors"
          >
            <span className="sr-only">
              {String(t("contact.info.email", "Email"))}
            </span>
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
