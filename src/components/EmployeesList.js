import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function EmployeesList() {
  const [state, dispatch] = useContext(ProjectContext);
  const { workers } = state;

  const handleRemove = e => {
    const id = e.currentTarget.parentNode.parentNode.id
    const confirm = window.confirm('Do you want to remove selected employee?');

    if(!confirm) { return false; }
    
    dispatch({ type: 'REMOVE_WORKER', payload: { id } });
  }

  return (
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
          {workers.map((row, index) => (
            <TableRow key={row.id} id={row.id} >
              <TableCell>{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.email_address}</TableCell>
              <TableCell>
                <IconButton color="secondary" onClick={e => handleRemove(e)} >
                  <DeleteIcon aria-label="delete" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}