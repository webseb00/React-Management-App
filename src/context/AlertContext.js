import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  active: false,
  message: '',
  variant: '',
  severity: ''
};

export const AlertContext = createContext(initialState);

const reducer = (alertState, action) => {
  switch(action.type) {
    case 'SHOW_ALERT':
      return { 
        ...action.payload
      };
    case 'REMOVE_ALERT': 
      return {
        ...action.payload
      };
    default:
      return initialState;
  }
};

export const AlertContextProvider = props => {
  const [alertState, alertDispatch] = useReducer(reducer, initialState);

  return (
    <AlertContext.Provider value={[alertState, alertDispatch]}>
      {props.children}
    </AlertContext.Provider>
  )
};