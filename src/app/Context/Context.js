import React, { createContext, useReducer } from 'react'

const initialState =[]

export const TrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  
  
    return (
      <TrackerContext.Provider value={{app: "a7a" }}>
        {children}
      </TrackerContext.Provider>
    );
}  