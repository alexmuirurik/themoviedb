import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from '../templates/home'
import Contact from '../templates/contact'
import Single from '../templates/single'
import Index from '../templates/index'
import Search from "../templates/search";
import Category from '../templates/category'
import About from '../templates/about'
import NoPage from '../templates/nopage'

const Movierouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/movie" element={ <Index /> } />
                <Route path="/tv" element={ <Index />} />
                <Route path="/movie/:id" element={ <Single />} />
                <Route path="/tv/:id" element={ <Single /> } />
                <Route path="/now_playing" element={<Category/>} />
                <Route path="/top_rated" element={<Category/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Movierouter