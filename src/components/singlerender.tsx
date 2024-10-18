import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Fetchmoviedir } from "../func.tsx"
import Singlemov from "../subparts/singlemov.tsx"

const SingleRender = (url: any) => {
    const [moviedata, setmoviedata] = useState<any>()
    const [movievids, setmovievids] = useState<any[]>([])
    const location = useLocation()
    useEffect(() =>{ Fetchmoviedir(url.url+'/videos').then( res => { setmovievids(res.data.results) }) }, [location.pathname, url.url])
    useEffect(() =>{ Fetchmoviedir(url.url).then( res => { setmoviedata(res.data) }) }, [location.pathname, url.url])
    if(moviedata){
        let vidurl
        if(movievids !== undefined && movievids.length){
            let video = movievids.find(vid => vid.name === 'Official Trailer') ?? movievids[0]
            vidurl= video.key
        }

        return(
            <Singlemov 
                id={moviedata.id} 
                title={moviedata.original_title ?? moviedata.name} 
                overview={moviedata.overview} 
                video={vidurl} 
                img={moviedata.poster_path}
            />
        )
    }
}

export default SingleRender