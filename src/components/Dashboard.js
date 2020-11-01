import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import DashboardCard from './DashboardCard';
import Grid from '@material-ui/core/Grid';

export default function Dashboard() {

  const [state, dispatch] = useContext(ProjectContext);
  const cards = state.projects.map(card => <DashboardCard key={card.id} {...card} />);
  
  return (
    <Grid 
      container 
      spacing={3}
      direction="row"
      alignItems="flex-start"
    >
      {cards}
    </Grid>
  )
}