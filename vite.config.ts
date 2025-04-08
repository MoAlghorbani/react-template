import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { lingui } from "@lingui/vite-plugin";

const ReactCompilerConfig = {
};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
          ["@lingui/babel-plugin-lingui-macro"]
        ],
      },
    }),
    tailwindcss(),
    lingui()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
