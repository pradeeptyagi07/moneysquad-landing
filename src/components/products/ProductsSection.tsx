"use client"

import React from "react"
import { Box, Container, Grid, Typography, Button, Paper, Avatar, useTheme, useMediaQuery, styled } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Product Tab Panel Component
interface ProductTabPanelProps {
  title: string
  description: string
  features: string[]
  image: string
}

export const ProductTabPanel = ({ title, description, features, image }: ProductTabPanelProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Grid container spacing={5} alignItems="center" direction={isMobile ? "column-reverse" : "row"}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  bgcolor: "primary.main",
                  color: "white",
                  py: 1,
                  px: 3,
                  borderRadius: 5,
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                Featured
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{
                mb: 2,
                background: "linear-gradient(90deg, #333333 0%, #12AA9E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", mb: 4 }}>
              {description}
            </Typography>

            <Box sx={{ mt: 3 }}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: "primary.main",
                      mr: 3,
                      boxShadow: "0 8px 20px rgba(18,170,158,0.2)",
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ color: "white", fontSize: 28 }} />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      fontFamily="Inter, Arial, sans-serif"
                      fontWeight="600"
                      sx={{ mb: 0.5 }}
                    >
                      {feature}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.95rem" }}>
                      {index === 0 && "Simple paperwork with quick processing for faster approvals."}
                      {index === 1 && "Access to the best rates from 50+ lending partners."}
                      {index === 2 && "Loans ranging from ₹50,000 to ₹50 lakhs to suit various needs."}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Button
              component={Link}
              to="/products"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 8px 20px rgba(18,170,158,0.2)",
                "&:hover": {
                  boxShadow: "0 12px 25px rgba(18,170,158,0.3)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  )
}

// Products CTA Component
const ProductsCTA = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 6,
        py: 6,
        px: { xs: 3, md: 6 },
        borderRadius: 4,
        bgcolor: "rgba(18,170,158,0.04)",
        border: "1px solid rgba(18,170,158,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          fontWeight="bold"
          fontFamily="Inter, Arial, sans-serif"
          sx={{
            mb: 2,
            background: "linear-gradient(90deg, #333333 0%, #12AA9E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Ready to Offer These Products?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 4,
            fontSize: "1.1rem",
          }}
        >
          Join our partner network today and start offering the best loan products to your clients.
        </Typography>
        <Button
          component="a"
          href="https://moneysquadcrm.netlify.app/sign-up/become-partner"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1.1rem",
            boxShadow: "0 8px 20px rgba(18,170,158,0.2)",
            "&:hover": {
              boxShadow: "0 12px 25px rgba(18,170,158,0.3)",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Become a Partner
        </Button>
      </motion.div>
    </Box>
  )
}

// Custom styled tab component
const StyledTab = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: theme.palette.text.secondary,
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  textAlign: "center",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "rgba(18,170,158,0.04)",
  },
  "&.active": {
    color: theme.palette.primary.main,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 3,
      backgroundColor: theme.palette.primary.main,
      borderRadius: "3px 3px 0 0",
    },
  },
}))

// Main Products Section Component
const ProductsSection = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  const tabData = [
    {
      label: "Personal Loans",
      title: "Personal Loans",
      description: "Help your clients meet their personal financial needs with quick and hassle-free personal loans.",
      features: ["Minimal Documentation", "Competitive Interest Rates", "Flexible Loan Amounts"],
      image:
        "https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      label: "Business Loans",
      title: "Business Loans",
      description: "Empower businesses with the capital they need to grow, expand, and thrive.",
      features: ["Collateral-Free Options", "Customized Repayment", "Higher Loan Amounts"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      label: "Professional Loans",
      title: "Professional Loans",
      description: "Specialized loan products for doctors, CAs, and other professionals to grow their practice.",
      features: ["Preferential Rates", "Equipment Financing", "Practice Expansion"],
      image:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      label: "Overdrafts",
      title: "Overdrafts",
      description: "Flexible credit line for businesses to manage cash flow gaps and working capital needs.",
      features: ["Pay Interest Only on Usage", "Revolving Credit", "Quick Access to Funds"],
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ]

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              OUR OFFERINGS
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{
                mb: 2,
                background: "linear-gradient(90deg, #333333 0%, #12AA9E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Products
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 2 }} />
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
              Offer a wide range of loan products to meet your clients' diverse financial needs.
            </Typography>
          </motion.div>
        </Box>

        {/* Custom Tabs */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: 800 },
            mx: "auto",
            mb: 6,
            bgcolor: "#f5f5f5",
            borderRadius: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          {tabData.map((tab, index) => (
            <StyledTab
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => handleTabChange(index)}
              sx={{
                flex: { xs: "1", sm: "1 1 0" },
                borderBottom: { xs: index < tabData.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none", sm: "none" },
                borderRight: { xs: "none", sm: index < tabData.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" },
                bgcolor: activeTab === index ? "white" : "transparent",
              }}
            >
              {tab.label}
            </StyledTab>
          ))}
        </Box>

        {/* Tab Content */}
        <Box sx={{ mb: 8 }}>
          {tabData.map((tab, index) => (
            <Box key={index} sx={{ display: activeTab === index ? "block" : "none" }}>
              <ProductTabPanel
                title={tab.title}
                description={tab.description}
                features={tab.features}
                image={tab.image}
              />
            </Box>
          ))}
        </Box>

        {/* CTA Section */}
        <ProductsCTA />
      </Container>
    </Box>
  )
}

export default ProductsSection
