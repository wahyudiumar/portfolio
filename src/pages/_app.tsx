// import "@styles/globals.css";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { NavbarComponent } from "@components/NavbarComponent";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/project/[title]" && <NavbarComponent />}
      <Component {...pageProps} />
    </>
  );
}
