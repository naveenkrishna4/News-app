import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  build: {
    minify: "terser",
    sourcemap: false,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
