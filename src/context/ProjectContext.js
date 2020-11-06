import React, { useReducer, useEffect, createContext } from 'react';

const initialState = {
  projects: localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : []
};

export const ProjectContext = createContext(initialState);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return { projects: [...state.projects, action.payload] }
    case 'EDIT_PROJECT':
      const editProjects = state.projects.filter(el => el.id !== action.payload.id);
      return { projects: [...editProjects, action.payload] }
    case 'REMOVE_PROJECT': 
      const removeProjects = state.projects.filter(el => el.id !== action.payload.id);
      return { projects: [...removeProjects] }
    default:
      return initialState;
  }
}

export const ProjectContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { projects } = state;

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProjectContext.Provider>
  )
};