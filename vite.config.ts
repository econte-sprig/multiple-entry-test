import dts from "vite-plugin-dts";

/** @type {import('vite').UserConfig} */
export default {
  // ...
  build: {
    lib: {
      entry: {
        index: "./src/index.ts", // all imports of separate files (import core, import replay, etc.)
        core: "./src/modules/core/index.ts",
        "click-logger": "./src/modules/click-logger/index.ts",
        "mouse-logger": "./src/modules/mouse-logger/index.ts",
      },
      formats: ["es"],
    },
    emptyOutDir: true,
  },
  plugins: [dts({ rollupTypes: true })]
}
