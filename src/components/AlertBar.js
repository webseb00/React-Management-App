import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default function AlertBar({ message, severity, variant }) {
  return (
    <Alert 
      className='alert-bar'
      severity={severity} 
      variant={variant}
    >
      {message}
    </Alert>
  )
}
