"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
  Stack,
  Divider,
  Card,
  CardContent,
  useTheme,
  alpha,
  CircularProgress,
} from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

// Import environment variables
import { API_BASE_URL } from "../config"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  profession: string
  message: string
  terms: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  profession?: string
  message?: string
  terms?: string
}

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [animateIn, setAnimateIn] = useState(false)
  const theme = useTheme()

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profession: "",
    message: "",
    terms: false,
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  const validateForm = (): boolean => {
    const errors: FormErrors = {}
    let isValid = true

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required"
      isValid = false
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ""))) {
      errors.phoneNumber = "Phone number must be 10 digits"
      isValid = false
    }

    if (!formData.terms) {
      errors.terms = "You must agree to the terms"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      })
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked,
    })

    // Clear error for this field when user checks the box
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      })
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Reset states
    setSubmitError(null)

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare payload
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        profession: formData.profession || "Other",
        message: formData.message,
      }

      // Make API call
      const response = await fetch(`${API_BASE_URL}/api/common/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        profession: "",
        message: "",
        terms: false,
      })

      setFormSubmitted(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation styles
  const fadeIn = {
    opacity: animateIn ? 1 : 0,
    transform: animateIn ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  }

  const fadeInDelay1 = {
    ...fadeIn,
    transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
  }

  const fadeInDelay2 = {
    ...fadeIn,
    transition: "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s",
  }

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)}, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.2)}, transparent 70%)`,
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          py: { xs: 7, md: 9 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ maxWidth: 800, mx: "auto", position: "relative", zIndex: 1 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{
                ...fadeIn,
                background: `linear-gradient(90deg, ${theme.palette.common.white} 0%, ${alpha(
                  theme.palette.common.white,
                  0.8,
                )} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              Get in Touch With Our Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                ...fadeInDelay1,
                opacity: animateIn ? 0.9 : 0,
                mb: 4,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              We're here to answer your questions and help you succeed with our partner program
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                ...fadeInDelay2,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
                },
                transition: "all 0.3s ease",
              }}
              component="a"
              href="#contact-form"
            >
              Contact Us Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8, position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              id="contact-form"
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                overflow: "hidden",
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "5px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                },
                transform: animateIn ? "translateY(0)" : "translateY(40px)",
                opacity: animateIn ? 1 : 0,
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                fontWeight="bold"
                fontFamily="Inter, Arial, sans-serif"
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                }}
              >
                Send Us a Message
              </Typography>

              {formSubmitted && (
                <Alert
                  severity="success"
                  sx={{
                    mb: 3,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%": {
                        boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.4)",
                      },
                      "70%": {
                        boxShadow: "0 0 0 10px rgba(76, 175, 80, 0)",
                      },
                      "100%": {
                        boxShadow: "0 0 0 0 rgba(76, 175, 80, 0)",
                      },
                    },
                  }}
                >
                  Thank you for contacting us! We'll get back to you shortly.
                </Alert>
              )}

              {submitError && (
                <Alert
                  severity="error"
                  sx={{
                    mb: 3,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  icon={<ErrorOutlineIcon />}
                >
                  {submitError}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!formErrors.firstName}
                      helperText={formErrors.firstName}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderWidth: "1px",
                            borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={!!formErrors.lastName}
                      helperText={formErrors.lastName}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderWidth: "1px",
                            borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderWidth: "1px",
                        borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
                      },
                    },
                  }}
                />

                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!formErrors.phoneNumber}
                  helperText={formErrors.phoneNumber}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderWidth: "1px",
                        borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  select
                  label="Profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderWidth: "1px",
                        borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
                      },
                    },
                  }}
                >
                  <MenuItem value="">Select your profession</MenuItem>
                  <MenuItem value="financial-advisor">Financial Advisor</MenuItem>
                  <MenuItem value="property-consultant">Property Consultant</MenuItem>
                  <MenuItem value="chartered-accountant">Chartered Accountant</MenuItem>
                  <MenuItem value="insurance-agent">Insurance Agent</MenuItem>
                  <MenuItem value="Freelancer">Freelancer</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderWidth: "1px",
                        borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
                      },
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox name="terms" color="primary" checked={formData.terms} onChange={handleCheckboxChange} />
                  }
                  label={
                    <Typography variant="body2">
                      I agree to the{" "}
                      <Button
                        component={Link}
                        to="/terms"
                        color="primary"
                        sx={{ p: 0, minWidth: "auto", textTransform: "none", fontWeight: "bold" }}
                      >
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button
                        component={Link}
                        to="/privacy"
                        color="primary"
                        sx={{ p: 0, minWidth: "auto", textTransform: "none", fontWeight: "bold" }}
                      >
                        Privacy Policy
                      </Button>
                    </Typography>
                  }
                  sx={{ mt: 2 }}
                />
                {formErrors.terms && (
                  <Typography color="error" variant="caption" sx={{ display: "block", mt: 0.5, ml: 2 }}>
                    {formErrors.terms}
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    "&:hover": {
                      background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                      boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Submit"}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  color: "white",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                  transform: animateIn ? "translateY(0)" : "translateY(40px)",
                  opacity: animateIn ? 1 : 0,
                  transition: "transform 0.6s ease-out 0.2s, opacity 0.6s ease-out 0.2s",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  fontFamily="Inter, Arial, sans-serif"
                  sx={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    mb: 3,
                  }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        bgcolor: "rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon />
                    </Box>
                    <Box>
                      <Typography fontWeight="bold" variant="body1">
                        Phone
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        011-47094707
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        bgcolor: "rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      <EmailIcon />
                    </Box>
                    <Box>
                      <Typography fontWeight="bold" variant="body1">
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        hello@moneysquad.in
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        bgcolor: "rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      <LocationOnIcon />
                    </Box>
                    <Box>
                      <Typography fontWeight="bold" variant="body1">
                        Office Address
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        935, 9th Floor, Westend Mall, Janakpuri, West Delhi 110058
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Map */}
              <Paper
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 300,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  border: `4px solid ${theme.palette.background.paper}`,
                  transform: animateIn ? "translateY(0)" : "translateY(40px)",
                  opacity: animateIn ? 1 : 0,
                  transition: "transform 0.6s ease-out 0.4s, opacity 0.6s ease-out 0.4s",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7763456723456!2d77.07942867549395!3d28.629488175649396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04aa2d7c0001%3A0x7a7b1c1c7d7d7d7d!2sWestend%20Mall%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1716382123456!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MoneySquad Office Location"
                />
              </Paper>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
            "&::before, &::after": {
              borderColor: alpha(theme.palette.primary.main, 0.3),
            },
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              px: 2,
              color: theme.palette.text.secondary,
              fontWeight: "medium",
            }}
          >
            Our Presence
          </Typography>
        </Divider>

        {/* Office Locations */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            fontWeight="bold"
            fontFamily="Inter, Arial, sans-serif"
            textAlign="center"
            sx={{
              mb: 4,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Offices
          </Typography>

          <Grid container spacing={3} mt={4}>
            {[
              {
                city: "Delhi NCR (Headquarters)",
                address: "935, 9th Floor, Westend Mall, Janakpuri, West Delhi 110058",
                phone: "+91 011 4709 4707",
                image:
                  "https://images.unsplash.com/photo-1587474260584-136574528ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGVsaGklMjBvZmZpY2V8ZW58MHx8fHwxNzQ2MzgyMDY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
              },
              {
                city: "Mumbai",
                address: "Financial District, Bandra Kurla Complex, Mumbai, Maharashtra 400051",
                phone: "+91 22 1234 5678",
                image:
                  "https://images.unsplash.com/photo-1566552881560-0be862a7c445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bXVtYmFpJTIwb2ZmaWNlfGVufDB8fHx8MTc0NjM4MjA2N3ww&ixlib=rb-4.0.3&q=80&w=1080",
              },
              {
                city: "Bangalore",
                address: "Tech Park, Whitefield, Bangalore, Karnataka 560066",
                phone: "+91 80 3456 7890",
                image:
                  "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8YmFuZ2Fsb3JlJTIwb2ZmaWNlfGVufDB8fHx8MTc0NjM4MjA2N3ww&ixlib=rb-4.0.3&q=80&w=1080",
              },
            ].map((office, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    },
                    transform: animateIn ? "translateY(0)" : "translateY(40px)",
                    opacity: animateIn ? 1 : 0,
                    transition: `transform 0.6s ease-out ${0.2 + index * 0.2}s, opacity 0.6s ease-out ${
                      0.2 + index * 0.2
                    }s, box-shadow 0.3s ease, transform 0.3s ease`,
                  }}
                >
                  <Box sx={{ position: "relative", height: 160 }}>
                    <Box
                      component="img"
                      src={office.image}
                      alt={office.city}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 16,
                        color: "white",
                        fontWeight: "bold",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      {office.city}
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {office.address}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", color: theme.palette.primary.main }}>
                      <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                      <Typography variant="body2" fontWeight="medium">
                        {office.phone}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Partner Support Section */}
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            background: theme.palette.background.paper,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            position: "relative",
            overflow: "hidden",
            transform: animateIn ? "translateY(0)" : "translateY(40px)",
            opacity: animateIn ? 1 : 0,
            transition: "transform 0.6s ease-out 1s, opacity 0.6s ease-out 1s",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: 100, md: 200 },
              height: { xs: 100, md: 200 },
              background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)}, transparent 70%)`,
              zIndex: 0,
            }}
          />

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  fontWeight="bold"
                  fontFamily="Inter, Arial, sans-serif"
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                  }}
                >
                  Meet Our Partner Support Team
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our dedicated partner support team is committed to helping you succeed. With years of experience in
                  the financial services industry, they understand your challenges and are ready to provide solutions.
                </Typography>

                <Stack spacing={2} sx={{ mb: 4 }}>
                  {[
                    "Personalized onboarding assistance",
                    "Dedicated relationship managers",
                    "Quick resolution of queries and issues",
                    "Regular training and updates on new products",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.background.paper, 0.6),
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateX(5px)",
                          boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.1)}`,
                          bgcolor: alpha(theme.palette.background.paper, 0.8),
                        },
                      }}
                    >
                      <CheckCircleIcon
                        color="primary"
                        sx={{
                          mr: 2,
                          fontSize: 24,
                        }}
                      />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Stack>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    component="a"
                    href="https://app.moneysquad.in/sign-up/become-partner"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
                      },
                      transition: "all 0.3s ease",
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
                    startIcon={<AccessTimeIcon />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                      "&:hover": {
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Support Hours
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      height: 200,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                      "&:hover img": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="About_Us_Support_Team_Lead.jpg"
                      alt="Support team member"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      height: 200,
                      mt: 2,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                      "&:hover img": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="AboutUs_Partner.jpg"
                      alt="Support team leader"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      height: "calc(50% - 8px)",
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                      color: "white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Typography variant="body1" paragraph fontStyle="italic">
                      "Our mission is to empower our partners with the tools and support they need to succeed."
                    </Typography>
                    <Typography variant="body2" align="right" fontWeight="bold">
                      - Partner Success Team
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      height: "calc(50% - 8px)",
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                      color: "white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Typography variant="body1" paragraph fontStyle="italic">
                      "We're committed to providing exceptional support and quick resolution to all partner queries."
                    </Typography>
                    <Typography variant="body2" align="right" fontWeight="bold">
                      - Support Team Lead
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 15px 50px rgba(0,0,0,0.2)",
            transform: animateIn ? "translateY(0)" : "translateY(40px)",
            opacity: animateIn ? 1 : 0,
            transition: "transform 0.6s ease-out 1.2s, opacity 0.6s ease-out 1.3s",
          }}
        >
          {/* Decorative Elements */}
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          />

          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
            fontFamily="Inter, Arial, sans-serif"
            sx={{
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready to Join Our Partner Network?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              opacity: 0.9,
              position: "relative",
              zIndex: 1,
            }}
          >
            Start your journey with MoneySquad today and unlock new opportunities for growth and success.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", position: "relative", zIndex: 1 }}>
            <Button
              component="a"
              href="https://app.moneysquad.in/sign-up/become-partner"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Apply Now
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
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

export default ContactPage
