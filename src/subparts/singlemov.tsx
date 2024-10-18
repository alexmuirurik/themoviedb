import React, { useRef } from "react";

const Singlemov = (movie) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const overview = (movie.overview) ? movie.overview : 'An exciting movie with a nice beginning, middle, and end.'
    const title    = (movie.title) ? movie.title : 'Some Movie Name'
    return(
        <div className="card" id={movie.id}>
            <iframe 
                width="100%" 
                style={{ aspectRatio: '16/6' }}
                src={"https://www.youtube.com/embed/"+movie.video} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            /> 
            <div className="card-body">
                <h4>{title}</h4>
                <small className="text-light">{overview}</small>
            </div>
        </div>
    )
}

export default Singlemov