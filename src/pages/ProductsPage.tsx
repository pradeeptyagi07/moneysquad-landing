"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import LenderPartners from "../components/lenders/LenderPartners"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  }
}

const ProductsPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const productData = [
    {
      title: "Personal Loans",
      description: "Help your clients meet their personal financial needs with quick and hassle-free personal loans.",
      features: [
        "Minimal Documentation - Simple paperwork with quick processing for faster approvals.",
        "Competitive Interest Rates - Access to the best rates from 50+ lending partners.",
        "Flexible Loan Amounts - Loans ranging from ₹50,000 to ₹50 lakhs to suit various needs.",
      ],
      image:
        "https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Business Loans",
      description: "Empower businesses with the capital they need to grow, expand, and thrive.",
      features: [
        "Collateral-Free Options - Unsecured business loans with minimal documentation requirements.",
        "Customized Repayment - Flexible repayment options tailored to business cash flows.",
        "Higher Loan Amounts - Business loans up to ₹2 crores with competitive interest rates.",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Professional Loans",
      description: "Specialized loan products for doctors, CAs, and other professionals to grow their practice.",
      features: [
        "Preferential Rates - Special interest rates for qualified professionals.",
        "Equipment Financing - Specialized loans for medical equipment and professional tools.",
        "Practice Expansion - Tailored solutions for clinic setup and practice growth.",
      ],
      image:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Overdrafts",
      description: "Flexible credit line for businesses to manage cash flow gaps and working capital needs.",
      features: [
        "Pay Interest Only on Usage - Cost-effective solution with interest charged only on utilized amount.",
        "Revolving Credit - Withdraw and repay as needed within the approved limit.",
        "Quick Access to Funds - Immediate availability of funds for emergency business needs.",
      ],
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ]

  const comparisonData = [
    {
      type: "Personal Loan",
      rate: "10.5% - 18%",
      amount: "₹1L - ₹1Cr",
      tenure: "1-8 years",
      processing: "24-72 hours",
      color: "#FF6B6B",
    },
    {
      type: "Business Loan",
      rate: "14% - 24%",
      amount: "₹5L - ₹5Cr",
      tenure: "1-5 years",
      processing: "2-5 days",
      color: "#4ECDC4",
    },
    {
      type: "Doctor Loan",
      rate: "10.5% - 14%",
      amount: "₹5L - ₹2Cr",
      tenure: "1-5 years",
      processing: "2-5 days",
      color: "#6B5B95",
    },
    {
      type: "CA Loan",
      rate: "11% - 15%",
      amount: "₹5L - ₹2Cr",
      tenure: "1-5 years",
      processing: "2-5 days",
      color: "#FE9A76",
    },
    {
      type: "Overdraft",
      rate: "15% - 19%",
      amount: "₹10L - ₹2Cr",
      tenure: "Annual renewal",
      processing: "2-5 days",
      color: "#C06C84",
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          color: "white",
          py: { xs: 10, md: 14 },
          overflow: "hidden",
        }}
      >
        {/* Background with gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            bgcolor: "primary.main",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(18,170,158,0.9) 0%, rgba(13,138,128,0.95) 100%)",
              zIndex: 1,
            },
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Products Background"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
        </Box>

        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "10%",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box textAlign="center" sx={{ maxWidth: 900, mx: "auto" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
                fontFamily="Inter, Arial, sans-serif"
                sx={{ mb: 3, textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              >
                Our Loan Products
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                Offer a wide range of loan products to meet your clients' diverse financial needs
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                to="/contact"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  },
                  px: 5,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                Become a Partner
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Tab Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="product tabs"
            sx={{
              "& .MuiTab-root": {
                fontSize: { xs: "0.85rem", sm: "1rem" },
                px: { xs: 2, sm: 3 },
                py: 2,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "rgba(18,170,158,0.04)",
                },
              },
              "& .Mui-selected": {
                color: "primary.main",
                fontWeight: 700,
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            <Tab label="Personal Loans" {...a11yProps(0)} />
            <Tab label="Business Loans" {...a11yProps(1)} />
            <Tab label="Professional Loans" {...a11yProps(2)} />
            <Tab label="Overdrafts" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        {productData.map((product, index) => (
          <TabPanel key={index} value={value} index={index}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      transform: "perspective(1000px) rotateY(-5deg)",
                      transition: "all 0.5s ease",
                      "&:hover": {
                        transform: "perspective(1000px) rotateY(0deg)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.title}
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        transition: "transform 0.7s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        height: "50%",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 30,
                        left: 30,
                        color: "white",
                        zIndex: 2,
                      }}
                    >
                      <Typography variant="h5" fontWeight="bold" sx={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 350 }}>
                        Ideal for financial growth and expansion
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h4"
                    component="h2"
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
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", mb: 4 }}>
                    {product.description}
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    {product.features.map((feature, idx) => {
                      const [title, description] = feature.split(" - ")
                      return (
                        <Box
                          key={idx}
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
                              {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.95rem" }}>
                              {description}
                            </Typography>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>

                  <Button
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
                    component={Link}
                    to="/about"
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
          </TabPanel>
        ))}

        {/* Product Comparison Table */}
        <Box sx={{ mt: 10 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                component="h2"
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
                Product Comparison
              </Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 2 }} />
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
                Compare our loan products to find the best fit for your clients' needs
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 15px 50px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.03)",
                width: "100%",
              }}
            >
              <Table aria-label="product comparison table">
                <TableHead>
                  <TableRow>
                    {["Loan Type", "Interest Rate", "Loan Amount", "Tenure", "Processing Time"].map((header, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          bgcolor: "primary.main",
                          color: "white",
                          py: 2.5,
                          borderBottom: "none",
                          textAlign: index === 0 ? "left" : "center",
                          borderRadius: 0,
                        }}
                      >
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparisonData.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:nth-of-type(odd)": { bgcolor: "rgba(0,0,0,0.02)" },
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(18,170,158,0.05)",
                        },
                        position: "relative",
                        borderLeft: `4px solid ${item.color}`,
                      }}
                    >
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "text.primary",
                          pl: 3,
                        }}
                      >
                        {item.type}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                        }}
                      >
                        {item.rate}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                        }}
                      >
                        {item.amount}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                        }}
                      >
                        {item.tenure}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                        }}
                      >
                        {item.processing}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        </Box>

        {/* Use LenderPartners component */}
        <Box sx={{ mt: 12 }}>
          <LenderPartners />
        </Box>

        {/* CTA Section */}
        <Box sx={{ mt: 10, mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Paper
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "linear-gradient(135deg, #12AA9E 0%, #0d8a80 100%)",
                color: "white",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(18,170,158,0.3)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="rgba(255,255,255,0.05)" fillRule="evenodd"/%3E%3C/svg%3E\')',
                  backgroundSize: "20px 20px",
                  opacity: 0.5,
                },
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                fontFamily="Inter, Arial, sans-serif"
                sx={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              >
                Ready to Offer These Products?
              </Typography>
              <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", mb: 4, opacity: 0.9, fontWeight: 400 }}>
                Join our partner network today and start offering the best loan products to your clients.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                <Button
                  component="a"
                  href="https://app.moneysquad.in/sign-up/become-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  Become a Partner
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-5px)",
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  Schedule a Demo
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductsPage
