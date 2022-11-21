import React from "react";
import {CssBaseline, Grid} from '@material-ui/core';
import { getPlacesData } from "./api";
import Header from "../src/components/Header/Header";
import List from "../src/components/List/List";
import Map from "../src/components/Map/Map";
import Place from "../src/components/PlaceDetails/PlaceDetails";


function App()
{
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing ={3}  style={{width: '100%'}}>
            <Grid item xs = {12} md ={4}>
                <List />
             </Grid>
             <Grid item xs = {12} md ={8}>
                <Map />
             </Grid>
        </Grid>
        </>
    );
}
export default App;