/// <reference types="vitest" />
import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";
const rollupOptions = {
    external: ['vue'],
    output: {
        globals: {
            vue: "Vue"
        }
    }
}

export default defineConfig({
    plugins:[
        vue(),
        vueJsx(),
        // 添加UnoCSS插件
        Unocss()
    ],
    test: {
        globals: true,
        environment: 'happy-dom', //用于提供测试所需要的 Dom 仿真
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    
    // 添加库模式配置
    build: {
        rollupOptions,
        minify: false,
        sourcemap: true, //输出单独source文件
        reportCompressedSize: true, //生成他说大小报告
        cssCodeSplit: true, // 解决打包报错，是否要独立输出css文件
        lib: {
            entry: './src/entry.ts',
            name: 'CommonUI',
            fileName: 'common-ui',
            // 导出模块格式 不支持esm 改成es
            formats: ['es', 'umd', 'iife']
        }
    }
})