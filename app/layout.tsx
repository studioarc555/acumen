import '../app/globals.css'; // Standard path for CSS from /app to /src/globals.css
import React from 'react';
// Corrected path, ensuring the extension is included, and we assume the structure is /app -> ../src
import Header from '../src/components/Header'; 
import Footer from '../src/components/Footer'; 

// Define metadata for the app
export const metadata = {
  title: 'The Acumen Arc - Creative & Technical Solutions',
  description: 'Marketing PR, Web Development, App Development, Video Shoots, and Podcast Production.',
};

// The Root Layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}