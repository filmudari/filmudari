tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F0",
        surface: "#FFFFFF",
        ink: "#1B1E21",
        muted: "#596067",
        line: "#E3DFD6",
        carmine: { DEFAULT: "#9E3039", dark: "#7F2530", soft: "#F4E6E5" }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"]
      },
      maxWidth: { page: "76rem" }
    }
  }
};
