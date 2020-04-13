import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    links: {
        textAlign:"center"
    }
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <div className={classes.links}>
                    <Toolbar variant="dense" >
                    <Grid item xl={4}></Grid>

                        <Link to="/" style={{ "textDecoration": "inherit", "color": "#FFF" }}>
                            <Typography variant="h6" color="inherit">
                                About Me
                            </Typography>
                        </Link>
                        <Grid item xl={1}></Grid>
                        <Link to="/Portfolio" style={{ "textDecoration": "inherit", "color": "#FFF" }}>
                            <Typography variant="h6" color="inherit">
                                Portfolio
                            </Typography>
                        </Link>
                        <Grid item xl={1}></Grid>

                        <Link to="/Contact" style={{ "textDecoration": "inherit", "color": "#FFF" }}>
                            <Typography variant="h6" color="inherit">
                                Contact
                            </Typography>
                        </Link>
                        </Toolbar>

                    </div>


            </AppBar>
        </div>
    );
}