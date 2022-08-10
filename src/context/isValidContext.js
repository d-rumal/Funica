import React from "react";

const Context = React.createContext({
    isValid: true,
    setIsValid: (isValid) => { }
});

export const Provider = ({ children }) => {
    return (
        <Context.Provider value={'hi'}>
            {children}
        </Context.Provider>
    );
}

export default Context;