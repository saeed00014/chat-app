const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        g_Text_White: "#FFF",
        g_Text_Black: "#000",
        g_Background_Black: "#0F0F0F",
        g_Background_Element: "#D9D9D9",
        g_Border_Active: "#B820FF",
        g_Button_Active: "#D9D9D9",
        g_Button_Background: "#C240FF",
        g_Text_Shaded: "#ffffff80",
        g_Border_Shaded: "#626262",
        g_Background_Shaded: "rgb(59, 59, 59)",
        g_Background_White_Shop: "rgb(235, 235, 235)",
        g_Background_Shaded_Shop: "rgb(241, 242, 244)",
        g_Border_Shaded_Shop: "rgb(112, 112, 110)",
      },
      backgroundImage: {
        ashImage:
          "linear-gradient(to top, rgba(0, 0, 0, .5), rgba(255, 255, 255, 0))",
        shipImage:
          "linear-gradient(to left, rgba(225, 225, 255, .1), rgba(255, 255, 255, .6), rgba(225, 225, 255, .1))",
      },
      fontFamily: {
        primary: ["Dancing Script", "cursive"],
        secondary: ["Poppins", "sans-serif"],
      },
      fontSize: {
        clamp: "clamp(1rem, 13vw, 5.2rem)",
        clamp2: "clamp(1rem, 5vw, 1.5rem)",
        clamp3: "clamp(1.1rem, 4vw, 1.5rem)",
      },
      keyframes: {
        move: {
          "0%": { left: "100%" },
          "100%": { left: "0" },
        },
        movePreRender: {
          "0%": { left: "100%" },
          "100%": { left: "-30%" },
        },
        fade: {
          "0%": { opacity: "1" },
          "50%": { opacity: ".7" },
          "100%": { opacity: "1" },
        },
        completeFade: {
          "0%": { opacity: "1" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        loading: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        xxl: "1780px",
      },
      keyframes: {
        move: {
          "0%": { marginLeft: "0" },
          "100%": { marginLeft: "200%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
