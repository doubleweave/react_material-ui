import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import {cyan} from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: cyan,
		secondary: {
			main: cyan[100],
		},
		type: 'dark'
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>
	, document.getElementById('root'));