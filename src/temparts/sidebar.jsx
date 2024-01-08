import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper" id="navbarSupportedContent">
            <div className="sidebar">
                <div className="sidebar-header border-bottom">
                    <Link className="sidebar-brand">NetFleas</Link>
                </div>
                <div className="sidebar-body border-right">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <Link class="nav-link" to="/"><i class="fa-solid fa-house"></i><p>Home</p></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/tv"><i class="fa-solid fa-tv"></i><p>TV Series</p></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/movie"><i class="fa-solid fa-film"></i><p>Movies</p></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/now_playing"><i class="fa-solid fa-video"></i><p>Now Playing</p></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/top-rated"><i class="fa-solid fa-compact-disc"></i><p>Top Rated</p></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/country"><i class="fa-solid fa-users"></i><p>Peoples</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar