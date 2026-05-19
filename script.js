const container = document.getElementsByClassName('container')[0];
const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');
const apiUrl = 'https://icanhazdadjoke.com/';
btn.addEventListener('click', getJoke);

function getJoke() {
    fetch(apiUrl, {
        headers: { "Accept": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data); 
        joke.textContent = `${data.joke}`;
    })
    .catch(() => {
        joke.textContent = "Failed to load joke 😭";
    });

    joke.classList.remove('fade');
}

