import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UIProvider } from "../context/ui";
import { EntryProvider } from "../context/entries";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <EntryProvider>
        <Component {...pageProps} />
      </EntryProvider>
    </UIProvider>
  );
}
