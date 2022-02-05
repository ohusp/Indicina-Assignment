import React from 'react';
import {TextField, InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles';

export const SearchBar = ({value, onChange}: any) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      label='Search'
      type='search'
      variant='outlined'
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon  className={classes.icon}/>
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};
