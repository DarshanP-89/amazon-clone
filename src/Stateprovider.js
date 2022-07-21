import React, { createContext, useContext, useReducer } from 'react';

//Prepares the DataLayer
export const StateContext = createContext();

//Wrap our App and Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull info from dataLayer
const useStateValue = () => useContext(StateContext);
export default useStateValue