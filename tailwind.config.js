/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  theme: {
    screens: {
      sm: { min: "320px", max: "480px" },

      md: { min: "481px", max: "768px" },

      mdl: { min: "769px", max: "1023px" },

      lg: { min: "1024px", max: "1280px" },

      xl: { min: "1281px", max: "1535px" },

      "2xl" : { min: "1536px" },

    },
    extend: {
      lineHeight: {
        '31': '31.25px', // Adjust the number accordingly if needed
      },
      letterSpacing: {
        '5': '0.05em', // 5% of the font size
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 1.85)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

