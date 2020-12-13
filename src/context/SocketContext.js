import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContex = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");
  return (
    <SocketContex.Provider
      value={{
        socket,
        online,
      }}
    >
      {children}
    </SocketContex.Provider>
  );
};
