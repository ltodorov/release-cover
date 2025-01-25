import { visualizer } from "rollup-plugin-visualizer"
/// <reference types="vitest" />
import { defineConfig } from "vite"

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
    test: {
        environment: "jsdom",
        environmentOptions: {
            jsdom: {
                resources: "usable",
            },
        },
        setupFiles: ["./vitest.setup.ts"],
        deps: {
            optimizer: {
                web: {
                    include: ["vitest-canvas-mock"],
                },
            },
        },
        coverage: {
            include: ["src/*/**"],
            thresholds: {
                100: true,
            },
        },
    },
})
