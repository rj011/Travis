import React from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { useState } from "react";
import useStyles from './styles';
import PlaceDetails from "../PlaceDetails/PlaceDetails";

function List()
{
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const places =[
        {name: 'Cool Place'},
        {name: 'Best Beer'},
        {name: 'Best Food'}
    ];
    return (
        <div className={classes.container}>
            <Typography variant='h4'>
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value = 'Restaurants'>Restaurants</MenuItem>
                    <MenuItem value = 'Attractions'>Attractions</MenuItem>
                    <MenuItem value = 'Hotels'>Hotels</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value = {0}>Alls</MenuItem>
                    <MenuItem value = {3}>Above 3 stars</MenuItem>
                    <MenuItem value = {4}>Above 4 stars</MenuItem>
                    <MenuItem value = {4.5}>Above 4.5 stars</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places.map((place,i)=> (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
            
        </div>
    );
}

export default List;