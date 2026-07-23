import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  css: {
    lightningcss: false,
  },

  resolve: {
    tsconfigPaths: true,
  },

  plugins: [
    tanstackStart(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
  ],
})