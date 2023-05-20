import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filip Przygoński",
  description: "Filip Przygoński portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header className="flex items-center justify-between">
        <div className="text-4xl font-bold">
          <span className="m-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            <Link href="/">Filip Przygoński</Link>
          </span>
        </div>
        <div className="m-3 flex items-center text-4xl text-black">
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </header>
      <main className={inter.className}>
        {/* <Image src="/images/background.jpg" alt="Background" fill /> */}
        {children}
      </main>
    </html>
  );
}
