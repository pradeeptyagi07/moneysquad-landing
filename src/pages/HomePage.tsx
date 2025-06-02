"use client"
import { Box, Container, Grid, Typography, Button, Stack, Paper } from "@mui/material"
import { motion } from "framer-motion"

import Testimonials from "../components/Testimonials"
import FAQSection from "../components/FAQSection"
import CountUp from "../components/CountUp"
import PartnerNetwork from "../components/partner/PartnerNetwork"
import ProductsSection from "../components/products/ProductsSection"

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          position: "relative",
          pt: { xs: 10, md: 16 },
          pb: { xs: 12, md: 20 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.2,
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwd2l0aCUyMHBhcnRuZXJzfGVufDB8MHwxfHwxNzQ2MzgxMjA2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={10} lg={8} textAlign="center">
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                  fontFamily="Inter, Arial, sans-serif"
                  sx={{ mb: 3 }}
                >
                  Grow Your Income With India's Top Loan Partner Network
                </Typography>
                <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4, maxWidth: "800px", mx: "auto" }}>
                  Join MoneySquad's exclusive partner program and connect with 50+ lenders to offer the best loan
                  products to your clients.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }} justifyContent="center">
                  <Button
                    component="a"
                    href="https://app.moneysquad.in/sign-up/become-partner"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "white",
                      color: "primary.main",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" },
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
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
                    size="large"
                    sx={{
                      bgcolor: "secondary.main",
                      "&:hover": { bgcolor: "secondary.dark" },
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Partner Login
                  </Button>
                </Stack>

                {/* Metrics - Enhanced with animated count-up */}
                <Box sx={{ maxWidth: "700px", mx: "auto" }}>
                  <Grid container spacing={3} justifyContent="center">
                    {[
                      { value: 50, suffix: "+", label: "Lending Partners", delay: 0 },
                      { value: 30, prefix: "₹", suffix: "Cr+", label: "Monthly Disbursals", delay: 0.2 },
                      { value: 5000, suffix: "+", label: "Active Partners", delay: 0.4 },
                    ].map((stat, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: stat.delay }}
                          viewport={{ once: true }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              py: 2,
                              px: { xs: 1, sm: 3 },
                              height: "100%",
                              bgcolor: "rgba(255,255,255,0.1)",
                              backdropFilter: "blur(10px)",
                              borderRadius: 3,
                              border: "1px solid rgba(255,255,255,0.2)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                              transition: "all 0.3s ease",
                              overflow: "hidden",
                              position: "relative",
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background:
                                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
                              },
                              "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                                bgcolor: "rgba(255,255,255,0.15)",
                              },
                            }}
                          >
                            <Typography
                              variant="h3"
                              fontWeight="bold"
                              sx={{
                                mb: 1,
                                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                              <CountUp
                                end={stat.value}
                                prefix={stat.prefix || ""}
                                suffix={stat.suffix || ""}
                                delay={stat.delay}
                              />
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                opacity: 0.8,
                                textAlign: "center",
                                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Partner Network Section - Now using the separate component */}
      <PartnerNetwork />

      {/* Products Section - Now using the separate component */}
      <ProductsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />
    </Box>
  )
}

export default HomePage
