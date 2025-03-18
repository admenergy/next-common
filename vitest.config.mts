import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    exclude: configDefaults.exclude,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["app/**/*.ts", "app/**/*.tsx"],
      exclude: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    },
  },
});
