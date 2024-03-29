import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyle from './styles';
import { Sidebar, Search } from '..';

function NavBar() {
  const classes = useStyle();
  const [mobileOpen, setMobilOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobilOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => { }}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                className={classes.linkButton}
                onClick={() => { }}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  // eslint-disable-next-line max-len
                  src="data:image/png;base64,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"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobilOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobilOpen={setMobilOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobilOpen={setMobilOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
