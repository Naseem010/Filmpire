import React, { useEffect } from 'react';
import { Divider, Typography, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import useStyle from './styles';
import { useGetGenreQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreorCategory';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/230314/cebecbc615492b2f158a0ce50f29bf67.png';
const blueLogo = 'https://fontmeme.com/permalink/230314/ef59dbde24f88842b204cf2321065358.png';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyle();
  const { data, isFetching } = useGetGenreQuery();
  // console.log(data);
const dispatch = useDispatch();
const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
// console.log(genreIdOrCategoryName);

    return (
      <>
        <Link to="/" className={classes.imageLink}>
          <img
            className={classes.image}
            src={theme.palette.mode === 'light' ? blueLogo : redLogo}
            alt="filmistan logo"
          />
        </Link>
        <Divider />
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
                <ListItemIcon>
                  <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} alt="iconimg" />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <ListSubheader>Genre</ListSubheader>
          {isFetching ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          )
          : data.genres.map(({ name, id }) => (
            <Link key={id} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
                <ListItemIcon>
                  <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} alt="iconimg" />
                </ListItemIcon>

                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>

      </>
    );
}
export default Sidebar;
