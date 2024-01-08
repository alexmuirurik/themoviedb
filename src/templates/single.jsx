import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Listrender, Singlerender } from '../func'
import Header from '../temparts/header'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'

const Single = (params) => {
    const {id} = useParams()
    const location = useLocation()
    var first = location.pathname.toLowerCase().split("/")[1]
    return (
        <>
            <Sidebar />
            <Header />
            
            <main className="main">
                <div className="container" id={id}>
                    <div className="row movierow">
                        <div className="col-12 mb-3">
                            <Singlerender url={'https://api.themoviedb.org/3'+location.pathname} id={id}/>
                        </div> 
                        <div className="border-top"></div>
                        <Listrender url={'https://api.themoviedb.org/3/'+location.pathname+'/similar'} type={'/'+first} />         
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Single