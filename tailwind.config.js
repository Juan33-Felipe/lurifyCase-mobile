/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: { "surface-container": "#1e1f25", "inverse-surface": "#e2e2e9", "tertiary-container": "#d2ae66", "on-primary-fixed": "#241a00", "error": "#ffb4ab", "surface-variant": "#33353a", "on-primary": "#3c2f00", "on-secondary-container": "#d5b46b", "surface-bright": "#37393f", "on-tertiary-container": "#5a4100", "surface-container-highest": "#33353a", "on-error-container": "#ffdad6", "primary-fixed-dim": "#e9c349", "on-background": "#e2e2e9", "on-surface": "#e2e2e9", "outline": "#99907c", "on-error": "#690005", "tertiary": "#efca7e", "inverse-on-surface": "#2e3036", "outline-variant": "#4d4635", "surface": "#111318", "inverse-primary": "#735c00", "surface-dim": "#111318", "tertiary-fixed": "#ffdea0", "surface-container-lowest": "#0c0e13", "surface-container-high": "#282a2f", "on-primary-container": "#554300", "primary-container": "#d4af37", "on-surface-variant": "#d0c5af", "surface-tint": "#e9c349", "on-tertiary-fixed-variant": "#5c4301", "secondary-fixed": "#ffdf9b", "on-secondary-fixed-variant": "#5a4302", "on-secondary": "#3f2e00", "primary": "#f2ca50", "on-primary-fixed-variant": "#574500", "background": "#111318", "error-container": "#93000a", "secondary-fixed-dim": "#e4c277", "surface-container-low": "#1a1b21", "primary-fixed": "#ffe088", "on-secondary-fixed": "#251a00", "secondary": "#e4c277", "on-tertiary-fixed": "#261a00", "tertiary-fixed-dim": "#e7c277", "secondary-container": "#5d4604", "on-tertiary": "#402d00" },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      spacing: { "space-xs": "0.25rem", "space-lg": "1.5rem", "gutter": "1rem", "margin": "1.25rem", "space-sm": "0.5rem", "margin-lg": "1.75rem", "space-md": "1rem", "space-xl": "2.25rem", "gutter-sm": "0.75rem" },
      fontFamily: {
        "body-sm": ["PlusJakartaSans_400Regular"],
        "headline-xl": ["NotoSerif_400Regular"],
        "headline-sm": ["PlusJakartaSans_600SemiBold"],
        "label-md": ["PlusJakartaSans_600SemiBold"],
        "headline-xl-mobile": ["NotoSerif_400Regular"],
        "label-sm": ["PlusJakartaSans_700Bold"],
        "label-lg": ["PlusJakartaSans_600SemiBold"],
        "headline-md": ["NotoSerif_600SemiBold"],
        "headline-lg": ["NotoSerif_500Medium"],
        "body-md": ["PlusJakartaSans_400Regular"],
        "body-lg": ["PlusJakartaSans_400Regular"]
      },
      fontSize: {
        "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "headline-xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-sm": ["17px", { lineHeight: "24px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["11px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
        "headline-xl-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "700" }],
        "label-lg": ["13px", { lineHeight: "18px", letterSpacing: "0.04em", fontWeight: "600" }],
        "headline-md": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-lg": ["26px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "21px", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
}