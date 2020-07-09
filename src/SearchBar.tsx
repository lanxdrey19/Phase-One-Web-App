import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './SearchBar.css';

function SearchBar(props : any) {

const [searchEntry , setSearchEntry] = useState('');


    return (
      <div className="searchBarContainer">
          <h1 className='title'>Pokemon Search</h1>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
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