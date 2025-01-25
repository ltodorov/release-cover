import { visualizer } from "rollup-plugin-visualizer"
/// <reference types="vitest" />
import { defineConfig } from "vite"
import { coverageConfigDefaults } from "vitest/config"

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
            exclude: [...coverageConfigDefaults.exclude, "src/types/**"],
            thresholds: {
                100: true,
            },
        },
    },
})
