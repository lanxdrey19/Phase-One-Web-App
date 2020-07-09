const urlBeginning = 'https://pokeapi.co/api/v2/pokemon/';


export async function getPokemon(pokemon : any) {

    console.log(`${urlBeginning}${pokemon}`);
    return fetch(`${urlBeginning}${pokemon}`);

}