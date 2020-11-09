import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './MuiTheme/theme';
import App from './App';
import { ProjectContextProvider } from './context/ProjectContext';
import { AlertContextProvider } from './context/AlertContext';
import { debugContextDevtool } from 'react-context-devtool';
import './style.css';

const container = document.querySelector('#root');

ReactDOM.render(
  <ProjectContextProvider>
    <AlertContextProvider>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </AlertContextProvider>
  </ProjectContextProvider>,
  container
);

// debugContextDevtool(container);
