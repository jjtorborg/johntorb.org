import { Doto, Red_Hat_Display, Space_Grotesk } from "next/font/google";

export const headerFont = Red_Hat_Display({
    weight: ["400"],
    subsets: ["latin"],
});

export const introFont = Doto({
    weight: ["400"],
    subsets: ["latin"],
});

export const bodyFont = Space_Grotesk({
    weight: ["400"],
    subsets: ["latin"],
});