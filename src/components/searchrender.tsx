import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Fetchmoviedir } from '../func.tsx';
import Moviecard from '../subparts/moviecard.tsx';

const SearchRender = (url: any) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [moviedata, setmoviedata] = useState<any[]>([])
    useEffect(() =>{ Fetchmoviedir(url.url).then( res => { setmoviedata(res.data.results) }) }, [searchParams.get('query')])
    if(moviedata){
        return(
            moviedata.map((movie)=>{
                let localurl = '/'+movie.media_type+'/'+movie.id 
                return <Moviecard 
                    key={movie.id} 
                    url={localurl} 
                    img={movie.poster_path ?? movie.backdrop_path} 
                    title={movie.original_title ?? movie.name} 
                    overview={movie.overview}
                />
            })
        )
    }
}

export default SearchRender;
