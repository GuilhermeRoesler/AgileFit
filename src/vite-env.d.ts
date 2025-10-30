/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_LEADS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
