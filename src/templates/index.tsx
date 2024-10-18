import React from 'react'
import { useLocation, useSearchParams} from 'react-router-dom'
import Header from '../temparts/header.tsx'
import Sidebar from '../temparts/sidebar.tsx'
import Footer from '../temparts/footer.tsx'
import ListRender from '../components/listrender.tsx'
import ListPagination from '../components/listpagination.tsx'

const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    let page = (searchParams.get('page')) ? searchParams.get('page') : 1
    return (
        <div>
            <Sidebar />
            <Header />
            <main className="main" >
                <div className="container">
                    <div className="row movierow">
                        <ListRender url={'https://api.themoviedb.org/3/discover'+location.pathname+'?&page='+page} type={location.pathname} />                    
                    </div>
                    <ListPagination url={'https://api.themoviedb.org/3/discover'+location.pathname+'?&page='+page}/>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Movie