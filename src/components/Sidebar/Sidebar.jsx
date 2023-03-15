import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyle from './styles';

function Sidebar({ setMobileOpen }) {
  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top-rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' },
  ];

    const redLogo = 'https://fontmeme.com/permalink/230314/cebecbc615492b2f158a0ce50f29bf67.png';
    const blueLogo = 'https://fontmeme.com/permalink/230314/ef59dbde24f88842b204cf2321065358.png';
    const theme = useTheme();
    const classes = useStyle();
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
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img src={redLogo} className={classes.genreImages} height={30} alt="iconimg" />
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <ListSubheader>Genre</ListSubheader>
          {demoCategories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img src={redLogo} className={classes.genreImages} height={30} alt="iconimg" />
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>

      </>
    );
}
export default Sidebar;