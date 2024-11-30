import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vite.dev/config/
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
});
