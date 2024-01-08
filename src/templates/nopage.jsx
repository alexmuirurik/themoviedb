import { Listrender } from '../func'
import Header from '../temparts/header'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'

const NoPage = (params) => {
    return (
        <>
            <Sidebar />
            <Header />
            
            <main className="main">
                <div className="container">
                    <div className="row movierow">
                        <Listrender url = {'https://api.themoviedb.org/3/discover/movie'} type={'/movie'} />  
                        <Listrender url = {'https://api.themoviedb.org/3/discover/tv'} type={'/tv'} />                    
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NoPage