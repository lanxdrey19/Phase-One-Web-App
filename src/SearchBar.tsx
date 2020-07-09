import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './SearchBar.css';

function SearchBar(props : any) {

const [searchEntry , setSearchEntry] = useState('');


    return (
      <div className="searchBarContainer">
          <h1>{searchEntry}</h1>
          <Grid container spacing={1}>
          <Grid item xs={4} sm={2}>
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Search" variant="filled" size="small" onChange={e => setSearchEntry(e.target.value)}/>
 
          </form>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button variant="contained" color="primary" size="large" onClick={(e) => props.retrievePokemon(searchEntry)}>
                Submit
            </Button>
          </Grid>

        </Grid>
      </div>
    );
  }
  
  export default SearchBar;