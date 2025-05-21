"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I become a MoneySquad partner?",
    answer:
      "Becoming a MoneySquad partner is simple. Click on the 'Become a Partner' button, fill out the registration form, and our team will verify your details within 24-48 hours. Once verified, you'll receive your login credentials and can start referring clients immediately.",
  },
  {
    question: "What commission rates does MoneySquad offer?",
    answer:
      "MoneySquad offers industry-leading commission rates ranging from 1% to 3.5% depending on the loan product and volume. Our personal loans offer up to 3% commission, business loans up to 3.5%, and professional loans up to 3%. The more clients you refer, the higher your commission tier becomes.",
  },
  {
    question: "How quickly are commissions paid out?",
    answer:
      "Commissions are paid out on a weekly basis. Once a loan is disbursed, the commission is credited to your MoneySquad wallet within 24 hours. You can then withdraw the funds to your bank account, which typically takes 1-2 business days to process.",
  },
  {
    question: "What support does MoneySquad provide to partners?",
    answer:
      "MoneySquad provides comprehensive support to all partners, including dedicated relationship managers, marketing materials, product training, and a partner dashboard to track referrals and commissions. We also offer regular webinars and training sessions to keep you updated on new products and industry trends.",
  },
  {
    question: "Can I refer clients from anywhere in India?",
    answer:
      "Yes, MoneySquad operates across India, and you can refer clients from any location. Our digital platform makes it easy to process applications remotely, and our wide network of lenders ensures we can serve clients nationwide.",
  },
  {
    question: "What loan products can I offer to my clients?",
    answer:
      "As a MoneySquad partner, you can offer a wide range of loan products including personal loans, business loans, professional loans, and overdraft facilities. Each product category has multiple options to suit different client needs and eligibility criteria.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,248,248,1) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(0, 184, 148, 0.03)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 150,
          left: 100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(0, 184, 148, 0.05)",
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
            PARTNER RESOURCES
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
            Frequently Asked Questions
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
            Find answers to common questions about our partner program,
            commission structure, and support services.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            {/* FAQ Accordion */}
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                mb: 4,
              }}
            >
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  disableGutters
                  elevation={0}
                  sx={{
                    "&:not(:last-child)": {
                      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                    },
                    "&:before": {
                      display: "none",
                    },
                    bgcolor:
                      expanded === `panel${index}`
                        ? "rgba(0, 184, 148, 0.03)"
                        : "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color:
                            expanded === `panel${index}`
                              ? "primary.main"
                              : "text.secondary",
                          transition: "all 0.3s ease",
                        }}
                      />
                    }
                    sx={{
                      px: 4,
                      py: 2,
                      "&:hover": {
                        bgcolor: "rgba(0, 184, 148, 0.03)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: expanded === `panel${index}` ? 600 : 500,
                        color:
                          expanded === `panel${index}`
                            ? "primary.main"
                            : "text.primary",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 4, pb: 3 }}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.8,
                        position: "relative",
                        pl: 2,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 3,
                          bgcolor: "primary.main",
                          borderRadius: 4,
                          opacity: 0.6,
                        },
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} sx={{ mt: 4 }}>
            {/* Support Section */}
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 184, 148, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Need More Help?
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(0, 184, 148, 0.1)",
                      color: "primary.main",
                      mr: 2,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Email Support
                    </Typography>
                    <Link
                      href="mailto:hello@moneysquad.in"
                      underline="hover"
                      sx={{ color: "primary.main" }}
                    >
                      hello@moneysquad.in{" "}
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(0, 184, 148, 0.1)",
                      color: "primary.main",
                      mr: 2,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Partner Helpline
                    </Typography>
                    <Link
                      href="tel:+91 011-4709 4707"
                      underline="hover"
                      sx={{ color: "primary.main" }}
                    >
                      011-4709 4707
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(0, 184, 148, 0.1)",
                      color: "primary.main",
                      mr: 2,
                    }}
                  >
                    <ChatIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Live Chat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Available 10 AM - 6.30 PM (Mon-Sat)
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  boxShadow: "0 4px 15px rgba(0, 184, 148, 0.3)",
                  "&:hover": {
                    boxShadow: "0 8px 25px rgba(0, 184, 148, 0.4)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact Support
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;
