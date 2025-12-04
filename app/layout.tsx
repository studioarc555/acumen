// import '../app/globals.css'; // Standard path for CSS from /app to /src/globals.css
// import React from 'react';

// // Define metadata for the app
// export const metadata = {
//   title: 'The Acumen Arc - Creative & Technical Solutions',
//   description: 'Marketing PR, Web Development, App Development, Video Shoots, and Podcast Production.',
// };

// // The Root Layout component
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="font-sans bg-gray-50 antialiased">
//         <div className="min-h-screen flex flex-col">
//           <main className="flex-grow">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }

  import type { Metadata } from "next";
  import { Inter, Playfair_Display } from "next/font/google";
  import "./globals.css";

  const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
  const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

  export const metadata: Metadata = {
    title: "The Acumen Arc | Strategic Digital Partner",
    description:
      "We build brands that inspire and convert. Web development, marketing, consulting, and high-performance digital experiences.",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-slate-700 overflow-x-hidden`}>
          {children}
        </body>
      </html>
    );
  }
