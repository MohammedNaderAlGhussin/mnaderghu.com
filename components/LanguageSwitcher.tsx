"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18nConfig } from "@/i18nConfig";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLocale = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale || currentLocale === "en") {
      const pathSegments = currentPathname.split("/");
      if (pathSegments[1] === currentLocale) {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        );
      } else {
        router.push(`/${newLocale}${currentPathname}`);
      }
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-semibold uppercase w-12 px-2 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 h-9">
        {currentLocale}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          English (EN)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("de")}>
          Deutsch (DE)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("ar")}>
          العربية (AR)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
