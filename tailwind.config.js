// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: {
          DEFAULT: '#00a3ff', // Replace with your desired blue neon color
        },
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
