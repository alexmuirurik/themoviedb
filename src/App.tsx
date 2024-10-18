import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './templates/home.tsx'
import Contact from './templates/contact.tsx'
import Single from './templates/single.tsx'
import Index from './templates/index.tsx'
import Search from "./templates/search.tsx";
import Category from './templates/category.tsx'
import About from './templates/about.tsx'
import NoPage from './templates/nopage.tsx'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/movie" element={<Index />} />
				<Route path="/tv" element={<Index />} />
				<Route path="/movie/:id" element={<Single />} />
				<Route path="/tv/:id" element={<Single />} />
				<Route path="/now_playing" element={<Category />} />
				<Route path="/top_rated" element={<Category />} />
				<Route path="/search/" element={<Search />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
