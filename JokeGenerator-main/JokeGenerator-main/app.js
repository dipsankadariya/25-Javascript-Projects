const URL ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let joke =document.querySelector("#jokeDisplay");
const btn = document.querySelector("#generateJokeBtn");

let getJoke= async()=>{
    setTimeout(()=>{})
    let response = await fetch(URL);
    let data = await response.json();
    joke.innerHTML= data.joke;
    }
btn.addEventListener("click",()=>{
    joke.innerHTML="Generating....."
    setTimeout(()=>{
        getJoke();
    },1000)
});

//can be used for reference