/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Main colours */
        "schiphol-blue": "var(--schiphol-blue)",
        "schiphol-afternoon-blue": "var(--afternoon-blue)",
        "schiphol-seebuyfly-yellow": "var(--seebuyfly-yellow)",
        /* Secondary colours */
        "schiphol-morning-pink": "var(--morning-pink)",
        "schiphol-lightmorning-pink": "var(--lightmorning-pink)",
        "schiphol-lightmorning-blue": "var(--lightmorning-blue)",
        "schiphol-dusk-green": "var(--dusk-green)",
        "schiphol-dusk-blue": "var(--dusk-blue)",
        "schiphol-evening-pink": "var(--evening-pink)",
        "schiphol-evening-lilac": "var(--evening-lilac)",
        // Grey scale
        "schiphol-grey-100": "var(--grey-few)",
        "schiphol-grey-300": "var(--grey-scattered)",
        "schiphol-grey-500": "var(--grey-broken)",
        "schiphol-grey-700": "var(--grey-overcast)",
        "schiphol-grey-900": "var(--grey-storm)",
        // Signal colours
        "schiphol-dark-red": "var(--dark-red)",
        "schiphol-green": "var(--green)",
        "schiphol-light-blue": "var(--light-blue)",
        "schiphol-light-green": "var(--light-green)",
        "schiphol-light-yellow": "var(--light-yellow)",
      },
      gradients: {
        "schiphol-gradient-flights": "var(--gradient-flights)",
        "schiphol-gradient-parking": "var(--gradient-parking)",
        "schiphol-gradient-at-schiphol": "var(--gradient-at-schiphol)",
        "schiphol-gradient-more": "var(--gradient-more)",
        "schiphol-gradient-privium": "var(--gradient-privium)",
      },
    },
  },
  plugins: [],
};
