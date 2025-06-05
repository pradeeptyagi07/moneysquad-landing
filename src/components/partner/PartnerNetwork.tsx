"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Partner Journey Component
const PartnerJourney = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
            background:
              "radial-gradient(circle, rgba(18,170,158,0.08) 0%, rgba(255,255,255,0) 70%)",
            borderRadius: "0 0 0 100%",
          },
        }}
      >
        <Box textAlign="center" mb={6}>
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
            Your Partner Journey
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}
          >
            Simple steps to start earning with MoneySquad's partner program.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              number: "1",
              title: "Register",
              description:
                "Complete our simple registration process to join our partner network.",
            },
            {
              number: "2",
              title: "Verification",
              description:
                "Our team verifies your details and activates your partner account.",
            },
            {
              number: "3",
              title: "Refer Clients",
              description:
                "Start referring clients for various loan products through our platform.",
            },
            {
              number: "4",
              title: "Earn Rewards",
              description:
                "Receive competitive commissions for every successful loan disbursement.",
            },
          ].map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ position: "relative", mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 90,
                      height: 90,
                      bgcolor: "primary.main",
                      color: "white",
                      fontSize: 32,
                      fontWeight: "bold",
                      mx: "auto",
                      boxShadow: "0 10px 25px rgba(18,170,158,0.3)",
                      border: "4px solid white",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 15px 35px rgba(18,170,158,0.4)",
                      },
                    }}
                  >
                    {step.number}
                  </Avatar>
                  {index < 3 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: { xs: "auto", md: "-50%" },
                        left: { xs: "50%", md: "auto" },
                        transform: {
                          xs: "translateX(-50%) translateY(30px)",
                          md: "translateY(-50%)",
                        },
                        width: { xs: 2, md: "80%" },
                        height: { xs: "30px", md: 2 },
                        bgcolor: "rgba(18,170,158,0.2)",
                        display: { xs: "none", md: "block" },
                        zIndex: -1,
                      }}
                    />
                  )}
                </Box>
                <Typography
                  variant="h5"
                  component="h4"
                  gutterBottom
                  fontWeight="bold"
                  fontFamily="Inter, Arial, sans-serif"
                  sx={{ mb: 2 }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1rem" }}
                >
                  {step.description}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
};

// Partner CTA Component
const PartnerCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Paper
        sx={{
          mt: 8,
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
          component="h3"
          gutterBottom
          fontWeight="bold"
          fontFamily="Inter, Arial, sans-serif"
          sx={{ mb: 2, textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          Ready to Grow Your Business?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 4,
            opacity: 0.9,
            fontWeight: 400,
          }}
        >
          Join our partner network today and start offering the best loan
          products to your clients.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
        >
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
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1.1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          >
            Become a Partner
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Paper>
    </motion.div>
  );
};

// Main Partner Network Component
const PartnerNetwork = () => {
  const partnerData = [
    {
      title: "Financial Advisors",
      description:
        "Expand your service offerings with our comprehensive loan products and earn additional commission.",
      // file is located at public/financial-advisor.jpg
      image: "/financial _advisor.jpg",
      stats: "30% Higher Income",
    },
    {
      title: "Property Consultants",
      description:
        "Help your clients secure financing for their property purchases and earn attractive incentives.",
      // file is located at public/property-consultant.jpg
      image: "/property _consultant.jpg",
      stats: "40% Faster Approvals",
    },
    {
      title: "Chartered Accountants",
      description:
        "Provide value-added financial services to your clients and create a new revenue stream.",
      // file is located at public/chartered-accountant.jpg
      image: "/chartered_accountant.jpg",
      stats: "50+ Loan Products",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background:
            "radial-gradient(circle at top right, rgba(18,170,158,0.05) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8} position="relative">
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
              GROW WITH US
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
              Our Partner Network
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: "primary.main",
                mx: "auto",
                mb: 3,
                borderRadius: 2,
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              Join thousands of financial advisors and consultants who are
              growing their business with MoneySquad.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} mb={8}>
          {/* Partner Cards */}
          {partnerData.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                      "& .card-image": {
                        transform: "scale(1.05)",
                      },
                      "& .stats-badge": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: 240,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={partner.image}
                      alt={partner.title}
                      className="card-image"
                      sx={{
                        transition: "transform 0.6s ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      }}
                    />
                    <Box
                      className="stats-badge"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "rgba(255,255,255,0.9)",
                        color: "primary.main",
                        py: 0.5,
                        px: 2,
                        borderRadius: 5,
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {partner.stats}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                      fontFamily="Inter, Arial, sans-serif"
                      sx={{ mb: 2 }}
                    >
                      {partner.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 3 }}
                    >
                      {partner.description}
                    </Typography>
                    <Button
                      component="a"
                      href="https://app.moneysquad.in/sign-up/become-partner"
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={
                        <ArrowRightAltIcon
                          sx={{ transition: "transform 0.3s ease" }}
                        />
                      }
                      color="primary"
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        p: 0,
                        "&:hover": {
                          background: "none",
                          "& .MuiSvgIcon-root": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Partner Journey */}
        <PartnerJourney />

        {/* CTA Banner */}
        <PartnerCTA />
      </Container>
    </Box>
  );
};

export default PartnerNetwork;
