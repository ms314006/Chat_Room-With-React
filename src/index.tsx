import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from './store';
import Main from './component/Main';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Consolas, monaco, monospace',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
