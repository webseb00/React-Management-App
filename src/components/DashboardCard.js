import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiCardContent-root': {
      height: '150px',
      backgroundColor: theme.palette.primary.light
    }
  }
}));

export default function DashboardCard({ project_name, id }) {
  const classes = useStyles();

  return (  
    <Grid 
      item 
      xs={10} 
      sm={6} 
      md={4} 
      className={classes.root}
    >
      <Card id={id}>
        <CardContent color="primary">
          <Typography variant="h5">
            {project_name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            startIcon={<EditIcon />}
            component={RouterLink}
            to={`/project/${id}`}
          >
            Edit project
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
};
