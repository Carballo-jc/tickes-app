import React from "react";
import { UiProvider } from "./context/UiContext";
import { SocketProvider } from "./context/SocketContext";
import RouterPages from "./pages/RouterPages";

const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPages />
      </UiProvider>
    </SocketProvider>
  );
};

export default TicketApp;
