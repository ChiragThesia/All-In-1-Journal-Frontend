import React from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import axiosPrimary  from "../auth/axios"
import axios from "axios"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const loginProcess = ()=>{
    axios.get("http://localhost:8080/login").then((res:any)=>{ 
        const data:any = res.data
        console.log(data)
        return data
    }).catch((error)=>console.log(error))
}

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Welcome to you Journal! Does this work? 
                    </Typography>
                    <Button color="inherit" onClick={loginProcess}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
