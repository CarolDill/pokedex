let types = {}
let pokemons = [' ']

function setup() {
    getAllNames()
}

async function getAllNames() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=1118'
    let response = await fetch(url)
    let responseAsJson = await response.json()

    for (let i = 0; i < responseAsJson.results.length; i++) {
        pokemons.push({
            name: responseAsJson.results[i].name,
            types: []
        })
    }

    getAllTypes()  
}

async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
        let url = 'https://pokeapi.co/api/v2/type/' + (i + 1)
        let response = await fetch(url)
        let responseAsJson = await response.json()

        const pokemonInType = responseAsJson.pokemon
        
        for(j = 0; j < pokemonInType.length; j++) {
            const pokemonId = pokemonInType[j].pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

            if(pokemonId <= pokemons.length) {
                pokemons[pokemonId].types.push(responseAsJson.name)
            }
        }
    }

    loadingCompletion()
}

function loadingCompletion() {

}