/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ten: '#002a97', 
        thirty: '#ee503a', 
        sixty: '#ffffff',
        dark:'black',
        overDark:'ffffff'
      },
    },
  },
  plugins: [],
};
