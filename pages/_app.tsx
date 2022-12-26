import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { TeaContextProvider } from "../context/XyzContext";

// For FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// For FontAwesome


// Testing putting this code from index.tsx here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, faShoppingCart, faBars);


// Testing putting this code from index.tsx here

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
