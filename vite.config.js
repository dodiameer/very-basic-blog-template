import { sveltekit } from "@sveltejs/kit/vite";
import windicss from "vite-plugin-windicss";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [windicss(), sveltekit()],
};

export default config;
