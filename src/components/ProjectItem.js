import React, { useState, useEffect, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function ProjectItem({ id, index, project_name, completed, getProjectID }) {
  const [state, dispatch] = useContext(ProjectContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(state.projects[0].id);

  useEffect(() => {
    getProjectID(selectedProject);
  }, []);

  const handleListItemClick = (e, i) => {
    e.persist();
    setSelectedProject(e.currentTarget.id);
    getProjectID(e.currentTarget.id);
  }

  return (
    <ListItem
        id={id}
        button
        onClick={e => handleListItemClick(e)}
      >
      <ListItemIcon>
        { completed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon /> }
      </ListItemIcon>
      <ListItemText primary={project_name} />
    </ListItem>
  )
}