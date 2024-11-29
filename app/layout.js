import { Space_Grotesk, Roboto_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "700"], 
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["300", "700"], 
});

export const metadata = {
  title: "EtherJoy",
  description: "Your modern blockchain crypto experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${robotoMono.variable} antialiased bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-yellow-200 from-0% to-yellow-500 via-yellow-300 to-100%`}
      >
        {children}
      </body>
    </html>
  );
}

