import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Main from './component/Main';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Consolas, monaco, monospace',
  },
});

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root')
);
