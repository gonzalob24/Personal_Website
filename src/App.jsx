import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<LandingPage />
			<AboutMe />
			<Portfolio />
			<ContactMe />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
