import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";

const teaContext = createContext();

export const TeaContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    premiumChai: {
      price: 430,
      tempPrice: 430,
      quantity: 0,
    },
    elaichiChai: {
      price: 470,
      tempPrice: 470,
      quantity: 0,
    },
    adrakChai: {
      price: 450,
      tempPrice: 450,
      quantity: 0,
    },
    masalaChai: {
      price: 530,
      tempPrice: 530,
      quantity: 0,
    },
    total: 0,
  });
  return (
    <teaContext.Provider value={[cart, setCart]}>{children}</teaContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(teaContext);
}

// const BlogContext = React.createContext({});
// export const BlogContextProvider = props => {
    // const [blogs, setBlogs] = useState([
        // {
            // title: "First Blog",
            // description: "This is my first blog",
            // id: 1
        // },
        // {
            // title: "Second Blog",
            // description: "This is my Second blog",
            // id: 2
        // },
        // {
            // title: "Third Blog",
            // description: "This is my Third blog",
            // id: 3
        // },
    // ]);
// }





const AppContext = createContext(undefined);

// Hook to provide access to context object
export const UseAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const [apiData, setApiData] = useState([]);
  const [globalValue, setGlobalValue] = useState("Global Value");

  // Assign React state and constants to context object
  const AppContextObject = {
    apiValue: {
      apiData,
      setApiData,
    },
    global: {
      globalValue,
    },
  };
  return (
    <AppContext.Provider value={AppContextObject}>
      {props.children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.element,
};