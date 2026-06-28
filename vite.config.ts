import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  define: {
    'import.meta.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL),
    'import.meta.env.SUPABASE_ANON_KEY': JSON.stringify(process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY),
  },
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist/client",
  },
});
