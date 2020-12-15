import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Playlist
                        </Typography>
                        <Button component={Link} to={"/contenidos"} color="inherit">Contenidos</Button>
                        <Button component={Link} to={"/contadores"} color="inherit">Contadores</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;