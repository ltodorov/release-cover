import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        visualizer({
            gzipSize: true,
            brotliSize: true,
            emitFile: true,
            exclude: [
                {
                    file: "**/modulepreload-polyfill.js",
                },
            ],
        }),
    ],
});
