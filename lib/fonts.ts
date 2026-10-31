import { Instrument_Sans, Source_Serif_4 } from "next/font/google";

export const fontDisplay = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display-var",
  display: "swap",
});

export const fontReading = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-reading-var",
  display: "swap",
});
