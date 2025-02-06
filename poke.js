const display = document.getElementById('display')

async function getPokemon(){
    const URL = "https://elianrenteria.me/api/pokemon"
    const response = await fetch(URL);
    const json = await response.json()
    console.log(json)
    display.src = json.image;
    return json
}
















