// setup data layer
// need to track the basket
import React, {Children, createContext, useContext, useReducer} from 'react'
// Data layer code
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);

export const useStateValue = () =>useContext(StateContext);