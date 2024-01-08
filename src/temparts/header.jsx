import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [searchkey, setsearchkey] =   useState('Search')
    const history = useNavigate()
    const submitdata = (e, searchkey) => {
        e.preventDefault()
        history('/search/?query='+searchkey)
    }

    const togglenavbar = (e) => {
        const navbar = document.getElementById('navbarSupportedContent')
        if(navbar.classList.contains('show')) return navbar.classList.remove('show')
        return navbar.classList.add('show')
    }

    const location = useLocation()
    const pathname = location.pathname.replace('/', '').toUpperCase()
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <h5 className='page-title'>{(pathname) ? pathname : 'Home'}</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <form className="form-inline ms-auto my-2 my-lg-0  d-none d-lg-flex" onSubmit={(e) => {submitdata(e, searchkey)}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" onKeyUp={(e)=> setsearchkey(e.target.value)}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
        
export default Header
