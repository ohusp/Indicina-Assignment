import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Container} from "@material-ui/core";
import {SearchBar} from "../components";
import useStyles from '../styles';

export const Search = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const checkIfLogin = useRef(() => {})

    useEffect(() => {
        checkIfLogin.current()
    }, []);

    checkIfLogin.current = () => {
        if(localStorage.getItem('isAuth') !== "true") {
            navigate('/')
        }
    }

    const submit = () => {
        navigate(`/results?q=${searchTerm}`)
    }

    return (
        <Container maxWidth='sm' className={classes.searchContainer}>
            <img src='../assets/github-logo.svg' alt='logo' loading="lazy" />
            <SearchBar value={searchTerm} onChange={setSearchTerm}/>
            <div className={classes.searchBtnDiv}>
                <Button variant="contained" className={classes.searchBtn} onClick={() => submit()}>Search Github</Button>
            </div>
        </Container>
    );
};