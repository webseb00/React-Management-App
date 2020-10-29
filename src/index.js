import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './MuiTheme/theme';
import App from './App';
import { ProjectContextProvider } from './context/ProjectContext';
import { debugContextDevtool } from 'react-context-devtool';
import './style.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <ProjectContextProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ProjectContextProvider>,
  root
);

// debugContextDevtool(root, {
//   disable: process.env.NODE_ENV === "production"
// });
