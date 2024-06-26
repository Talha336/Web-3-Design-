import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';

const pages = ['Whitepaper', 'Tokenomics', 'How to Join', 'Roadmap', 'Faqs'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const appBarStyle = {
    background: 'linear-gradient(180deg, rgba(68, 52, 76, 0.30) 0%, rgba(154, 105, 157, 0.30) 100%)',
    height:"70px"
  };

  const buttonStyle = {
    borderRadius: '7px',
    background: "#5871E4",
    color: "white",
    fontFamily: "inter",
   
  };

  const buttonStyless = {
    textTransform: 'none', // Disable the default text transformation
  };


  return (
    <AppBar className='appbar' position="static" style={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item xs={6} md={3}>
              <img style={{marginTop:"4px"}} className='logo' src='/Assets/Logo4.png' />
            </Grid>
            <Grid item xs={6} md={9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton

                 
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                 
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                 
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{ fontFamily: "inter" ,fontSize:"24px",fontStyle:"normal"}}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ color: 'white', display: 'block', fontFamily:"inter" ,fontWeight:"400px",fontStyle:"normal" }}
                    style={buttonStyless} 
                    className="capitalize-button" 
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Button size='medium' style={buttonStyless} className="capitalize-button"  sx={buttonStyle}>Connect</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
