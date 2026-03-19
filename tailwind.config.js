/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("@catppuccin/tailwindcss")({
    defaultFlavour: 'mocha',
    prefix: 'ctp',
  })],
  theme: {
    extend: {
      backgroundImage: {
        '-gradient-6': 'linear-gradient(-6deg, var(--tw-gradient-stops))'
      },
      animation: {
      },
      keyframes: {
      },
    },
  },
};