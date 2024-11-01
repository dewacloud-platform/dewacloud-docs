import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const githubRepo = "https://github.com/dewacloud-platform/dewacloud-docs";

const config: Config = {
  title: "Dewacloud",
  tagline:
    "Secure & Cost-Efficient Cloud Platform for Business. ISO 27001 Certified.",
  favicon: "img/dewacloud-cropped-Favicon-32x32.ico",

  // Set the production url of your site here
  url: "https://docs.dewacloud.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dewaweb", // Usually your GitHub org/user name.
  projectName: "dewacloud-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  // Plugins
  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          editUrl: `${githubRepo}/edit/main/`,
        },
        blog: {
          path: "./release-notes",
          blogSidebarCount: "ALL",
          sortPosts: "descending",
          tags: false,
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          routeBasePath: "/release-notes",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["docusaurus-theme-search-typesense"],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
      content: "👷 Site is currently in development 🚧",
      isCloseable: false,
    },
    image: "img/dewacloud-social-card.jpg",
    navbar: {
      logo: {
        alt: "Dewacloud Logo",
        src: "img/dewacloud-horizontal-logo-light-bg.svg",
        srcDark: "img/dewacloud-horizontal-logo-dark-bg.svg",
      },
      items: [
        {
          type: "search",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        { to: "/release-notes", label: "Release Notes", position: "right" },
        {
          href: githubRepo,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              html: ` <a href="https://dewacloud.com" aria-label="Dewacloud Platform">
                  <img src="https://assets.dewacloud.com/dewacloud-docs/static/dewacloud-horizontal-logo-monochrome-version-tagline-dark-bg.png" alt="Dewacloud Logo" width="200px"/>
                </a>`,
            },
            {
              html: `<p>Dewacloud is a secure, fast and cost-efficient cloud platform for business.</p>`,
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/dewacloudofficial/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/dewacloudofficial/",
            },
            {
              label: "Twitter",
              href: "https://x.com/dewacloud",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Release Notes",
              to: "/release-notes",
            },
            {
              label: "GitHub",
              href: githubRepo,
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Dewacloud`,
      copyright: `
      <p>Powered by Dewaweb</p>
      <p>Copyright © ${new Date().getFullYear()} Dewacloud</p>
      
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    typesense: {
      // Replace this with the name of your index/collection.
      // It should match the "index_name" entry in the scraper's "config.json" file.
      typesenseCollectionName: "dewacloud-docs",

      typesenseServerConfig: {
        nodes: [
          {
            host: "typesense-dewacloud-docs.user.cloudjkt02.com",
            port: 443,
            protocol: "https",
          },
        ],
        apiKey: "g8WdShs2VzOtVzuDEWE27p0RI8CDnJyx",
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},

      // Optional
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
