"use client"

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

const Footer = () => {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    scrollToTop()
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderTop: 1,
        borderColor: "divider",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* CTA Section */}
        <Paper
          elevation={3}
          sx={{
            mb: 8,
            p: 4,
            borderRadius: 2,
            background: "linear-gradient(to right, #12AA9E, #0d8a80)",
            color: "white",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                fontWeight="bold"
                fontFamily="Inter, Arial, sans-serif"
              >
                Ready to Grow Your Business?
              </Typography>
              <Typography variant="body1" paragraph sx={{ opacity: 0.9, maxWidth: "lg" }}>
                Join MoneySquad's partner network today and start offering the best loan products to your clients while
                earning competitive commissions.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  component="a"
                  href="https://app.moneysquad.in/sign-up/become-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" },
                  }}
                >
                  Become a Partner
                </Button>
                <Button
                  component="a"
                  href="https://app.moneysquad.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    bgcolor: "#6B9AC4",
                    "&:hover": { bgcolor: "rgba(107, 154, 196, 0.9)" },
                  }}
                >
                  Partner Login
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1518343265568-51eec52d40da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9kZXJuJTIwZGFyayUyMGZvb3RlciUyMGRlc2lnbiUyMGZvciUyMGZpbmFuY2lhbCUyMHdlYnNpdGV8ZW58MHx8fHwxNzQ2MzgyMDAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Partner growth"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Column 1: About */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 2 }}>
              <img src="/MoneySquad_Logo.png" alt="MoneySquad Logo" style={{ height: 40 }} />
            </Box>
            <Box sx={{ width: 48, height: 4, bgcolor: "primary.main", mb: 2, borderRadius: 4 }} />
            <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
              India's leading loan distribution platform connecting financial advisors with 50+ lending partners to
              offer the best loan products to their clients.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                aria-label="Facebook"
                component="a"
                href="https://www.facebook.com/moneysquad.in"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "action.hover",
                  "&:hover": { bgcolor: "primary.main", color: "white" },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                aria-label="Instagram"
                component="a"
                href="https://www.instagram.com/moneysquad.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "action.hover",
                  "&:hover": { bgcolor: "primary.main", color: "white" },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                aria-label="LinkedIn"
                component="a"
                href="http://linkedin.com/company/moneysquad"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "action.hover",
                  "&:hover": { bgcolor: "primary.main", color: "white" },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              gutterBottom
              color="text.primary"
              fontFamily="Inter, Arial, sans-serif"
              fontWeight="bold"
            >
              Quick Links
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: "primary.main", mb: 2, borderRadius: 4 }} />
            <List disablePadding>
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "Benefits", path: "/benefits" },
                { label: "Lenders", path: "/products" },
                { label: "FAQ", path: "/" },
                { label: "Contact", path: "/contact" },
              ].map((item, index) => (
                <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                  <MuiLink
                    component={RouterLink}
                    to={item.path}
                    color="text.secondary"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "&:hover": { color: "primary.main" },
                    }}
                    underline="none"
                    onClick={() => scrollToTop()}
                  >
                    <ChevronRightIcon sx={{ fontSize: 18, color: "primary.main", mr: 1 }} />
                    {item.label}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Column 3: Our Products */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              gutterBottom
              color="text.primary"
              fontFamily="Inter, Arial, sans-serif"
              fontWeight="bold"
            >
              Our Products
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: "primary.main", mb: 2, borderRadius: 4 }} />
            <List disablePadding>
              {[
                { label: "Personal Loans", path: "/products" },
                { label: "Business Loans", path: "/products" },
                { label: "Doctor Loans", path: "/products" },
                { label: "CA Loans", path: "/products" },
                { label: "Professional Loans", path: "/products" },
                { label: "Overdrafts", path: "/products" },
              ].map((item, index) => (
                <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                  <MuiLink
                    component={RouterLink}
                    to={item.path}
                    color="text.secondary"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "&:hover": { color: "primary.main" },
                    }}
                    underline="none"
                    onClick={() => scrollToTop()}
                  >
                    <ChevronRightIcon sx={{ fontSize: 18, color: "primary.main", mr: 1 }} />
                    {item.label}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Column 4: Contact */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              gutterBottom
              color="text.primary"
              fontFamily="Inter, Arial, sans-serif"
              fontWeight="bold"
            >
              Contact Us
            </Typography>
            <Box sx={{ width: 48, height: 4, bgcolor: "primary.main", mb: 2, borderRadius: 4 }} />
            <List disablePadding>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 20, color: "primary.main" }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="011-4709 4707"
                  secondary="Mon-Sat, 10AM-6:30PM"
                  primaryTypographyProps={{ color: "text.secondary" }}
                  secondaryTypographyProps={{ fontSize: 12 }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 20, color: "primary.main" }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="hello@moneysquad.in"
                  secondary="Email us for partnership"
                  primaryTypographyProps={{ color: "text.secondary" }}
                  secondaryTypographyProps={{ fontSize: 12 }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 20, color: "primary.main" }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="935, 9th Floor, Westend Mall, Janakpuri"
                  secondary="Delhi 110058"
                  primaryTypographyProps={{ color: "text.secondary" }}
                  secondaryTypographyProps={{ fontSize: 12 }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider />
        <Box
          sx={{
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 0 } }}>
            © 2025 MoneySquad. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink
              component={RouterLink}
              to="/privacy"
              color="text.secondary"
              sx={{ "&:hover": { color: "primary.main" } }}
              underline="none"
              variant="body2"
              onClick={() => scrollToTop()}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/terms"
              color="text.secondary"
              sx={{ "&:hover": { color: "primary.main" } }}
              underline="none"
              variant="body2"
              onClick={() => scrollToTop()}
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/"
              color="text.secondary"
              sx={{ "&:hover": { color: "primary.main" } }}
              underline="none"
              variant="body2"
              onClick={() => scrollToTop()}
            >
              Cookie Policy
            </MuiLink>
          </Box>
        </Box>
      </Container>

      {/* Back to Top Button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.dark",
          },
          width: 48,
          height: 48,
          boxShadow: 3,
        }}
        aria-label="back to top"
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  )
}

export default Footer
