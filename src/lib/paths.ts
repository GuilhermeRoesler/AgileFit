/** Une um caminho absoluto do app com o `base` do Vite (ex.: `/AgileFit/`). */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL;
  if (path === "/" || path === "") return base;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}

/** Pathname da app sem o prefixo `base` (ex.: `/privacidade`). */
export function appPathname(pathname = window.location.pathname): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let path = pathname;
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || "/";
  }
  path = path.replace(/\/$/, "") || "/";
  return path === "/index.html" ? "/" : path;
}
