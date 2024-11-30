/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@schema": path.resolve(__dirname, "../schema"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    coverage: {
      provider: "v8", // Note: changed from c8 to v8
      reporter: ["text", "json", "html"],
    },
  },
});
