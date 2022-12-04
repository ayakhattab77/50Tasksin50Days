const container = document.getElementById('container');
const search = document.getElementById('search');

import {getMovie, imgUrl} from './fetchingData.js';

getMovie().then((movies)=>{
    displayMovies(movies);
});

function displayMovies(movies){
    console.log(movies.results)
    movies.results.forEach(movie=>{
        container.innerHTML += `
            <figure onmouseover="movieOverview(this)" onmouseout="movieOverview(this)">
                <a href="./movieDetails.html?id=${movie.id}">
                    <img src="${imgUrl+movie.poster_path}">
                    <figcaption>
                        ${movie.original_title}
                        <em>${movie.vote_average}</em>
                    </figcaption>
                    <div class="overview">
                        <div>
                            <h1>Overview</h1>
                            ${movie.overview}
                        </div>
                    </div>
                </a>
            </figure>
        `;
    })
};

search.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        let query = this.value;
        getMovie(`${query}`).then((movies)=>{
            container.innerHTML = '';
            displayMovies(movies)
        });    
    }
});
