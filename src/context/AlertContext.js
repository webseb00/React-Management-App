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
        active: action.payload.active,
        message: action.payload.message,
        variant: action.payload.variant,
        severity: action.payload.severity
      };
    case 'REMOVE_ALERT': 
      return {
        active: false,
        message: '',
        variant: '',
        severity: ''
      };
    default:
      return initialState;
  }
};

export const AlertContextProvider = props => {
  const [alertState, alertDispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    console.log(alertState);
    setTimeout(() => alertDispatch({
      type: 'REMOVE_ALERT'
    }), 6000);
  }, [alertState]);

  return (
    <AlertContext.Provider value={[alertState, alertDispatch]}>
      {props.children}
    </AlertContext.Provider>
  )
};