"use client"

import { useState, useEffect } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
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
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Footer from "./Footer"
import BrevoChat from "./BrevoChat"
import WhatsAppChat from "./WhatsAppChat"
import ScrollToTop from "./ScroolToTop"

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // ScrollToTop component handles scrolling to top when location changes
  useEffect(() => {
    setMobileOpen(false) // Close mobile menu when route changes
  }, [location.pathname])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Benefits", path: "/benefits" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
              sx={{ textAlign: "center" }}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 2 }}>
          <Button
            component="a"
            href="https://moneysquadcrm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
            fullWidth
          >
            Partner Login
          </Button>
          <Button
            component="a"
            href="https://moneysquadcrm.netlify.app/sign-up/become-partner"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            fullWidth
          >
            Become Partner
          </Button>
        </Box>
      </List>
    </Box>
  )

  return (
    <>
      <ScrollToTop />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#ffffff",
          borderBottom: "none",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo */}
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/">
                <img
                  src="https://dms.mydukaan.io/original/webp/media/cddbb387-06ce-46eb-8234-e6f77c01f119.png"
                  alt="MoneySquad Logo"
                  style={{ height: 36 }}
                />
              </Link>
            </Box>

            {/* Spacer with increased space */}
            <Box sx={{ flexGrow: 2 }} />

            {/* Desktop Nav Links - All visible with improved hover effects */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    position: "relative",
                    px: 1,
                    py: 1,
                    borderRadius: 0,
                    color: location.pathname === item.path ? "primary.main" : "#333333",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "primary.light",
                        opacity: 0.5,
                      },
                    },
                    "&::after":
                      location.pathname === item.path
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "2px",
                            backgroundColor: "primary.main",
                          }
                        : {},
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Spacer with increased space */}
            <Box sx={{ flexGrow: 2 }} />

            {/* Desktop Call to Action Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Button
                component="a"
                href="https://moneysquadcrm.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 28,
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                  borderColor: "rgba(18, 170, 158, 0.5)",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "rgba(18, 170, 158, 0.04)",
                  },
                }}
              >
                Partner Login
              </Button>
              <Button
                component="a"
                href="https://moneysquadcrm.netlify.app/sign-up/become-partner"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 28,
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0 4px 10px rgba(18, 170, 158, 0.2)",
                  },
                }}
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
              sx={{
                display: { md: "none" },
                ml: 2,
                color: "primary.main",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Green line at the bottom of navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          height: 2,
          bgcolor: "primary.main",
          zIndex: 1100,
        }}
      />

      {/* Spacer to prevent content from hiding under the fixed AppBar */}
      <Box sx={{ height: 66 }} />

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main">
        <Outlet />
      </Box>

      <Footer />
      <WhatsAppChat />
      <BrevoChat />
    </>
  )
}

export default Layout
