/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-native-tailwindcss/**/*.js',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          green1: "#BDCE82",
          green2: "#96CA99",
          orange: "#EBD380",
          white: "#F7F3E9",
          green3: "#267A76",
        },
      },
    },
  },
  plugins: [],
}