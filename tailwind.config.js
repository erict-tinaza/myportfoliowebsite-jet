/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode: "class",
  theme: {
    screens: {
      xs:"280px",
      sm: "375px",
      md: "768px",
      lg: "976px"
 
    },
    extend: {
      colors: {
        gray400:"#D9D9D9",
        lightPurple: "#AC90EC",
        purple: "#5E557B",
        supLightGray: "#F6F9FC",
        lightPink:"#D8B4FE",
        bluish:'#818CF8',
        lightGreen: "#6ee7b7",
        red:"#F96256",
        yellow:"#FDBC3D",
        lightYellow:"#EDFF4B",
        green:"#76FA6B",
        teal:"#4BFFFF"
      },
    },
    plugins: [require("flowbite/plugin")],
    animation: {
      type: 'type 2.7s ease-out .8s infinite alternate both',
    },
    keyframes: {
      type: {
        '0%': { transform: 'translateX(0ch)' },
        '5%, 10%': { transform: 'translateX(1ch)' },
        '15%, 20%': { transform: 'translateX(2ch)' },
        '25%, 30%': { transform: 'translateX(3ch)' },
        '35%, 40%': { transform: 'translateX(4ch)' },
        '45%, 50%': { transform: 'translateX(5ch)' },
        '55%, 60%': { transform: 'translateX(6ch)' },
        '65%, 70%': { transform: 'translateX(7ch)' },
        '75%, 80%': { transform: 'translateX(8ch)' },
        '85%, 90%': { transform: 'translateX(9ch)' },
        '95%, 100%': { transform: 'translateX(14ch)' },
      },
    },
  },
};
