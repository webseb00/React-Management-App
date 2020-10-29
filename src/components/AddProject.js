import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
    '& .form-row': {
      margin: '0 0 20px 0',
      display: 'flex'
    },
    '& .form-cta': {
      justifyContent: 'flex-end'
    },
    '& .MuiButton-root': {
      margin: '0 5px'
    }
  },
}));

export default function AddProject() {
  let history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  // set starting date for project
  const [startDate, setStartDate] = useState(new Date());
  // set ending date for project
  const [endDate, setEndDate] = useState(new Date());
  const [field, setField] = useState({
    project_name: '',
    project_client: '',
    project_details: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

  }

  const handleChange = e => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    });
  }

  const toggleChecked = () => {
    setChecked(!checked);
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className="form-row">
          <TextField 
            label="Project Name"
            name="project_name"
            id="standard-basic"
            onChange={handleChange}
            value={field.project_name}
            fullWidth
            required
          />
          <TextField 
            label="Client Name"
            name="project_client"
            id="standard-basic"
            onChange={handleChange}
            value={field.project_client}
            fullWidth
            required
          />
        </div>
        <div className="form-row">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label="Start Date"
              animateYearScrolling
              onChange={setStartDate}
              value={startDate}
              fullWidth
            />
            <DatePicker
              label="End Date"
              minDate={startDate}
              minDateMessage={'End date cannot be before start date'}
              animateYearScrolling
              onChange={setEndDate}
              value={endDate}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="form-row">
          <TextField 
            id="standard-textarea"
            label="Project details"
            onChange={handleChange}
            value={field.project_details}
            rows={6}
            multiline
            name="project_details"
            fullWidth
          />
        </div>
        <div className="form-row">
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
        <div className="form-row form-cta">
          <Button 
            variant="contained"
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>  
          <Button 
            variant="contained" 
            color="primary"
            type="submit"
            disabled={false}
          >
            Save
          </Button>
        </div>
      </form>
  )
}