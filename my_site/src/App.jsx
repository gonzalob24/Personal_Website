import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<LandingPage />
				<AboutMe />
				<Portfolio />
			</ThemeProvider>
		</div>
	);
}

export default App;
