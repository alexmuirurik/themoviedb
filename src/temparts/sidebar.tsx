import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper" id="navbarSupportedContent">
            <div className="sidebar">
                <div className="sidebar-header border-bottom">
                    <Link to='#' className="sidebar-brand">NetFleas</Link>
                </div>
                <div className="sidebar-body border-right">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">
                                <i className="fa-solid fa-house"></i><p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/tv">
                                <i className="fa-solid fa-tv"></i><p>TV Series</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/movie">
                                <i className="fa-solid fa-film"></i><p>Movies</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/now_playing">
                                <i className="fa-solid fa-video"></i><p>Now Playing</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/top-rated">
                                <i className="fa-solid fa-compact-disc"></i><p>Top Rated</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/country">
                                <i className="fa-solid fa-users"></i><p>Peoples</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar