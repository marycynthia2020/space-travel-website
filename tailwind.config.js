/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        homeDesktop: 'url("/home/background-home-desktop.jpg")',
        homeTablet: 'url("/home/background-home-tablet.jpg")',
        homeMobile: 'url("/home/background-home-mobile.jpg")',
        destinationDesktop: 'url("/destination/background-destination-desktop.jpg")',
        destinationMobile: 'url("/destination/background-destination-mobile.jpg")',
        destinationTablet: 'url("/destination/background-destination-tablet.jpg")',
        crewTablet: 'url("/crew/background-crew-tablet.jpg")',
        crewDesktop: 'url("/crew/background-crew-desktop.jpg")',
        crewMobile: 'url("/crew/background-crew-mobile.jpg")',
        technologyMobile: 'url("/technology/background-technology-mobile.jpg")',
        technologyTablet: 'url("/technology/background-technology-tablet.jpg")',
        technologyDesktop: 'url("/technology/background-technology-desktop.jpg")',
      },
      fontFamily: {
        bellefair: ["Bellefair, serif"],
        barlow: ["Barlow", "sans-serif"],
      }
    },
  },
  plugins: [],
}

