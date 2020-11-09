import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import PageNotFound from './components/PageNotFound';
import Employees from './components/Employees';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';
import Container from '@material-ui/core/Container';
import { AlertContext } from './context/AlertContext';
import AlertBar from './components/AlertBar';

function App() {

  const [alertState, alertDispatch] = useContext(AlertContext);
  const { active } = alertState;
  
  return (
    <>
      <MenuBar />
      <Container maxWidth="md">
      { active ? 
        <AlertBar 
          {...alertState}
        /> 
      : ''} 
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/project/add">
            <AddProject />
          </Route>
          <Route path="/project/:id">
            <EditProject />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
