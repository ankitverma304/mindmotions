import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Noto_Serif_Devanagari, Noto_Nastaliq_Urdu, Noto_Sans_Gurmukhi } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReligionThemeProvider } from "@/lib/theme/religion-theme";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const notoNastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-noto-nastaliq",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const notoGurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-noto-gurmukhi",
  subsets: ["gurmukhi", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindmotions.in"),
  title: {
    default: "MindMotions — परंपरा समझें, तथ्य जानें।",
    template: "%s | MindMotions",
  },
  description:
    "त्योहार, पूजा, आरती, प्रार्थना और धार्मिक परंपराओं की सरल, विश्वसनीय जानकारी — हिंदी, संस्कृत, उर्दू, पंजाबी और अन्य भाषाओं में।",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="hi"
      suppressHydrationWarning
      className={`${inter.variable} ${notoDevanagari.variable} ${notoSerifDevanagari.variable} ${notoNastaliq.variable} ${notoGurmukhi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <ReligionThemeProvider>{children}</ReligionThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
