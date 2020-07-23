import React, {useState} from 'react';
import SearchBar from './SearchBar';
import {getPokemon} from './ApiCall';
import dataInitialiser from './dataInitialiser';
import CurrentPokeData from './CurrentPokeData';
import "./MainPage.css";

function MainPage() {

const [currentPokemon , setCurrentPokemon] = useState(dataInitialiser);
const [isLoading , setLoadingState ] = useState(false);

const retrievePokemon = async (query : any) => {
    setLoadingState(true);
    const response = await getPokemon(query);
    const jsonResults = await response.json();
    console.log(jsonResults);
    setCurrentPokemon(jsonResults);
    setLoadingState(false);

}

    return (
      <div>
          <SearchBar retrievePokemon={retrievePokemon} />
          {!isLoading && currentPokemon ? (
            <CurrentPokeData name={currentPokemon.name} 
            sprite={currentPokemon.sprites.front_default} 
            abilities={currentPokemon.abilities}
            stats={currentPokemon.stats}
            types={currentPokemon.types}
            id={currentPokemon.id}/>
          ) : <div className="errorMsg">Please wait... 
          <br></br> If this is taking too long, it means the Pokemon was not found. Please refine your search...</div> } 
      </div>
    );
  }
  
  export default MainPage;