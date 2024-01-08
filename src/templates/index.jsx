import { useLocation, useParams, useSearchParams, Link } from 'react-router-dom'
import { Listrender, Listpagination} from '../func'
import Header from '../temparts/header'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'

const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    let page = (searchParams.get('page')) ? searchParams.get('page') : 1
    let pagina = (Number(page)+1)
    let gape = (Number(page) > 10) ? (~~(Number(page)/10) * 10) : 1
    return (
        <>
            <Sidebar />
            <Header />
            
            <main className="main" >
                <div className="container">
                    <div className="row movierow">
                        <Listrender url = {'https://api.themoviedb.org/3/discover'+location.pathname+'?&page='+page} type={location.pathname} />                    
                    </div>
                    <Listpagination url={'https://api.themoviedb.org/3/discover'+location.pathname+'?&page='+page}/>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movie