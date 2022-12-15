import { createContext, useContext, useState } from 'react';

const teaContext = createContext();

export const TeaContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    premiumChai: {
      "gm250": {
        price: 120,
        // tempPrice: 120,
        quantity: 0,
      },
      "gm500": {
        price: 230,
        // tempPrice: 230,
        quantity: 0,
      },
      "gm1000": {
        price: 430,
        // tempPrice: 430,
        quantity: 0,
      },
    },
    elaichiChai: {
      "gm250": {
        price: 125,
        // tempPrice: 125,
        quantity: 0,
      },
      "gm500": {
        price: 240,
        // tempPrice: 240,
        quantity: 0,
      },
      "gm1000": {
        price: 470,
        // tempPrice: 470,
        quantity: 0,
      },
    },
    adrakChai: {
      "gm250": {
        price: 250,
        // tempPrice: 250,
        quantity: 0,
      },
      "gm500": {
        price: 230,
        // tempPrice: 230,
        quantity: 0,
      },
      "gm1000": {
        price: 450,
        // tempPrice: 450,
        quantity: 0,
      },
    },
    masalaChai: {
      "gm250": {
        price: 130,
        // tempPrice: 130,
        quantity: 0,
      },
      "gm500": {
        price: 250,
        // tempPrice: 250,
        quantity: 0,
      },
      "gm1000": {
        price: 490,
        // tempPrice: 490,
        quantity: 0,
      },
    },
  });
  return (
    <teaContext.Provider value={[cart, setCart]}>{children}</teaContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(teaContext);
}

