"use client"
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
  Divider,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import VerifiedIcon from "@mui/icons-material/Verified"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    title: "Financial Advisor, Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aW5kaWFuJTIwYnVzaW5lc3NtYW58ZW58MHx8fHwxNzQ2MzgzMzc5fDA&ixlib=rb-4.0.3&q=80&w=400",
    rating: 5,
    since: "2022",
    text: "Partnering with MoneySquad has been a game-changer for my financial advisory business. Their technology platform makes loan processing seamless, and I've seen my monthly income increase by 40% in just 3 months. The best part is the access to multiple lenders through a single dashboard, which has dramatically improved my loan approval rates.",
  },
  {
    id: 2,
    name: "Priya Patel",
    title: "Mortgage Broker, Delhi",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aW5kaWFuJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwwfHx8fDE3NDYzODMzNzl8MA&ixlib=rb-4.0.3&q=80&w=400",
    rating: 5,
    since: "2021",
    text: "The commission structure at MoneySquad is the best in the industry. I've been able to scale my mortgage business significantly since joining their partner network. Their quick disbursement process keeps my clients happy and coming back with referrals.",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    title: "Financial Consultant, Bangalore",
    avatar:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8aW5kaWFuJTIwYnVzaW5lc3NtYW58ZW58MHx8fHwxNzQ2MzgzMzc5fDA&ixlib=rb-4.0.3&q=80&w=400",
    rating: 5,
    since: "2023",
    text: "What sets MoneySquad apart is their partner support team. Whenever I have questions or need assistance with a complex loan case, they're always available and extremely helpful. This level of support has helped me close deals that would have otherwise fallen through.",
  },
  {
    id: 4,
    name: "Ananya Singh",
    title: "Wealth Manager, Hyderabad",
    avatar:
      "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aW5kaWFuJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwwfHx8fDE3NDYzODMzNzl8MA&ixlib=rb-4.0.3&q=80&w=400",
    rating: 4,
    since: "2022",
    text: "The training resources provided by MoneySquad have been invaluable for my team. We've been able to expand our service offerings beyond wealth management to include various loan products, creating additional revenue streams for our business.",
  },
]

const Testimonials = () => {

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, rgba(240,248,248,1) 0%, rgba(255,255,255,1) 100%)",
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
        <Box sx={{ mb: 6, textAlign: "center", position: "relative", zIndex: 1 }}>
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
            Hear from our successful partners about how MoneySquad has transformed their businesses and increased their
            revenue.
          </Typography>
        </Box>

        {/* Featured Testimonial */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          elevation={2}
          sx={{
            mb: 8,
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, #f9f9f9 0%, #f0f8f8 100%)",
          }}
        >
          {/* Quote icon */}
          <FormatQuoteIcon
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              fontSize: 60,
              color: "rgba(0, 184, 148, 0.1)",
              transform: "rotate(180deg)",
            }}
          />

          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 4, md: 5 },
                position: "relative",
                zIndex: 1,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: { xs: 0, md: 40 },
                  background: "linear-gradient(90deg, rgba(240,248,248,0) 0%, rgba(240,248,248,1) 100%)",
                  zIndex: -1,
                },
              }}
            >
              <Box sx={{ position: "relative", mb: 2 }}>
                <Avatar
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  sx={{
                    width: 160,
                    height: 160,
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
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid white",
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 20 }} />
                </Box>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "center", mb: 0.5 }}>
                {testimonials[0].name}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mb: 1.5 }}>
                {testimonials[0].title}
              </Typography>

              <Rating value={testimonials[0].rating} readOnly precision={0.5} sx={{ mb: 1 }} />

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
              md={8}
              sx={{
                p: { xs: 4, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                component="blockquote"
                sx={{
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  mb: 4,
                  position: "relative",
                  color: "text.primary",
                  fontWeight: 400,
                  pl: 3,
                  borderLeft: "4px solid",
                  borderColor: "primary.light",
                  py: 1,
                }}
              >
                {testimonials[0].text}
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: 2,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "rgba(0, 184, 148, 0.08)",
                    transform: "translateX(5px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Read Full Story
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Testimonial Cards */}
        <Typography
          variant="h5"
          component={motion.h5}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            mb: 4,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          More Success Stories
        </Typography>

        <Box sx={{ position: "relative", mb: 8 }}>
          <Grid container spacing={3}>
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
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 60,
                          height: 60,
                          mr: 2,
                          border: "2px solid white",
                          boxShadow: "0 2px 10px rgba(0, 184, 148, 0.15)",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        lineHeight: 1.6,
                        position: "relative",
                        pl: 1,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: -4,
                          top: 0,
                          bottom: 0,
                          width: 3,
                          bgcolor: "primary.main",
                          borderRadius: 4,
                          opacity: 0.6,
                        },
                      }}
                    >
                      "{testimonial.text.substring(0, 120)}..."
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "auto" }}>
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

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 2,
                px: 3,
                "&:hover": {
                  backgroundColor: "rgba(0, 184, 148, 0.08)",
                  transform: "translateX(5px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View All Testimonials
            </Button>
          </Box>
        </Box>

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
            Become a MoneySquad partner today and start growing your business with our industry-leading loan products
            and support.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
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
  )
}

export default Testimonials
