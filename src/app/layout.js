
import "@/styles/main.css"
import { Inter } from "next/font/google";
import ReduxProvider from "../redux/provider.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        
        </body>
    </html>
  );
}
