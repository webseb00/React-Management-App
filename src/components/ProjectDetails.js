import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiIconButton-root': {
      padding: '6px'
    },
    '& .project-header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 15px'
    },
    '& .MuiDivider-root': {
      marginTop: '5px'
    }
  },
}));

export default function ProjectDetails({ project_name, project_client, project_details, startDate, endDate, id, removeProject, completed }) {

  const classes = useStyles();

  const d1 = new Date(startDate);
  const d2 = new Date(endDate);

  return (
    <div className={classes.root}>
      <div className="project-header">
        <h2>{project_name}</h2>
        <div className="project-cta">
          <IconButton
            aria-label="Edit project"
            component={RouterLink}
            to={`/project/${id}`}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete project"
            onClick={() => removeProject(id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className="project-content">
        <div>
          <dl>
            <dt>Client Name:</dt>
            <dd>{project_client}</dd>
          </dl>
          <dl>
            <dt>Project Status:</dt>
            <dd>{completed ? 'Completed' : 'Active'}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Start Date:</dt>
            <dd>{`${d1.getDate()}/${d1.getMonth()+1}/${d1.getFullYear()}`}</dd>
          </dl>
          <dl>
            <dt>End Date:</dt>
            <dd>{`${d2.getDate()}/${d2.getMonth()+1}/${d2.getFullYear()}`}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Details:</dt>
            <dd>{project_details}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}