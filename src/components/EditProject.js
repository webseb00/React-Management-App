import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import DateFnsUtils from '@date-io/date-fns'; 
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

export default function EditProject(props) {
  const { id } = useParams();
  const [state, dispatch] = useContext(ProjectContext);

  useEffect(() => {
    const { projects } = state;
    const getProjectByID = projects.filter(el => el.id === id);
    const { project_name, project_client, project_details, endDate, startDate, completed } = getProjectByID[0];

    setField({
      project_name,
      project_client,
      project_details
    });

    setStartDate(startDate);
    setEndDate(endDate);
    setChecked(completed);
  }, []);

  let history = useHistory();
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  // edit starting date for project
  const [startDate, setStartDate] = useState(new Date());
  // edit ending date for project
  const [endDate, setEndDate] = useState(new Date());
  // edit input text content
  const [field, setField] = useState({
    project_name: '',
    project_client: '',
    project_details: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    const newData = {
      ...field,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      completed: checked
    }

    dispatch({ type: 'EDIT_PROJECT', payload: { ...newData, id} });
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
};