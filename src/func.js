import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { React, useEffect, useState} from 'react'
import Moviecard from './subparts/moviecard'
import Singlemov from './subparts/singlemov'
import Pageitem from './subparts/pageitem';

export async function Fetchmoviedir(url){
    const options = {
        method  : 'GET',
        url     :  url,
        headers : {
            accept: 'application/json',
            Authorization: 'Bearer YOUR THEMOVIEDBAPI GOES HERE'
        }
    };
    const moviedata = await axios.request(options) 
    return moviedata
}

export function Singlerender(url){
    const [moviedata, setmoviedata] = useState()
    const [movievids, setmovievids] = useState()
    const location = useLocation()
    useEffect(() =>{ Fetchmoviedir(url.url+'/videos').then( res => { setmovievids(res.data.results) }) }, [location.pathname])
    useEffect(() =>{ Fetchmoviedir(url.url).then( res => { setmoviedata(res.data) }) }, [location.pathname])
    if(moviedata){
        let vidurl
        if(movievids !== undefined && movievids.length){
            let video = movievids.find(vid => vid.name === 'Official Trailer') ?? movievids[0]
            vidurl= video.key
        }

        return(
            <Singlemov id={moviedata.id} title={moviedata.original_title ?? moviedata.name} overview={moviedata.overview} video={vidurl} img={moviedata.poster_path}/>
        )
    }
}


export function Listrender(url){
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const [moviedata, setmoviedata] = useState()
    useEffect(() =>{ Fetchmoviedir(url.url).then( res => { setmoviedata(res.data.results) }) }, [location.pathname, searchParams.get('page')])
    if(moviedata){
        return(
            moviedata.map((movie)=>{
                const type   = (url.type) ? url.type : '/'+movie.media_type
                let localurl = type+'/'+movie.id 
                return <Moviecard type={movie.id} url={localurl} img={movie.poster_path ?? movie.backdrop_path} title={movie.original_title ?? movie.name} overview={movie.overview} col={url.col}/>
            })
        )
    }
}

export function Listpagination(url){
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const [currentpage, setcurrentpage] = useState()
    const [totalpages, settotalpages] = useState()
    useEffect(() =>{ 
        Fetchmoviedir(url.url).then( res => { 
            setcurrentpage(res.data.page) 
            settotalpages(res.data.total_pages) 
        }) }, [location.pathname, searchParams.get('page')])
    if(totalpages > 1){
        const rows = [];
        const totpages = (totalpages < 500) ? totalpages : 500
        const pages = ((currentpage + 10) <= totpages) ? currentpage + 10 : totpages
        for (let i = currentpage; i <= pages; i++) {
            const active = (i === currentpage) ? ' active' : ''
            rows.push(<Pageitem number={i} active={active} page={i}/>);
        }
        
        const first = (currentpage === 1) ? ' disabled' : ''
        const last  = (currentpage === totpages) ? ' disabled' : ''
        const prev  =  currentpage - 1
        const next  =  currentpage + 1
        return (
            
            <div className="pagination my-4">
                <nav aria-label="Page navigation col-12" style={{width: '100%'}}>
                    <ul class="pagination justify-content-end">
                        <li className={'page-item p-2' + first}><Link class="page-link" to={location.pathname + "?page=" + prev}>Previous</Link></li>
                        {rows}
                        <li className={'page-item p-2' + last}><Link class="page-link" to={location.pathname + "?page="+ next}>Next</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export function Searchrender(url){
    const [searchParams, setSearchParams] = useSearchParams()
    const [moviedata, setmoviedata] = useState()
    useEffect(() =>{ Fetchmoviedir(url.url).then( res => { setmoviedata(res.data.results) }) }, [searchParams.get('query')])
    if(moviedata){
        return(
            moviedata.map((movie)=>{
                let localurl = '/'+movie.media_type+'/'+movie.id 
                return <Moviecard key={movie.id} url={localurl} img={movie.poster_path ?? movie.backdrop_path} title={movie.original_title ?? movie.name} overview={movie.overview}/>
            })
        )
    }
}


export const Contentexcerpt = (content, maxNumberOfWords, trailingIndicator = '...') => {
    const listOfWords = content.trim().split(' ');
    const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(' ');
    const excerpt = truncatedContent + trailingIndicator;
    const output = listOfWords.length > maxNumberOfWords ? excerpt : content;
    
    return output;
};
