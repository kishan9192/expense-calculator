import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

// Initial State
const initialState  = {
    transactions: []
}



// Create Context
export const GlobalContext = createContext(initialState);


// Create a provider 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action. Not returning the action, directly dispatching the action inside the function
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}