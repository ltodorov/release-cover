import { defineConfig, coverageConfigDefaults } from "vitest/config"

export default defineConfig({
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
