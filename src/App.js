import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import PageNotFound from './components/PageNotFound';
import Employees from './components/Employees';
import AddProject from './components/AddProject';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
      <MenuBar />
      <Container fixed>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/project/add">
              <AddProject />
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
        </main>
      </Container>
    </>
  );
}

export default App;
