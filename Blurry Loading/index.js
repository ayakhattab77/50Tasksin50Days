const percentage = document.getElementById('percentage');
const loadingContainer = document.getElementById('loading');

let loading = 0,
    blur = 50;

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

document.addEventListener('DOMContentLoaded', function(){
    const loadingFunc = setInterval(function(){
        percentage.innerText = `${++loading}%`;
        loadingContainer.style.backdropFilter = `blur(${scale(loading, 0, 100, 50, 0)}px)`;
        if(loading===99)
        {
            loadingContainer.style.display = 'none';
            clearInterval(loadingFunc);
        }
    }, 30);
});
