import { readdir } from "node:fs/promises";
import { join, extname } from "node:path";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

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
    [
      "link",
      {
        rel: "icon",
        href: "/inner-citadel/images/castle-floating-island.webp",
      },
    ],
  ],
  bundler: viteBundler(),
  dest: ".vuepress/dist",
  temp: ".vuepress/.temp",
  cache: ".vuepress/.cache",
  public: "content/static",
  base: "/inner-citadel/",
});
