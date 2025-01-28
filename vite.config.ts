import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig(({mode}) => ({
    base: mode == 'development' ? '/' : '/DummyReact',
    plugins: [
        react({
            include: /\.(mdx|js|jsx|ts|tsx)$/
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 3000
    }
}))