import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import NavBar from './NavBar';

function AppRouter() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" exact element={<App />} />
				{/* <Route path="/portfolio/guess_color" element={<GuessColor />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
