import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../temparts/header.tsx'
import Sidebar from '../temparts/sidebar.tsx'
import Footer from '../temparts/footer.tsx'
import SearchRender from '../components/searchrender.tsx'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <div>
            <Sidebar />
            <Header />
            <main className="main" >
                <div className="container">
                    <div className="row movierow">
                        { searchParams.get('query') && 
                            <SearchRender url={'https://api.themoviedb.org/3/search/multi?query='+searchParams.get('query')} type={'/movie'} /> 
                        }                    
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Search