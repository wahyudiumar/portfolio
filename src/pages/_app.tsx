// import "@styles/globals.css";
import "@styles/globals.css";
import type { AppProps } from "next/app";

import { NavbarComponent } from "@components/navbar/NavbarComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  );
}
