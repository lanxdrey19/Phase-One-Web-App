import React from 'react';
import { Grid, Typography, Card, CardActionArea,CardContent,CardMedia } from '@material-ui/core';
import List from '@material-ui/core/List';
import './CurrentPokeData.css';

function CurrentPokeData(props : any) {

    return (
        <Grid 
        container
        direction="row-reverse"
        justify="center"
        alignItems="center"
        >
        <Grid
        item xs = {12} md = {6}>
            <Card className='cardRoot'>
                <CardActionArea>
                <CardMedia
                image={props.sprite}
                />
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    #{props.id}
                    <br></br>
                    {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <img src={props.sprite} alt={props.name} className="image" />
                    <br></br>
                    Abilities:
                    <br></br>
                    {props.abilities.map((ability : any ,key : any) => (
                        <span key={key}>
                            {ability.ability.name + " "}
                            <br></br>
                        </span>
                    ))}
                    <br></br>
                    Types:
                    <br></br>
                    {props.types.map((type : any ,key : any) => (
                        <span key={key}>
                            {type.type.name}
                            <br></br>
                        </span>
                    ))}
                    <br></br>
                    Base Stats: 
                    <br></br>
                    {props.stats.map((stat : any ,key : any) => (
                        <span key={key}>
                            {stat.stat.name}:{stat.base_stat}
                            <br></br>
                        </span>
                    ))}
                    <br></br>
                    </Typography>
                </CardContent>
                </CardActionArea>
        
            </Card>

        </Grid>
        </Grid>
    ) 
}

export default CurrentPokeData;