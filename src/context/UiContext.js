import { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const hideMenu = () => {
    setMenu(true);
  };
  const showMenu = () => {
    setMenu(false);
  };

  return (
    <UiContext.Provider
      value={{
        menu,
        hideMenu,
        showMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
