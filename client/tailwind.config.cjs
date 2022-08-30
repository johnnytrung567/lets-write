/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif'],
                lora: ['Lora', 'serif'],
                varelaRound: ['Varela Round', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
