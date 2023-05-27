import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/header';

import Home from './pages/home';
import Experience from './pages/experience';
import Works from './pages/works';
import About from './pages/about';
import SocialMediaSideBar from './components/socialmedia';

function App() {
	return (
		<>
			<ToastContainer position="top-center" theme="colored" limit={2} autoClose={2000} pauseOnFocusLoss={false} />
			<div className="bg-bg min-h-screen overflow-x-hidden">
				<Header />
				<SocialMediaSideBar />
				<div className="container max-w-screen-lg border mx-auto">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/experience" element={<Experience />}></Route>
						<Route path="/works" element={<Works />}></Route>
						<Route path="/about" element={<About />}></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;

