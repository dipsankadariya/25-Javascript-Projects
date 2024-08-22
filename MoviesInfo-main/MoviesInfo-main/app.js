const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const movie = document.getElementById('movie-box');
const search_box = document.getElementById('search');

const get_movies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    show_movies(data);
}

const show_movies = (data) => {
    movie.innerHTML = "";

    data.results.forEach((item) => {

 
        const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${IMGPATH + item.poster_path }" alt="No image" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${item.original_title}  </h2>
                        <span> ${item.vote_average} </span>
                    </div>
                    <div>
                    <h3>Release Date:</h3>${item.release_date} 
                    <br>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                 </div>
            `
            movie.appendChild(box)
    })
}

search_box.addEventListener('keyup', (event) => {
    if(event.target.value != ''){
        get_movies(SEARCHAPI + event.target.value);
    } else{
        get_movies(APIURL);
    }
})