import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fastExternal from "vite-plugin-fast-external";
import { visualizer } from "rollup-plugin-visualizer";
const paths = {
    "pixi.js": "https://cdn.skypack.dev/pixi.js",
    animejs: "https://cdn.skypack.dev/animejs",

    "game-algorithm":
        "https://cdn.jsdelivr.net/npm/game-algorithm/dist/index.min.js",
    "game-random": "https://cdn.jsdelivr.net/npm/game-random/dist/index.min.js",
    "enum-color": "https://cdn.jsdelivr.net/npm/enum-color",
};
const specialPath: { [key: string]: () => string } = {};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        fastExternal(
            Object.entries(paths).reduce((col, [moduleName, url]) => {
                col[moduleName] = () => `export * from "${url}"`;
                return col;
            }, specialPath)
        ),
    ],

    resolve: {
        alias: {
            "@": "src", // 设置 `@` 指向 `src` 目录
            "@@": "packages", // 设置 `@` 指向 `src` 目录
        },
    },
    base: "./", // 设置打包路径

    build: {
        rollupOptions: {
            plugins: [visualizer({ filename: "./dist/stat.html" }) as any],
            output: {
                globals: {
                    vue: "Vue",
                    "vue-router": "VueRouter",
                },
            },
        },
    },
});
