// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.floko.cc",
  base: "",
  trailingSlash: "never",
  output: "static",
  outDir: "../docs",
  publicDir: "./public",
});
