import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/header';

import Home from './pages/home';
import Experience from './pages/experience';
import Works from './pages/works';
import About from './pages/about';
import SocialMediaSideBar from './components/socialmedia';
import Footer from './components/footer';
import { useEffect } from 'react';
import ImageView from './components/imageviewer';

function App() {
	useEffect(() => {
		var link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}
		link.href = './images/icon.png';
	}, []);
	return (
		<>
			<ToastContainer position="top-center" theme="colored" limit={2} autoClose={2000} pauseOnFocusLoss={false} />
			<div className="bg-bg min-h-screen overflow-x-hidden">
				<Header />
				<ImageView />
				<SocialMediaSideBar />
				{/* <div className="container w-[90%] sm:w-[70%] max-w-screen-lg mx-auto overflow-visible "> */}
				<div className=" w-screen  max-w-[1600px] ps-10 sm:ps-32 md:ps-44 lg:ps-64 ">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/experience" element={<Experience />}></Route>
						<Route path="/works" element={<Works />}></Route>
						<Route path="/about" element={<About />}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;

