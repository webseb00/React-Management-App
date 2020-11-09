import React, { useContext, useState, useEffect } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import ProjectDetails from './ProjectDetails';
import TextField from '@material-ui/core/TextField';
import AlertBar from './AlertBar';
import { AlertContext } from '../context/AlertContext';

export default function Project() {

  const [selectedProject, setProject] = useState();
  const [state, dispatch] = useContext(ProjectContext);
  const [alertState, alertDispatch] = useContext(AlertContext);

  useEffect(() => {
    const { projects } = state;
    const setFirstProject = projects[0];
    
    setProject(setFirstProject);
  }, [state]);

  const getProjectItemID = id => {
    const { projects } = state;
    const find = projects.filter(el => el.id === id);
    setProject(find[0]);
  }

  const getProjectItems = () => {
    const { projects } = state;
    return projects.map((el, index) => <ProjectItem 
                                      getProjectID={getProjectItemID}
                                      key={el.id}
                                      id={el.id} 
                                      index={index} 
                                      {...el} 
                                      /> ); 
  }

  const removeSelectedProject = id => {
    dispatch({
      type: 'REMOVE_PROJECT',
      payload: { id }
    });
    alertDispatch({
      type: 'SHOW_ALERT',
      payload: {
        active: true,
        message: 'Project was removed sucessfully!',
        variant: 'filled',
        severity: 'warning'
      }
    });
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper>
            <div className="project-findAndAdd">
              <Link to="/project/add">
                <Fab 
                  size="small" 
                  color="secondary" 
                  aria-label="add" 
                >
                  <AddIcon />
                </Fab>
              </Link>
              <TextField 
                id="standard-basic" 
                label="Filter" 
                size="small"
              />
            </div>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
              {getProjectItems()}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper>
            <ProjectDetails 
              {...selectedProject} 
              removeProject={removeSelectedProject} 
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}