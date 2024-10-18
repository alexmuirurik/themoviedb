import React from "react"
import { Link } from "react-router-dom"
import { Contentexcerpt } from "../func.tsx"

const Moviecard = (movie: any) => {
    const overview = (movie.overview) ? Contentexcerpt(movie.overview, 20) : 'An exciting movie with a nice beginning, middle, and end.'
    const altimg   = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1ODgyNTczMl5BMl5BanBnXkFtZTgwMDkzMjkzNzE@._V1_SX300.jpg'
    const img      = (movie.img) ? 'https://image.tmdb.org/t/p/original/'+ movie.img : altimg
    const title    = (movie.title) ? movie.title : 'Some Movie Name'
    return(
        <div className="d-flex col-sm-6 col-md-6 col-lg-3 mb-2">
            <div className="card bg-black h-100">
                <Link to={movie.url}>
                    <img src={img} key={movie.type} className="img-fluid w-100 rounded" style={{aspectRatio: '4/3'}} /> 
                </Link>
                <div className="card-body">
                    <h4 className="text-white fs-5">
                        <Link to={movie.url}>{title}</Link>
                    </h4>
                    <small className="text-light">{overview}</small>
                </div>
            </div>
        </div>
    )   
}

export default Moviecard