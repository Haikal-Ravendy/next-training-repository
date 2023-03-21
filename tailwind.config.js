/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/*.{js,jsx}",
      "./pages/**/*.{js,jsx}",
      "./pages/**/**/*.{js,jsx}",
      "./pages/**/**/**/*.{js,jsx}",
      "./pages/**/**/**/**/*.{js,jsx}",
      "./src/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
      "./src/**/**/*.{js,jsx}",
      "./src/**/**/**/*.{js,jsx}",
      "./src/**/**/**/**/*.{js,jsx}",
      "./src/**/**/**/**/**/*.{js,jsx}",
    ],
    mode: 'jit',
    darkMode: 'class',  
    theme: {
      extend: {},
    },
    plugins: [],
}
