import { Link, useSearchParams } from 'react-router-dom'
import { Searchrender } from '../func'
import Header from '../temparts/header'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import { Listpagination } from '../func'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            <Sidebar />
            <Header />
            
            <main className="main" >
                <div className="container">
                    <div className="row movierow">
                        {searchParams.get('query') && <Searchrender url = {'https://api.themoviedb.org/3/search/multi?query='+searchParams.get('query')} type={'/movie'} /> }                    
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Search