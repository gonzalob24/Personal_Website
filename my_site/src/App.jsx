import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import ContactMe from './components/ContactMe';

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<LandingPage />
				<AboutMe />
				<Portfolio />
				<ContactMe />
			</ThemeProvider>
		</div>
	);
}

export default App;
