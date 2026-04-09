/// <reference types="vite/client" />

declare module "*.css";

declare interface ImportMetaEnv {
  readonly VITE_PUBLIC_ENVIRONMENT?: string;
  readonly VITE_PUBLIC_VERSION?: string;
  readonly VITE_BASE_PATH?: string;
  readonly MODE?: string;
  readonly DEV?: boolean;
  readonly PROD?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
