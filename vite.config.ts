import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.ts"),
      name: "CleverPotato",
      // the proper extensions will be added
      fileName: "clever-potato",
    },
    rollupOptions: {
      external: ["React"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
});
