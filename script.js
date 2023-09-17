let jokeBox = document.querySelector(".joke")
let btn = document.querySelector(".btn")
let jokeCard = document.querySelector(".joke-card")


let getJoke = ()=>{
    fetch("https://v2.jokeapi.dev/joke/Dark?type=single")
    .then((response)=>{
        return response.json()
    })
    .then((item)=>{
        jokeBox.innerText = item.joke
    })
}


btn.addEventListener('click',()=>{
    
    getJoke();
    jokeCard.classList.add('clicked-card')
    setTimeout(() => {
        jokeCard.classList.remove('clicked-card')
    }, 1000);
})