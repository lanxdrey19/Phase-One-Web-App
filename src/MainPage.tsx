import React from 'react';
import SearchBar from './SearchBar';

function MainPage() {

const retrievePokemon = (query : any) => {
    console.log(query);

}

    return (
      <div>
          <SearchBar retrievePokemon={retrievePokemon} />
      </div>
    );
  }
  
  export default MainPage;