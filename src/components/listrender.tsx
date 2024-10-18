import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Fetchmoviedir } from "../func.tsx";
import Moviecard from "../subparts/moviecard.tsx";


const ListRender = (url:any) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const [moviedata, setmoviedata] = useState<any[]>([])
    useEffect(() =>{ Fetchmoviedir(url.url).then( res => { setmoviedata(res.data.results) }) }, [location.pathname, searchParams.get('page')])
    if(moviedata){
        return(
            moviedata.map((movie)=>{
                const type   = (url.type) ? url.type : '/'+movie.media_type
                let localurl = type+'/'+movie.id 
                return <Moviecard 
                    type={movie.id} 
                    url={localurl} 
                    img={movie.poster_path ?? movie.backdrop_path} title={movie.original_title ?? movie.name} 
                    overview={movie.overview} col={url.col}
                />
            })
        )
    }
}

export default ListRender