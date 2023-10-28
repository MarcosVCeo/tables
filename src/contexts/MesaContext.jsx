import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const MesaContext = createContext();

export function useMesa() {
    return useContext(MesaContext);
}

export function MesaProvider({ children }) {

    function conectarAoSocket(mesaId, username) {
        const socket = io(`ws://localhost:9092/?mesa=${mesaId}&username=${username}`)

        return socket
    }

    return (
        <MesaContext.Provider value={{ conectarAoSocket }}>
            {children}
        </MesaContext.Provider>
    );
}