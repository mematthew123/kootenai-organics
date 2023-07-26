module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        ElCaminoSoftEdges: ["El Camino ", "sans-serif"],
        ElCaminoRegular: ["El Camino ", "sans-serif"],
        ElCaminoOutline: ["El Camino ", "sans-serif"],
        ElCaminoDrawings: ["El Camino", "sans-serif"],
        ElCaminoSoftEdgesCaps: ["El Camino", "El Camino"],
        ElCaminoTextureCaps: ["ElCaminoTextureCaps", "sans-serif"],
      },
    },
  },
  plugins: [],
};
