import React from 'react'
import { useLocation, useParams} from 'react-router-dom'
import Header from '../temparts/header.tsx'
import Sidebar from '../temparts/sidebar.tsx'
import Footer from '../temparts/footer.tsx'
import ListRender from '../components/listrender.tsx'

const Toprated = () => {
    const location = useLocation()
    const pathname = (location.pathname === '/now_playing') ? '/airing_today' : location.pathname
    return (
        <>
            <Sidebar />
            <Header />
            <main className="main">
                <div className="container">
                    <div className="row movierow">
                        <ListRender url = {'https://api.themoviedb.org/3/tv'+pathname} type={'/tv'} />  
                        <ListRender url = {'https://api.themoviedb.org/3/movie'+location.pathname} type={'/movie'} />                  
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Toprated