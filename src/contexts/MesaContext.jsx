import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const MesaContext = createContext();

export function useMesa() {
    return useContext(MesaContext);
}

export function MesaProvider({ children }) {

    function conectarAoSocket(param) {
        return io('http://localhost:9092')
    }

    return (
        <MesaContext.Provider value={{ conectarAoSocket }}>
            {children}
        </MesaContext.Provider>
    );
}