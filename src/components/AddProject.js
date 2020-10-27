import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px 15px',
      width: 360,
    },
    '& .form-row': {
      margin: '0 0 20px 0',
      display: 'flex'
    }
  },
}));

export default function AddProject() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

  }

  const toggleChecked = () => {
    setChecked(!checked);
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
    >
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className="form-row">
          <TextField 
            label="Project Name"
            id="standard-basic"
          />
          <TextField 
            label="Client Name"
            id="standard-basic"
          />
          <FormControlLabel
            control={
              <Switch 
                checked={checked} 
                onChange={toggleChecked} 
                color="primary"
                name="completed"
              />
            }
            label="Completed?"
          />
        </div>
        <div className="form-row">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label="Start Date"
              animateYearScrolling
            />
            <DatePicker
              label="End Date"
              animateYearScrolling
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="form-row">
          <TextField 
            id="standard-textarea"
            label="Project details"
            rows={4}
            multiline
            name="projectDetails"
          />
        </div>
      </form>
    </Grid>
  )
}