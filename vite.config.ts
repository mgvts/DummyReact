import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'
import { compression } from 'vite-plugin-compression2'


export default defineConfig(({mode}) => ({
    base: mode == 'development' ? '/' : '/DummyReact',
    plugins: [
        react({
            include: /\.(mdx|js|jsx|ts|tsx)$/
        }),
        compression()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 3000
    },
    build: {
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
    },
}))