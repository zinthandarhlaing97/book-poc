import BookProvider from "@/contexts/book.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BookProvider>
      <Component {...pageProps} />
    </BookProvider>
  );
}
