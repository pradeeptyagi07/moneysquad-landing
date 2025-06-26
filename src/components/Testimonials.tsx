"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ravindar Singh",
    title: "Financial Advisor",
    location: "Mumbai",
    avatar: "/testimonial_1.jpg", // Indian male
    rating: 5,
    since: "2022",
    text: "Partnering with MoneySquad has been a game-changer for my financial advisory business. Their technology platform makes loan processing seamless, and I've seen my monthly income increase by 40% in just 3 months. The best part is the access to multiple lenders through a single dashboard, which has dramatically improved my loan approval rates.",
  },
  {
    id: 2,
    name: "Priya Patel",
    title: "Freelancer",
    location: "Delhi",
    avatar: "/testimonial_3.jpeg", // Indian male
    rating: 5,
    since: "2022",
    text: "The commission structure at MoneySquad is the best in the industry. I've been able to scale my unsecured loans business significantly since joining their partner network. Their quick disbursement process keeps my clients happy and coming back with referrals.",
  },
  {
    id: 3,
    name: "Vikram Hegde",
    title: "Chartered Accountant",
    location: "Bangalore",
    avatar: "/testimonial_2.jpeg", // Indian male
    rating: 5,
    since: "2023",
    text: "As a CA, I can now offer loan services to my clients as an additional service. The commission structure is transparent, and payouts are always on time. What sets MoneySquad apart is their partner support team - whenever I have questions, they're always available.",
  },
  {
    id: 4,
    name: "Vignesh Kumar",
    title: "Insurance Agent",
    location: "Chennai",
    avatar: "/testimonial_4.jpeg", // Indian male
    rating: 5,
    since: "2022",
    text: "The support team is exceptional. Whenever I face any challenges with loan processing, they're just a call away and resolve issues promptly. I've been able to expand my service offerings beyond insurance to include various loan products, creating additional revenue streams.",
  },
];




const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(240,248,248,1) 0%, rgba(255,255,255,1) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(0, 184, 148, 0.05)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 50,
          right: 50,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(0, 184, 148, 0.07)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{ mb: 6, textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <Typography
            variant="overline"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 1,
            }}
          >
            SUCCESS STORIES
          </Typography>

          <Typography
            variant="h3"
            component={motion.h3}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{
              mb: 2,
              fontWeight: 700,
              background: "linear-gradient(90deg, #00B894 0%, #00CED1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Partner Testimonials
          </Typography>

          <Box
            component={motion.div}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{
              height: 4,
              bgcolor: "primary.main",
              mx: "auto",
              mb: 2,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="subtitle1"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: "text.secondary",
            }}
          >
            Hear from our partners who have transformed their business with
            MoneySquad.
          </Typography>
        </Box>

        {/* Featured Testimonial - Redesigned for better readability */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          elevation={2}
          sx={{
            mb: 6,
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, #f9f9f9 0%, #f0f8f8 100%)",
            boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 4, md: 4 },
                position: "relative",
                zIndex: 1,
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                borderRight: {
                  xs: "none",
                  md: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                },
                borderBottom: {
                  xs: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  md: "none",
                },
              }}
            >
              <Box sx={{ position: "relative", mb: 2 }}>
                <Avatar
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  sx={{
                    width: 120,
                    height: 120,
                    border: "4px solid white",
                    boxShadow: "0 4px 20px rgba(0, 184, 148, 0.15)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 5,
                    right: 5,
                    bgcolor: "primary.main",
                    color: "white",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid white",
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontWeight: 600, textAlign: "center", mb: 0.5 }}
              >
                {testimonials[0].name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", mb: 0.5 }}
              >
                {testimonials[0].title}
              </Typography>

              <Typography
                variant="body2"
                color="primary"
                sx={{ textAlign: "center", mb: 1.5, fontWeight: 500 }}
              >
                {testimonials[0].location}
              </Typography>

              <Rating
                value={testimonials[0].rating}
                readOnly
                precision={0.5}
                sx={{ mb: 1 }}
              />

              <Typography
                variant="caption"
                sx={{
                  bgcolor: "rgba(0, 184, 148, 0.1)",
                  color: "primary.main",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 10,
                  fontWeight: 500,
                }}
              >
                Partner since {testimonials[0].since}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={9}
              sx={{
                p: { xs: 4, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: alpha(theme.palette.primary.main, 0.2),
                  mb: 2,
                }}
              />

              <Typography
                variant="h6"
                component="blockquote"
                sx={{
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "text.primary",
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                {testimonials[0].text}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Testimonial Cards - Redesigned for better readability */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {testimonials.slice(1).map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0, 184, 148, 0.1)",
                }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0, 184, 148, 0.1)",
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 64,
                        height: 64,
                        mr: 2,
                        border: "2px solid white",
                        boxShadow: "0 2px 10px rgba(0, 184, 148, 0.15)",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, lineHeight: 1.2 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {testimonial.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary.main"
                        sx={{ fontWeight: 500 }}
                      >
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      position: "relative",
                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                      p: 2.5,
                      borderRadius: 2,
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        fontSize: 20,
                        color: alpha(theme.palette.primary.main, 0.2),
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        pl: 3,
                        pr: 1,
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Rating value={testimonial.rating} readOnly size="small" />
                    <Typography
                      variant="caption"
                      sx={{
                        bgcolor: "rgba(0, 184, 148, 0.1)",
                        color: "primary.main",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 10,
                        fontWeight: 500,
                      }}
                    >
                      Since {testimonial.since}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            bgcolor: "primary.main",
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: "center",
            background: "linear-gradient(135deg, #00B894 0%, #00CED1 100%)",
            boxShadow: "0 10px 30px rgba(0, 184, 148, 0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: "absolute",
              top: -30,
              right: -30,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -40,
              left: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />

          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 2,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            Ready to Join Our Success Story?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              fontWeight: 400,
            }}
          >
            Become a MoneySquad partner today and start growing your business
            with our industry-leading loan products and support.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Become a Partner
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
