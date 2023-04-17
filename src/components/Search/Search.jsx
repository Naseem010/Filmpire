import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search as SearchIcon } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

function Search() {
  const [query, setQuery] = useState('');

  const classes = useStyles();
  const handleKeyPress = () => {

  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

    </div>
  );
}

export default Search;
