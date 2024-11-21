import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import NavBar from './NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

function AppRouter() {
	return (
		<BrowserRouter basename="/Personal_Website">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NavBar />
				<Routes>
					<Route
						path="/"
						exact
						element={<App />}
					/>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default AppRouter;
