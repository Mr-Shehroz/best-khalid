import localFont from "next/font/local";

export const tartuffo = localFont({
  src: [
    {
      path: "./fonts/tartuffo/Tartuffo_Trial-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-tartuffo",
  display: "swap",
});
