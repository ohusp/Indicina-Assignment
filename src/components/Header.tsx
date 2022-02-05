import * as React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useStyles from '../styles';
import { AppBar, Toolbar } from '@mui/material';
import { HeaderProfile, HeaderSearch } from '.';

export const Header = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [searchTerm1, setAppBarSearchTerm] = useState('');

    const submit = () => {
        navigate(`/results?q=${searchTerm1}`)
    }

    const home = () => {
        navigate(`/search`)
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <img className={classes.logo} onClick={home} src='../assets/github-logo.svg' alt='logo' loading='lazy' />
                <HeaderSearch value={searchTerm1} onChange={setAppBarSearchTerm} submit={submit}/>
                <HeaderProfile />
            </Toolbar>
        </AppBar>
    )
}