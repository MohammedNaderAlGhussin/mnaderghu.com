"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Menu, Terminal } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { i18nConfig } from "@/i18nConfig";
import { motion } from "framer-motion";

export function Navbar() {
  const { t, i18n } = useTranslation("common");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: String(t("nav.home", "Home")) },
    { href: "/about", label: String(t("nav.about", "About")) },
    { href: "/skills", label: String(t("nav.skills", "Skills")) },
    { href: "/projects", label: String(t("nav.projects", "Projects")) },
    { href: "/experience", label: String(t("nav.experience", "Experience")) },
    { href: "/contact", label: String(t("nav.contact", "Contact")) },
  ];

  const getHref = (path: string) => {
    return `/${i18n.language}${path === "/" ? "" : path}`;
  };

  const isActive = (path: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const isDefaultUnprefixed = !i18nConfig.locales.includes(segments[0]);
    const currentLoc = isDefaultUnprefixed
      ? i18nConfig.defaultLocale
      : segments[0];

    // strip locale and compare
    const strippedPath = isDefaultUnprefixed
      ? pathname
      : pathname.replace(`/${currentLoc}`, "");
    const cleanPath = strippedPath === "" ? "/" : strippedPath;

    return cleanPath === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-primary/10 shadow-lg py-2"
          : "bg-transparent border-b border-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <Link
          href={getHref("/")}
          className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer group"
        >
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Terminal className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            {String(t("home.title", "Nader"))}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-primary relative py-2",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
          <div className="flex items-center space-x-3 rtl:space-x-reverse ml-6 rtl:ml-0 rtl:mr-6 border-l rtl:border-l-0 rtl:border-r border-border/50 pl-6 rtl:pl-0 rtl:pr-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
          <ThemeToggle />
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger className="hover:bg-accent hover:text-accent-foreground h-9 w-9 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">
                {String(t("nav.toggle", "Toggle Menu"))}
              </span>
            </SheetTrigger>
            <SheetContent
              side={i18n.language === "ar" ? "right" : "left"}
              className="flex flex-col"
            >
              <SheetTitle className="sr-only">
                {String(t("nav.menu.title", "Navigation Menu"))}
              </SheetTitle>
              <SheetDescription className="sr-only">
                {String(t("nav.menu.desc", "Links to navigate the portfolio"))}
              </SheetDescription>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mt-6 mb-8">
                <Terminal className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg tracking-tight">
                  {String(t("home.title", "Nader"))}
                </span>
              </div>
              <div className="flex flex-col space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={getHref(link.href)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
