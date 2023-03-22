const name = document.querySelector('.name')
const type = document.querySelector('.type')
const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const bio = document.querySelector('.bio')
const search = document.querySelector('.search')
const image = document.querySelector('.img')

search_input.addEventListener('change', (event) => (
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto?q=${event.target.value}&appid=${API_KEY}&lang=vi`)
    .then(response => response.json())
    .then((data) => {



    })
));