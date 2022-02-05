import { useState } from 'react';
import {AppBar, Avatar, Toolbar, Typography} from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import useStyles from '../styles';
import { HeaderSearch } from './HeaderSearch';

export const Header = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [searchTerm1, setAppBarSearchTerm] = useState('');

    const submit = () => {
        navigate(`/results?q=${searchTerm1}`)
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
            <img className={classes.logo} src='../assets/github-logo.svg' alt='logo' loading="lazy" />
            <HeaderSearch value={searchTerm1} onChange={setAppBarSearchTerm} submit={submit}/>
            <div className={classes.headerProfile}>
                <Avatar alt="avatar" src="../assets/avatar.svg" />
                <Typography  className={classes.headerUsername}>John Doe</Typography>
                <img className={classes.vector} src='../assets/vector.svg' alt='vector' loading="lazy" />
            </div>
            </Toolbar>
        </AppBar>
    )
}