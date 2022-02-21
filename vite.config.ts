import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": "src", // 设置 `@` 指向 `src` 目录
            "@@": "packages", // 设置 `@` 指向 `src` 目录
        },
    },
    base: "./", // 设置打包路径
});
