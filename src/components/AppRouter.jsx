import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import NavBar from './NavBar';

function AppRouter() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/Portfolio_Website" exact element={<App />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
