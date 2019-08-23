import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Main from './component/Main';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Consolas, monaco, monospace',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Typography>
      <Main />
    </Typography>
  </ThemeProvider>,
  document.getElementById('root')
);
