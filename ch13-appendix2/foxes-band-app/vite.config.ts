import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.indexOf("node_modules") !== -1) {
            const module = id.split("node_modules/").pop().split("/")[0];
            return `vendor-${module}`;
          }
        },
        // manualChunks: {
        //   "vendor-axios": ["axios"],
        //   "vendor-react": ["react", "react-dom"],
        //   "vendor-react-youtube": ["react-youtube"],
        //   "vendor-react-router": ["react-router-dom"],
        // },
      },
    },
  },
});
