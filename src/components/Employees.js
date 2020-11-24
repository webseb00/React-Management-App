import React, { useContext, useState } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import EmployeesList from './EmployeesList';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& .MuiButtonBase-root': {
      marginTop: '10px'
    }
  },
}));

export default function Employees() {
  const classes = useStyles();

  const [state, dispatch] = useContext(ProjectContext);
  
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
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit} className={classes.root}>
            <TextField 
              id="outlined-full-width"
              label="Name"
              name="name"
              value={field.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              size="small"
              margin="dense"
              required
            />
            <TextField 
              id="outlined-full-width"
              label="Role"
              name="role"
              value={field.role}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              size="small"
              margin="dense"
              required
            />
            <TextField
              type="email"
              id="outlined-full-width"
              label="Email address"
              name="email_address"
              value={field.email_address}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              size="small"
              margin="dense"
              required
            />
            <Button 
              color="primary"
              variant="contained" 
              type="submit"
            >
              Add employee
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <EmployeesList />
        </Grid>
      </Grid>
      </>
    )
}