import React from 'react';
import {TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles';

export const HeaderSearch = ({value1, onChange, submit}: any) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.appBarSearchInput}
      label='Search'
      type='search'
      variant='outlined'
      InputProps={{
        endAdornment: (
          <InputAdornment position='end' className={classes.appBarSearchIcon}>
            <SearchIcon  className={classes.icon} onClick={() => submit()} />
          </InputAdornment>
        ),
      }}
      value={value1}
      onChange={e => onChange(e.target.value)}
    />
  );
};
