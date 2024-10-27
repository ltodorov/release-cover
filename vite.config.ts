/// <reference types="vitest" />
import { defineConfig } from "vite"
import { analyzer } from "vite-bundle-analyzer"

export default defineConfig({
    plugins: [
        analyzer({
            analyzerMode: "static",
            fileName: "report",
            reportTitle: "Release Cover Bundle Analyzer",
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
