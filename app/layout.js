import { Inter } from "next/font/google";
import "./globals.css";
// app/layout.tsx or wherever you use ThemeProvider
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header"; 
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';


const inter= Inter({ subsets: ["latin"]});
export const metadata = {
  title: "SensAi",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with Love and Coffee!</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
