import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

export default function AddProjectEmployees({ handleEmployees }) {
  const [state, dispatch] = useContext(ProjectContext);
  const { workers } = state;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign employees to the project:</FormLabel>
      <FormGroup>
        {
          workers && workers.length ?
          workers.map(el => (
            <FormControlLabel
              key={el.id}
              id={el.id}
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