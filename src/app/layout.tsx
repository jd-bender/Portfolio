import type { Metadata } from "next";

import "../globals.css";
import { IParent } from "./interfaces";

export const metadata: Metadata = {
    title: "Jake Bender",
};

export default function RootLayout({ children }: IParent) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full flex flex-col">{children}</body>
        </html>
    );
}
