import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from './Footer';
import BrevoChat from './BrevoChat';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MoneySquad
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path}
              sx={{ textAlign: 'center' }}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
          <Button 
            component={Link} 
            to="/" 
            variant="outlined" 
            color="primary" 
            fullWidth
          >
            Login
          </Button>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            color="primary" 
            fullWidth
          >
            Become Partner
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar>
            {/* Logo */}
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img 
                  src="https://dms.mydukaan.io/original/webp/media/cddbb387-06ce-46eb-8234-e6f77c01f119.png" 
                  alt="MoneySquad Logo" 
                  style={{ height: 30 }}
                />
              </Link>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  color={location.pathname === item.path ? "primary" : "inherit"}
                  sx={{ 
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    '&:hover': { color: 'primary.main' } 
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Desktop Call to Action Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4, gap: 2 }}>
              <Button 
                component={Link} 
                to="/" 
                variant="outlined" 
                color="primary"
              >
                Login
              </Button>
              <Button 
                component={Link} 
                to="/" 
                variant="contained" 
                color="primary"
              >
                Become Partner
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main">
        <Outlet />
      </Box>
      
      <Footer />
      <BrevoChat />
    </>
  );
};

export default Layout;