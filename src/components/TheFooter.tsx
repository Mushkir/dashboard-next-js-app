"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { social } from "@/utils/social";
import { SocialInfo } from "@/interface/social-info";
import TheLinkedIn from "./icons/TheLinkedIn";
import TheInstagram from "./icons/TheInstagram";
import TheWhatsApp from "./icons/TheWhatsApp";
import { TheCall } from "./icons/TheCall";
import { useTheme } from "next-themes";
import { THEME } from "@/constants/theme";
import TheGitHub from "./icons/TheGitHub";

const TheFooter = () => {
  const [rendered, setRendered] = useState(false);

  const { theme } = useTheme();

  const getIconSvg = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <TheLinkedIn />;

      case "instagram":
        return <TheInstagram />;

      case "whatsapp":
        return <TheWhatsApp />;

      case "call":
        return <TheCall />;

      case "github":
        return <TheGitHub />;
    }
  };

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-[99] p-5 ${
        rendered && theme == THEME.DARK ? "bg-black" : "bg-slate-200"
      }`}
    >
      <div className="container mx-auto text-center">
        <span className=" text-center block text-xl font-semibold">
          Designed by{" "}
          <Link
            href={"https://mushkir-portfolio-react.vercel.app/"}
            target="_blank"
            className="underline hover:no-underline translate-full"
          >
            Mohamed Mushkir
          </Link>{" "}
          | {new Date().getFullYear()}
        </span>

        <div className=" flex items-center justify-center mt-4 gap-x-3">
          {social.map((detail: SocialInfo) => {
            // console.log(detail.icon);

            return (
              <Link
                href={`${detail.url}`}
                target="_blank"
                className="text-2xl hover:-translate-y-1 cursor-pointer transition-all"
                title={detail.name}
                key={detail.id}
              >
                {getIconSvg(detail.icon)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
