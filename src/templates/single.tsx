import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import Header from '../temparts/header.tsx'
import Sidebar from '../temparts/sidebar.tsx'
import Footer from '../temparts/footer.tsx'
import SingleRender from '../components/singlerender.tsx'
import ListRender from '../components/listrender.tsx'

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
                            <SingleRender url={'https://api.themoviedb.org/3'+location.pathname} id={id}/>
                        </div> 
                        <div className="py-2"></div>
                        <ListRender url={'https://api.themoviedb.org/3/'+location.pathname+'/similar'} type={'/'+first} />         
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Single