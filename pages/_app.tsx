import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { AppContextProvider, TeaContextProvider } from "../context/XyzContext";

// For FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// For FontAwesome

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({
    adrakChai: {
      price: 0,
      quantity: 0,
    },
  });
  return (
    <TeaContextProvider>
      <Component {...pageProps} />
    </TeaContextProvider>
  );
}

export default MyApp;
