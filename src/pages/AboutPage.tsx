"use client"

import { Box, Container, Typography, Grid, Button, Paper } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ maxWidth: 800, mx: "auto" }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
            >
              About Our Partner Network
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              Join India's fastest growing loan distribution network and transform your financial advisory business
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* About Us Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
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
                Who We Are
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mb: 3, borderRadius: 2 }} />
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", mb: 3 }}>
                MoneySquad is India's premier loan distribution platform connecting financial advisors, property
                consultants, and other professionals with 50+ lending institutions across the country.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", mb: 3 }}>
                Founded in 2022, we have rapidly grown to become the partner of choice for thousands of financial
                professionals who want to expand their service offerings and increase their income.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem" }}>
                Our technology-driven platform simplifies the loan distribution process, making it efficient for
                partners to offer diverse loan products while ensuring the best rates and terms for end customers.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
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
                  src="https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwdGVhbXxlbnwxfHx8fDE3NDYzODE4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="About MoneySquad"
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
                    Transforming Financial Services
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 350 }}>
                    Building the future of loan distribution in India
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Our Mission */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 4,
            mb: 10,
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
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
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
                Our Mission
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mb: 3, borderRadius: 2 }} />
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
                To empower financial professionals with advanced technology and seamless access to multiple lending
                institutions, enabling them to better serve their clients and grow their business.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {[
                  {
                    title: "Simplify Loan Distribution",
                    description: "We make it easy for partners to connect their clients with the right loan products.",
                  },
                  {
                    title: "Maximize Partner Earnings",
                    description:
                      "Our competitive commission structure ensures partners earn more than industry standards.",
                  },
                  {
                    title: "Enable Business Growth",
                    description:
                      "We provide the tools, training, and support partners need to expand their service offerings.",
                  },
                  {
                    title: "Ensure Customer Satisfaction",
                    description: "Quick approvals and transparent processes lead to happy clients and repeat business.",
                  },
                ].map((mission, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          p: 3,
                          height: "100%",
                          borderRadius: 3,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            transform: "translateY(-5px)",
                            bgcolor: "white",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "12px",
                            bgcolor: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            mr: 2,
                            flexShrink: 0,
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            gutterBottom
                            fontWeight="bold"
                            fontFamily="Inter, Arial, sans-serif"
                          >
                            {mission.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {mission.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* Our Growth Story */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
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
                Our Growth Story
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 2 }} />
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ maxWidth: 800, mx: "auto", fontSize: "1.1rem" }}
              >
                From a small startup to India's leading loan distribution platform
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ position: "relative" }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, rgba(18,170,158,0.2), rgba(18,170,158,0.8))",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "block" },
                zIndex: 0,
              }}
            />

            {[
              {
                year: "2020",
                title: "Foundation",
                description: "MoneySquad was founded with a vision to transform loan distribution in India.",
              },
              {
                year: "2021",
                title: "First 1000 Partners",
                description: "Reached our first milestone of 1,000 active partners across 10 cities in India.",
              },
              {
                year: "2022",
                title: "Technology Expansion",
                description: "Launched our Partner Portal and enhanced the platform with AI-based loan matching.",
              },
              {
                year: "2023",
                title: "Market Leadership",
                description: "Expanded to 50+ lending partners and 5,000+ active distribution partners nationwide.",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Grid
                  container
                  spacing={4}
                  sx={{
                    mb: 5,
                    flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                  }}
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                      textAlign: {
                        xs: "left",
                        md: index % 2 === 0 ? "right" : "left",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 4,
                        bgcolor: "white",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(0,0,0,0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom
                        fontWeight="bold"
                        fontFamily="Inter, Arial, sans-serif"
                        sx={{
                          mb: 1,
                          color: "primary.main",
                        }}
                      >
                        {event.year}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h4"
                        gutterBottom
                        fontWeight="bold"
                        fontFamily="Inter, Arial, sans-serif"
                      >
                        {event.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.05rem" }}>
                        {event.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #12AA9E 0%, #0d8a80 100%)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        fontWeight: "bold",
                        boxShadow: "0 10px 30px rgba(18,170,158,0.3)",
                        border: "5px solid white",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      {index + 1}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    {/* Empty space for layout */}
                  </Grid>
                </Grid>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
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
                Statistics
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 2 }} />
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ maxWidth: 800, mx: "auto", fontSize: "1.1rem" }}
              >
                Our numbers speak for themselves. Join India's fastest-growing loan distribution network.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                  Partner Performance
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        5000+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Active Partners
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        ₹25L+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Avg. Monthly Income
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        40%
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Higher Commissions
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        72hrs
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Avg. Payout Time
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                  Business Impact
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        50+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Lending Partners
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        ₹500Cr+
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Loan Disbursals
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        85%
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Approval Rate
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        24hrs
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Avg. Approval Time
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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
            Join Our Journey
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto", mb: 4, opacity: 0.9, fontWeight: 400 }}>
            Become a part of India's fastest-growing loan distribution network and take your financial advisory business
            to new heights.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
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
            component={Link}
            to="/contact"
          >
            Become a Partner Today
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}

export default AboutPage
