import React, { createContext, useReducer } from 'react'

import { DELETE_TRANSACTION , CREATE_TRANSACTION} from './Types'

import { trackerReducer } from './Reducer';

const initialState =[]

export const TrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  
  const [transactions, dispatch] = useReducer(trackerReducer, initialState)

  const deleteTransaction = (id) => 
  dispatch({type : DELETE_TRANSACTION, payload: id})
  
  const createTransaction = (transition) =>
    dispatch({type : CREATE_TRANSACTION, payload: transition})
  
console.log(transactions)
    return (
      <TrackerContext.Provider value={{
        deleteTransaction,
        createTransaction,
        transactions
        }}
      >
        {children}
      </TrackerContext.Provider>
    );
}  