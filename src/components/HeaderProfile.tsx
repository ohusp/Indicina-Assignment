import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import useStyles from '../styles';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

export const HeaderProfile = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        sessionStorage.clear();
        navigate(`/`)
    }

    return (
        <div className={classes.headerProfile}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} >
                <Tooltip title=''>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar alt='avatar' src='../assets/avatar.svg' />
                        <Typography  className={classes.headerUsername}>John Doe</Typography>
                        <img className={classes.vector} src='../assets/vector.svg' alt='vector' loading='lazy' />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem className={classes.logout} onClick={logout}>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    )
}