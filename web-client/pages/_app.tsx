import "@/styles/globals.css";
import Nav from "@/components/navbar/nav";
import Footer from "@/components/footer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1 bg-white">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
