/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add the paths to all of your template files here
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this based on where your React files are located
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#004B49', // Custom ocean blue color
        'clear-aqua': '#00B2A9', // Custom clear aqua color
        'light-aqua': '#A4D8D6', // Custom light aqua color
        
      },
    },
  },
  plugins: [],
}
