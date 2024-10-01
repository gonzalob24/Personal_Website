import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import NavBar from './NavBar';

function AppRouter() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" exact element={<App />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;