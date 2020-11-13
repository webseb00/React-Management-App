import React, { useReducer, useEffect, createContext } from 'react';

const initialState = {
  projects: localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [],
  workers: localStorage.getItem('workers') ? JSON.parse(localStorage.getItem('workers')) : []
};

export const ProjectContext = createContext(initialState);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] }
    case 'EDIT_PROJECT':
      const editProjects = state.projects.filter(el => el.id !== action.payload.id);
      return { ...state, projects: [...editProjects, action.payload] }
    case 'REMOVE_PROJECT': 
      const remainedProjects = state.projects.filter(el => el.id !== action.payload.id);
      return { ...state, projects: [...remainedProjects] }
    case 'ADD_WORKER':
      return { ...state, workers: [...state.workers, action.payload] }
    case 'REMOVE_WORKER':
      const remainedWorkers = state.workers.filter(el => el.id !== action.payload.id);
      return { ...state, workers: [...remainedWorkers] }
    default:
      return initialState;
  }
}

export const ProjectContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { projects, workers } = state;

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('workers', JSON.stringify(workers));
  });

  return (
    <ProjectContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProjectContext.Provider>
  )
};