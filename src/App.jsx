import { About, Contact, Home, Projects } from './pages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import React from 'react';

const App = () => {
	return (
		<main classname="bg-slate-300/200">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</main>
	);
};

export default App;