import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './MuiTheme/theme';
import App from './App';
import { ProjectContextProvider } from './context/ProjectContext';
import { debugContextDevtool } from 'react-context-devtool';
import './style.css';

const container = document.querySelector('#root');

ReactDOM.render(
  <ProjectContextProvider>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </ProjectContextProvider>,
  container
);

// debugContextDevtool(container);
