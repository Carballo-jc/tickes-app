import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

export const useHideMenu = (ocultar) => {
  const { hideMenu, showMenu } = useContext(UiContext);

  useEffect(() => {
    if (ocultar) {
      showMenu();
    } else {
      hideMenu();
    }
  }, [ocultar, hideMenu, showMenu]);
};
