import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>🌝 & 💰</span>,
  logoLink: "/",
  project: {
    link: "https://github.com/moon-and-rich/cant-back",
  },
  footer: {
    text: "moon-and-rich",
  },
  search: {
    placeholder: "검색",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – moon-and-rich",
      };
    }
  },
};

export default config;
