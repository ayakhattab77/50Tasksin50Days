const movieID = location.search.split('=')[1];
const container = document.getElementById('container');
import {getMovie, imgUrl} from './fetchingData.js';

getMovie().then((movies)=>{
    displayMovie(movies);
});

function displayMovie(movies){
    movies.results.forEach(movie=>{
        if(movie.id == movieID)
        {
            const {adult, original_language, original_title, overview, popularity, poster_path, release_date, vote_average, 
                vote_count} = movie;
            container.innerHTML = `
                <img src=${imgUrl+poster_path}>
                <div class="details">
                    <h2>Title: ${original_title}</h2>
                    <h2>Adult: ${adult}</h2>
                    <h2>Language: ${original_language}</h2>
                    <h2>Overview: ${overview}</h2>
                    <h2>Popularity: ${popularity}</h2>
                    <h2>Release date: ${release_date}</h2>
                    <h2>Vote average: ${vote_average}</h2>
                    <h2>Vote count: ${vote_count}</h2>
                </div>
            `;
        }
    })
};