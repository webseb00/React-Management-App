import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

export default function ProjectDetails(props) {
  const { selectedProject, removeProject } = props;
  const classes = useStyles();

  const [state, dispatch] = useContext(ProjectContext);
  const { workers } = state;

  const getDetails = () => {
    const { project_name, project_client, project_details, startDate, endDate, id, completed, employees } = selectedProject;

    const d1 = new Date(startDate);
    const d2 = new Date(endDate);
    
    return (
      <>
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
          {employees && employees.length ?
          <TableContainer component={Paper} elevation={3}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((row, index) => (
                  <TableRow key={row.id} id={row.id} >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>{row.email_address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          :
          <Typography variant="h6">
            No employees assigned to the project...
          </Typography>}
        </div>
      </>
      )
  }

  return (
    <div className={classes.root}>
      {!selectedProject ? '' : getDetails()}
    </div>
  )
}