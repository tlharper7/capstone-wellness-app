import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'dist',
    rollupOptions: {
        build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },


            input: {
                main: resolve(__dirname, 'profile.html'),
            },

            input: {
                main: resolve(__dirname, 'checkin.html'),
            },

            input: {
                main: resolve(__dirname, 'calendar.html'),
            },

            input: {
                main: resolve(__dirname, 'charts.html'),
            },
        
            },
        },  
    },
},
})
