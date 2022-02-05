import {Button} from '@material-ui/core';
import useStyles from '../styles';

export const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.login_div}>
            <Button variant="contained" className={classes.login_btn}>Login to Github</Button>
        </div>
    )
}

