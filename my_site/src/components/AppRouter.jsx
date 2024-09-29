import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
// import Resume from '../components/Resume';
import NavBar from './NavBar';

function AppRouter() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" exact element={<App />} />
				{/* <Route path="/resume/resume.pdf" element={<Resume />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
