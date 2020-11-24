import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

export default function EditProjectEmployees({ handleEmployees, projectID }) {
  const [state, dispatch] = useContext(ProjectContext);
  const { projects, workers } = state;

  const findByID = projects.find(el => el.id === projectID);
  const { employees } = findByID;
  console.log(findByID);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign employees to the project:</FormLabel>
      <FormGroup>
        {
          workers && workers.length ?
          workers.map(el => (
            <FormControlLabel
              key={el.id}
              control={<Checkbox name={el.name} onChange={handleEmployees} />}
              label={`${el.name} (${el.role})`}
            />
          ))
          :
          <Typography variant="h5">
            No employees found
          </Typography>
        }
      </FormGroup>
    </FormControl>
  )
};