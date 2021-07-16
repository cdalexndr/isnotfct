import typescript from '@rollup/plugin-typescript'

export default {
    input: "src/index.ts",
    output: {
        file: "build/index.js",
        format: "iife",
        globals: {
            fastdom: "fastdom"
        },
    },
    plugins: [
        typescript(),
    ]
}