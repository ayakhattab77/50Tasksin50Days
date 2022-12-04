const baseURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const apiKey = '&api_key=f93cec7dc074af067b9058429e85e1ac';
const finalURL = baseURL+apiKey;
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f93cec7dc074af067b9058429e85e1ac&query="'
export const imgUrl = "https://image.tmdb.org/t/p/w500/";

export async function getMovie(search=undefined){
    if(!search){
        const data = await fetch(finalURL);
        return await data.json();
    }
    let searchURL = SEARCH_API + search;
    const data = await fetch(searchURL);
    return await data.json();
}
