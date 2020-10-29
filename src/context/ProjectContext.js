import React, { useReducer, useEffect, createContext } from 'react';

const initialState = {
  projects: []
};

export const ProjectContext = createContext(initialState);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return { projects: [...state.projects, action.payload] }
    default:
      return initialState;
  }
}

export const ProjectContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { projects } = state;

  return (
    <ProjectContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProjectContext.Provider>
  )
};