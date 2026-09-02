import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { writeFile, copyFile } from "node:fs/promises";

function seoFilesPlugin(siteUrl: string): Plugin {
  const origin = siteUrl.replace(/\/$/, "");

  return {
    name: "seo-files",
    async writeBundle(options) {
      const outDir = options.dir ?? "dist";
      await writeFile(
        path.join(outDir, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
        "utf8",
      );
      await writeFile(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n` +
          `    <loc>${origin}/</loc>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>1.0</priority>\n` +
          `  </url>\n` +
          `  <url>\n` +
          `    <loc>${origin}/privacidade</loc>\n` +
          `    <changefreq>yearly</changefreq>\n` +
          `    <priority>0.3</priority>\n` +
          `  </url>\n` +
          `</urlset>\n`,
        "utf8",
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL ?? "https://example.com";
  const base = env.VITE_BASE_PATH || "/";

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "html-transform",
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_URL__", siteUrl.replace(/\/$/, ""));
        },
      },
      seoFilesPlugin(siteUrl),
      {
        name: "spa-github-pages-fallback",
        async writeBundle(options) {
          const outDir = options.dir ?? "dist";
          await copyFile(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  };
});
