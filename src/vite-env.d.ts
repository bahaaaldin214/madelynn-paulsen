/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LUMORA_API?: string;
  readonly VITE_LUMORA_SITE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
