import { readdir } from "node:fs/promises";
import { join, extname } from "node:path";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { type } from "node:os";

/**
 * Determines whether a file is an index file (index.md or README.md)
 * @param {String} file - A filename
 * @returns {Boolean} Whether the filename represents an index file or not
 */
function isIndex(file) {
  return ["index.md", "readme.md"].includes(file.toLowerCase());
}

/**
 * Get all filenames of markdown files in the `./content` directory, sorted
 * alphabetically but with the index file first.
 * @returns {String[]} The filenames
 */
async function contentFiles() {
  return (await readdir(join(import.meta.dirname, "content")))
    .filter((file) => extname(file) === ".md")
    .sort((a, b) => {
      if (isIndex(a)) return -1;
      if (isIndex(b)) return 1;
      return a.localeCompare(b);
    });
}

export default defineUserConfig({
  lang: "en-US",
  title: "Inner Citadel",
  description:
    "A guide for anyone who wants to live a fulfilling life, find tranquility, and have a solid plan when facing adversity.",
  theme: defaultTheme({
    logo: "images/castle-floating-island.webp",
    sidebar: await contentFiles(),
  }),
  head: [
    ["link", { rel: "icon", href: "/inner-citadel/images/castle-floating-island.webp", type: "image/webp" }],
    ["meta", { name: "author", content: "Travis Horn" }],
    ["meta", { property: "og:image", content: "/inner-citadel/images/inner-citadel-og.png" }],
    ["meta", { property: "og:url", content: "https://travishorn.github.io/inner-citadel" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "color-scheme", content: "dark light" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Inner Citadel" }],
    ["meta", { name: "twitter:description", content: "A guide for anyone who wants to live a fulfilling life, find tranquility, and have a solid plan when facing adversity." }],
    ["meta", { name: "twitter:image", content: "/inner-citadel/images/inner-citadel-og.png" }],
  ],
  bundler: viteBundler(),
  dest: ".vuepress/dist",
  temp: ".vuepress/.temp",
  cache: ".vuepress/.cache",
  public: "content/static",
  base: "/inner-citadel/",
});
