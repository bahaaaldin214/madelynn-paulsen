import { LumoraClient } from "@lumora/bridge";

export const SITE = import.meta.env.VITE_LUMORA_SITE ?? "madelynn-paulsen";

export const client = new LumoraClient({
  baseUrl: import.meta.env.VITE_LUMORA_API ?? "http://localhost:8080",
});
