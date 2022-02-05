import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginGithub from 'react-login-github';
import useStyles from '../styles';
import { GET_ACCESS_TOKEN } from "../api/client";
import { Loader } from '../components';
import { Grid } from "@mui/material";

export const Login = () => {
    const navigate = useNavigate();
    const classes  = useStyles();
    const [loading, setLoading] = useState(false)
    const checkIfLogin = useRef(() => {})

    useEffect(() => {
        checkIfLogin.current()
    }, []);

    checkIfLogin.current = () => {
        if(sessionStorage.getItem('isAuth') === "true") {
            navigate('/search')
        }
    }

    const onRequest = () => {
        setLoading(true)
    }

    const onSuccess = async (response: any) => {
        // use the code from from git to get the github key from indicina backend
        const res = await GET_ACCESS_TOKEN(response);
        if(res === 'success'){
            setLoading(false)
            sessionStorage.setItem("isAuth", "true");
            window.location.href = '/search';
        }
    }

    const onFailure = (response: any) => {
        setLoading(false)
        // console.error(response)
        alert("An error occurred")
    }

    return (
        <Grid container spacing={2} className={classes.loginDiv}>
            <Grid item>
                <LoginGithub 
                    clientId="4f262cc9e20d3043da02"
                    buttonText='Login to Github'
                    redirectUri="http://localhost:3000"
                    onRequest={onRequest}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    className={classes.loginBtn}
                />
            </Grid>
            <Grid item>
                { loading ?
                    <Loader /> :
                    ""
                }
            </Grid>
        </Grid>
    )
}

