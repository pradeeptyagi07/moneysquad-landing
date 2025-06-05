"use client"

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material"
import { Link } from "react-router-dom"
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined"
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import CheckIcon from "@mui/icons-material/Check"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { motion } from "framer-motion"

const BenefitsPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          color: "white",
          py: { xs: 8, md: 10 },
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
            src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Benefits Background"
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
                Partner Benefits
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                Join our partner network and unlock a world of opportunities and advantages
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

      {/* Main Benefits */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Box textAlign="center" sx={{ mb: 8 }}>
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
                WHY PARTNER WITH US
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
                  display: "inline-block",
                }}
              >
                Key Partner Benefits
              </Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 2 }} />
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
                Discover how partnering with MoneySquad can transform your business and increase your revenue
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: "Higher Earnings",
                description:
                  "Earn up to 40% higher commissions compared to industry standards with our competitive payout structure.",
                icon: <MonetizationOnOutlinedIcon fontSize="large" />,
                image:
                  "Benefits - higher earnings.jpg",
                points: ["Transparent commission structure", "Faster payout cycles", "Performance-based incentives"],
                color: "#FF6B6B",
              },
              {
                title: "Advanced Technology",
                description:
                  "Access our cutting-edge partner portal and mobile app to manage your business efficiently.",
                icon: <DevicesOutlinedIcon fontSize="large" />,
                image:
                  "Benefits  Advanced_Technology.jpg",
                points: [
                  "Real-time application tracking",
                  "Digital document submission",
                  "Comprehensive analytics dashboard",
                ],
                color: "#4ECDC4",
              },
              {
                title: "Business Growth",
                description: "Expand your service offerings and grow your client base with our diverse loan products.",
                icon: <TrendingUpOutlinedIcon fontSize="large" />,
                image:
                  "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
                points: ["Access to 50+ lending partners", "Multiple loan product categories", "Higher approval rates"],
                color: "#6B5B95",
              },
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                      },
                      position: "relative",
                    }}
                  >
                    <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
                      <Box
                        component="img"
                        src={benefit.image}
                        alt={benefit.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 70%)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "white",
                          color: benefit.color,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                          zIndex: 1,
                        }}
                      >
                        {benefit.icon}
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight="bold"
                        fontFamily="Inter, Arial, sans-serif"
                        sx={{ mb: 2 }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                        {benefit.description}
                      </Typography>

                      <List disablePadding sx={{ mt: "auto" }}>
                        {benefit.points.map((point, idx) => (
                          <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <Box
                                sx={{
                                  width: 24,
                                  height: 24,
                                  borderRadius: "50%",
                                  bgcolor: `${benefit.color}20`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <CheckIcon sx={{ fontSize: 16, color: benefit.color }} />
                              </Box>
                            </ListItemIcon>
                            <ListItemText
                              primary={point}
                              primaryTypographyProps={{
                                variant: "body2",
                                color: "text.secondary",
                                fontWeight: 500,
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Benefits */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.05)",
                position: "relative",
                overflow: "hidden",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "30%",
                  height: "30%",
                  background: "radial-gradient(circle, rgba(18,170,158,0.08) 0%, rgba(255,255,255,0) 70%)",
                  borderRadius: "0 0 0 100%",
                },
              }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    fontWeight="bold"
                    fontFamily="Inter, Arial, sans-serif"
                    sx={{
                      mb: 3,
                      background: "linear-gradient(90deg, #333333 0%, #12AA9E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    More Partner Advantages
                  </Typography>

                  <List disablePadding>
                    {[
                      {
                        title: "Customized Solutions",
                        description:
                          "Tailor loan products to meet your clients' specific needs with our flexible options.",
                        icon: <SettingsOutlinedIcon fontSize="large" />,
                        color: "#FF6B6B",
                      },
                      {
                        title: "Dedicated Support",
                        description: "Get assistance from our expert team at every step of the loan process.",
                        icon: <CardMembershipOutlinedIcon fontSize="large" />,
                        color: "#4ECDC4",
                      },
                      {
                        title: "Training Resources",
                        description: "Access comprehensive training materials to enhance your product knowledge.",
                        icon: <CardMembershipOutlinedIcon fontSize="large" />,
                        color: "#6B5B95",
                      },
                      {
                        title: "Secure Transactions",
                        description: "Ensure your clients' data is protected with our bank-grade security systems.",
                        icon: <SecurityOutlinedIcon fontSize="large" />,
                        color: "#FE9A76",
                      },
                    ].map((advantage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ListItem
                          alignItems="flex-start"
                          sx={{
                            py: 2,
                            px: 3,
                            mb: 2,
                            borderRadius: 3,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "white",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          <ListItemIcon>
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 3,
                                bgcolor: `${advantage.color}15`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: advantage.color,
                                boxShadow: `0 8px 20px ${advantage.color}20`,
                              }}
                            >
                              {advantage.icon}
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                variant="h6"
                                component="h3"
                                fontWeight="bold"
                                fontFamily="Inter, Arial, sans-serif"
                                sx={{ mb: 0.5 }}
                              >
                                {advantage.title}
                              </Typography>
                            }
                            secondary={
                              <Typography variant="body2" color="text.secondary">
                                {advantage.description}
                              </Typography>
                            }
                            sx={{ ml: 2 }}
                          />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 3,
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      boxShadow: "0 8px 20px rgba(18,170,158,0.2)",
                      "&:hover": {
                        boxShadow: "0 12px 25px rgba(18,170,158,0.3)",
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                    component={Link}
                    to="/contact"
                  >
                    Become a Partner
                  </Button>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                        transform: "perspective(1000px) rotateY(5deg)",
                        transition: "all 0.5s ease",
                        "&:hover": {
                          transform: "perspective(1000px) rotateY(0deg)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src="More_Partner_Advantages.jpg"
                        alt="Partner Benefits"
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
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent 70%)",
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
                          Partner Success Stories
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 350 }}>
                          Join thousands of successful partners across India
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Box>

        {/* Statistics */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
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
                Our Impact in Numbers
              </Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 2 }} />
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
                See how we're transforming the loan distribution landscape in India
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {[
              { value: "50+", label: "Lending Partners", color: "#FF6B6B" },
              { value: "5000+", label: "Active Partners", color: "#4ECDC4" },
              { value: "₹500Cr+", label: "Loan Disbursals", color: "#6B5B95" },
              { value: "24hrs", label: "Average Approval Time", color: "#FE9A76" },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      textAlign: "center",
                      borderRadius: 4,
                      boxShadow: "0 15px 50px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.03)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "5px",
                        background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        mb: 1,
                        fontWeight: "bold",
                        background: `linear-gradient(90deg, #333333 0%, ${stat.color} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontWeight={500}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
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
                Ready to Boost Your Income?
              </Typography>
              <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", mb: 4, opacity: 0.9, fontWeight: 400 }}>
                Join our partner network today and start offering the best loan products to your clients.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
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
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  to="/contact"
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

export default BenefitsPage
