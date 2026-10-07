/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: { "on-secondary-fixed": "#241a00", "secondary-container": "#fed65b", "inverse-surface": "#31312b", "surface-dim": "#dcdad2", "surface-bright": "#fcf9f1", "secondary-fixed-dim": "#e9c349", "outline": "#807663", "background": "#fcf9f1", "on-surface-variant": "#4e4635", "primary-fixed-dim": "#eec14b", "border-vellum": "rgba(45, 42, 38, 0.07)", "secondary-fixed": "#ffe088", "surface-container-lowest": "#ffffff", "on-background": "#1c1c17", "gold-champagne": "#d4af37", "on-primary-container": "#473500", "gold-highlight": "#f5e8be", "on-primary-fixed-variant": "#5a4300", "gold-burnished": "#c59b27", "error": "#ba1a1a", "inverse-on-surface": "#f3f1e9", "on-tertiary-fixed": "#211b03", "secondary": "#735c00", "ink-obsidian": "#181716", "canvas-ivory": "#fbfaf7", "on-secondary-fixed-variant": "#574500", "tertiary-fixed": "#efe2b8", "tertiary-fixed-dim": "#d2c69e", "border-gold-focus": "rgba(197, 155, 39, 0.42)", "tertiary-container": "#aca17b", "border-gold-subtle": "rgba(197, 155, 39, 0.16)", "surface-parchment": "#f6f3eb", "inverse-primary": "#eec14b", "surface-variant": "#e5e2da", "surface-tint": "#775a00", "on-secondary": "#ffffff", "on-tertiary-fixed-variant": "#4e4728", "on-surface": "#1c1c17", "on-tertiary": "#ffffff", "surface-container-highest": "#e5e2da", "on-secondary-container": "#745c00", "surface-glass-modal": "rgba(255, 255, 255, 0.88)", "on-tertiary-container": "#3f371a", "surface-container": "#f1eee6", "error-container": "#ffdad6", "ink-muted": "#757065", "surface-container-high": "#ebe8e0", "on-error-container": "#93000a", "on-error": "#ffffff", "ink-espresso": "#2d2a26", "on-primary": "#ffffff", "primary-container": "#c59b27", "surface": "#fcf9f1", "primary": "#775a00", "on-primary-fixed": "#251a00", "tertiary": "#675e3d", "primary-fixed": "#ffdf98", "surface-container-low": "#f6f3eb", "outline-variant": "#d1c5af", "surface-glass": "rgba(251, 250, 247, 0.78)", "ink-disabled": "#aaa395" },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      spacing: { "space-md": "1rem", "space-xl": "2.25rem", "space-lg": "1.5rem", "gutter": "1rem", "margin-lg": "2rem", "space-xs": "0.25rem", "margin": "1.25rem", "space-sm": "0.5rem", "gutter-sm": "0.75rem" },
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
        "headline-xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-sm": ["17px", { lineHeight: "24px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["11px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
        "headline-xl-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "700" }],
        "label-lg": ["13px", { lineHeight: "18px", letterSpacing: "0.04em", fontWeight: "600" }],
        "headline-md": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-lg": ["26px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
}