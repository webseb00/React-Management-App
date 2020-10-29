import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <Link to="/project/add">
      <Fab 
        size="medium" 
        color="secondary" 
        aria-label="add" 
      >
        <AddIcon />
      </Fab>
    </Link>
  );
}