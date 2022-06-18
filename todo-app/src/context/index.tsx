import React, { createContext } from "react";
import { useState } from "react";

interface ContextProps {
    isFav: boolean;
    setIsFav: React.Dispatch<React.SetStateAction<boolean>>
}

interface ContextProviderProps {
    children: React.ReactNode;
  }

export const TodoContext = React.createContext<ContextProps>({
    isFav: false,
    setIsFav: () => {},
});

export const TodoContextProvider = ({ children }: ContextProviderProps) => {
    const [isFav, setIsFav] = useState<boolean>(false);

    return (
        <TodoContext.Provider
        value={{
            isFav,
            setIsFav,
        }}>
            {children}
        </TodoContext.Provider>
    )
}