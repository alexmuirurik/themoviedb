import React from 'react'
import Header from '../temparts/header.tsx'
import Sidebar from '../temparts/sidebar.tsx'
import Footer from '../temparts/footer.tsx'
import ListRender from '../components/listrender.tsx'

const Contact = (params) => {
    return (
        <>
            <Sidebar />
            <Header />
            
            <main className="main">
                <div className="container">
                    <div className="row movierow">
                        <ListRender url = {'https://api.themoviedb.org/3/discover/movie'} type={'/movie'} />  
                        <ListRender url = {'https://api.themoviedb.org/3/discover/tv'} type={'/tv'} />                    
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact