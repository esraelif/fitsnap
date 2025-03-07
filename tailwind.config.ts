import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // src/pages altındaki tüm dosyaları tarar
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Eğer components klasörünüz varsa, onu da ekleyebilirsiniz
    "./src/**/*.{html,js,jsx,ts,tsx}", // Genel olarak src içinde yer alan diğer dosyaları da kapsar
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
