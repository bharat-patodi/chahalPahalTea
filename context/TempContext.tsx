import { createContext, useContext, useState } from "react";

const TempContext = createContext<[any, any]>([{}, {}]);

export const TempContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartColor, setCartColor] = useState("");
  return (
    <TempContext.Provider value={[cartColor, setCartColor]}>
      {children}
    </TempContext.Provider>
  );
};

export const useTempContext = () => {
  return useContext(TempContext);
};
