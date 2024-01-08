import { useLocation, useParams} from 'react-router-dom'
import { useEffect} from 'react'
import { Listrender } from '../func'
import Header from '../temparts/header'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'

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
                        <Listrender url = {'https://api.themoviedb.org/3/tv'+pathname} type={'/tv'} />  
                        <Listrender url = {'https://api.themoviedb.org/3/movie'+location.pathname} type={'/movie'} />                  
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Toprated