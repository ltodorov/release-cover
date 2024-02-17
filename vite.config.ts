import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    analyzer({
      analyzerMode: "static",
      fileName: "report",
      reportTitle: "Release Cover Bundle Analyzer",
    }),
  ],
});
