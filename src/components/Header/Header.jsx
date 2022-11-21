import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../Header/styles';

function Header()
{
    const classes = useStyles();  //React Hook
    return (
        <div>
            <AppBar position = 'static'>  
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Travis
                    </Typography>
                    <Box display='flex'>
                        <Typography variant='h6' classname={classes.title}>
                            Explore new Places
                        </Typography>
                        {/* < Autocomplete> */}
                            <div className={classes.search}>
                                <div className= {classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder="Search" classes={{root: classes.inputRoot, input:classes.inputInput}} />

                            </div>
                        {/* </Autocomplete> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;