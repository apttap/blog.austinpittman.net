import paths from "vite-tsconfig-paths";
import preact from "@preact/preset-vite";
import ssr from "vite-plugin-ssr/plugin";
import glsl from 'vite-plugin-glsl';

const config = {
  plugins: [preact(), ssr(), paths(), glsl()],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: {
    include: [
      "preact",
      "preact/devtools",
      "preact/debug",
      "preact/jsx-dev-runtime",
      "preact/hooks",
    ],
  },
};

export default config;
