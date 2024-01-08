import { Link } from "react-router-dom"
import { Contentexcerpt } from "../func"

const Moviecard = (movie) => {
    const overview = (movie.overview) ? Contentexcerpt(movie.overview, 20) : 'An exciting movie with a nice beginning, middle, and end.'
    const altimg   = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1ODgyNTczMl5BMl5BanBnXkFtZTgwMDkzMjkzNzE@._V1_SX300.jpg'
    const img      = (movie.img) ? 'https://image.tmdb.org/t/p/original/'+movie.img : altimg
    const title    = (movie.title) ? movie.title : 'Some Movie Name'
    return(
        <div className="col-sm-6 col-md-6 col-lg-3 mb-2">
            <div className="card bg-black">
                <Link to={movie.url}>
                    <img src={img} key={movie.type} effect="black-and-white" className="img-fluid w-100" /> 
                </Link>
                <div className="card-body">
                    <Link to={movie.url}><h4 className="card-title text-white">{title}</h4></Link>
                    <p className="text-light">{overview}</p>
                </div>
            </div>
        </div>
    )   
}

export default Moviecard