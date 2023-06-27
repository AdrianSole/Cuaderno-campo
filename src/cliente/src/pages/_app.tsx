import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "@/styles/reset.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <main className="mainContainer" style={{ height: "100%" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
