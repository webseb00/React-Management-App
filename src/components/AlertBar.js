import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default function AlertBar({ message, type, variant }) {
  return (
    <Alert severity={type} variant={variant}>
      {message}
    </Alert>
  )
}
