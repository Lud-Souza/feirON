import React, { useReducer } from 'react';

export default (reducer, actions, initialValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [stateCart, dispatch] = useReducer(reducer, initialValue);

    const customFunctions = {};
    Object.keys(actions).forEach((key) => (customFunctions[key] = actions[key](dispatch)));

    return (
      <Context.Provider value={{ stateCart, ...customFunctions }}>{children}</Context.Provider>
    );
  };
  return { Context, Provider };
};
