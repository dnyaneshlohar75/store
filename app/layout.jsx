import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/landing/Header";
import Provider from "../components/providers/Provider";
import ReduxProvider from "@/redux/ReduxProvider";
import AuthProviders from "@/components/providers/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProviders>
          <ReduxProvider>
            <Provider>
              <div>
                <Header />
              </div>
              {children}
            </Provider>
          </ReduxProvider>
        </AuthProviders>
      </body>
    </html>
  );
}
