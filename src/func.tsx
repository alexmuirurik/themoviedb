import axios from 'axios';
import { commonheader } from './components/utils.ts';

export const Fetchmoviedir = async (url: string) => {
    const options = {
        method  : 'GET',
        url     :  url,
        headers : {
            accept: 'application/json',
            Authorization: `Bearer ${commonheader} `
        }
    };
    const moviedata = await axios.request(options) 
    console.log(moviedata)
    return moviedata
}

export const Contentexcerpt = (content:any, maxNumberOfWords:any, trailingIndicator = '...') => {
    const listOfWords = content.trim().split(' ');
    const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(' ');
    const excerpt = truncatedContent + trailingIndicator;
    const output = listOfWords.length > maxNumberOfWords ? excerpt : content;
    return output;
};
