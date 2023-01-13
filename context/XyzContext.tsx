// import { createContext, useContext, useState } from 'react';

// const teaContext = createContext();

// export const TeaContextProvider = ({ children }) => {
//   interface CartItem {
//     name: string;
//     details: string;
//     src: string;
//     shipping: number;
//     gm250: {
//       price: number,
//       quantity: number,
//     };
//     gm500: {
//       price: number,
//       quantity: number,
//     };
//     gm1000: {
//       price: number,
//       quantity: number,
//     };
//   }
//   const [cart, setCart] = useState({
//     premiumChai: {
//       name: "Premium Tea",
//       details:
//         "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
//       src: "regular-tea-350x550.png",
//       shipping: 50,
//       gm250: {
//         price: 120,
//         quantity: 0,
//       },
//       gm500: {
//         price: 230,
//         quantity: 0,
//       },
//       gm1000: {
//         price: 430,
//         quantity: 0,
//       },
//     },
//     elaichiChai: {
//       name: "Elaichi Tea",
//       details:
//         "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
//       src: "elaichi-tea-350x550.png",
//       shipping: 50,
//       gm250: {
//         price: 125,
//         quantity: 0,
//       },
//       gm500: {
//         price: 240,
//         quantity: 0,
//       },
//       gm1000: {
//         price: 470,
//         quantity: 0,
//       },
//     },
//     adrakChai: {
//       name: "Adrak Tea",
//       src: "adrak-tea-350x550.png",
//       details:
//         "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
//       shipping: 50,
//       gm250: {
//         price: 125,
//         quantity: 0,
//       },
//       gm500: {
//         price: 230,
//         quantity: 0,
//       },
//       gm1000: {
//         price: 450,
//         quantity: 0,
//       },
//     },
//     masalaChai: {
//       name: "Masala Tea",
//       src: "masala-tea-350x550.png",
//       details:
//         "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
//       shipping: 50,
//       gm250: {
//         price: 130,
//         quantity: 0,
//       },
//       gm500: {
//         price: 250,
//         quantity: 0,
//       },
//       gm1000: {
//         price: 490,
//         quantity: 0,
//       },
//     },
//   });
//   return (
//     <teaContext.Provider value={[cart, setCart]}>{children}</teaContext.Provider>
//   );
// }

// export const useCartContext = () => {
//   return useContext(teaContext);
// }

import { createContext, useContext, useState } from "react";

interface CartItem {
  name: string;
  details: string;
  src: string;
  shipping: number;
  gm250: {
    price: number;
    quantity: number;
  };
  gm500: {
    price: number;
    quantity: number;
  };
  gm1000: {
    price: number;
    quantity: number;
  };
}

// const teaContext = createContext(null);
const teaContext = createContext<[any, any]>([{}, {}]);

// const teaContext = createContext<[CartItem, (val: CartItem) => void]>(null);
// const teaContext = createContext<[any, any]>();

export const TeaContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState({
    premiumChai: {
      name: "Premium Tea",
      details:
        "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
      src: "regular-tea-350x550.png",
      shipping: 50,
      gm250: {
        price: 120,
        quantity: 0,
      },
      gm500: {
        price: 230,
        quantity: 0,
      },
      gm1000: {
        price: 430,
        quantity: 0,
      },
    },
    elaichiChai: {
      name: "Elaichi Tea",
      details:
        "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
      src: "elaichi-tea-350x550.png",
      shipping: 50,
      gm250: {
        price: 125,
        quantity: 0,
      },
      gm500: {
        price: 240,
        quantity: 0,
      },
      gm1000: {
        price: 470,
        quantity: 0,
      },
    },
    adrakChai: {
      name: "Adrak Tea",
      src: "adrak-tea-350x550.png",
      details:
        "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
      shipping: 50,
      gm250: {
        price: 125,
        quantity: 0,
      },
      gm500: {
        price: 230,
        quantity: 0,
      },
      gm1000: {
        price: 450,
        quantity: 0,
      },
    },
    masalaChai: {
      name: "Masala Tea",
      src: "masala-tea-350x550.png",
      details:
        "Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients.",
      shipping: 50,
      gm250: {
        price: 130,
        quantity: 0,
      },
      gm500: {
        price: 250,
        quantity: 0,
      },
      gm1000: {
        price: 490,
        quantity: 0,
      },
    },
  });
  return (
    <teaContext.Provider value={[cart, setCart]}>
      {children}
    </teaContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(teaContext);
};
