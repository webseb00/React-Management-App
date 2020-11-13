import React, { useContext, useState } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import EmployeesList from './EmployeesList';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

export default function Employees() {
  const [state, dispatch] = useContext(ProjectContext);
  const { workers } = state;
  
  const [field, setField] = useState({
    name: '',
    role: '',
    email_address: ''
  });

  const handleChange = e => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch and save worker in local storage
    dispatch({ type: 'ADD_WORKER', payload: { ...field, id: uuidv4() } });
    // reset inputs
    setField({
      name: '',
      role: '',
      email_address: ''
    });
  }

  return (
      <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <form onSubmit={handleSubmit}>
            <TextField 
              id="standard-full-width"
              label="Name"
              name="name"
              value={field.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField 
              id="standard-full-width"
              label="Role"
              name="role"
              value={field.role}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              type="email"
              id="standard-full-width"
              label="Email address"
              name="email_address"
              value={field.email_address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button 
              variant="contained" 
              color="primary"
              type="submit"
            >
              Save
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={8}>
          <EmployeesList />
        </Grid>
      </Grid>
      </>
    )
}