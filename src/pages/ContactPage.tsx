import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real implementation, you would send the form data to your backend
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: 6
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              Get in touch with our team to learn more about our partner program
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                Send Us a Message
              </Typography>
              
              {formSubmitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for contacting us! We'll get back to you shortly.
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
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  margin="normal"
                />
                
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  margin="normal"
                />
                
                <TextField
                  fullWidth
                  select
                  label="Profession"
                  name="profession"
                  margin="normal"
                  defaultValue=""
                >
                  <MenuItem value="">Select your profession</MenuItem>
                  <MenuItem value="financial-advisor">Financial Advisor</MenuItem>
                  <MenuItem value="property-consultant">Property Consultant</MenuItem>
                  <MenuItem value="chartered-accountant">Chartered Accountant</MenuItem>
                  <MenuItem value="insurance-agent">Insurance Agent</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
                
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  margin="normal"
                />
                
                <FormControlLabel
                  control={<Checkbox required name="terms" color="primary" />}
                  label={
                    <Typography variant="body2">
                      I agree to the{' '}
                      <Button 
                        component={Link} 
                        to="/terms" 
                        color="primary" 
                        sx={{ p: 0, minWidth: 'auto', textTransform: 'none', fontWeight: 'bold' }}
                      >
                        Terms of Service
                      </Button>{' '}
                      and{' '}
                      <Button 
                        component={Link} 
                        to="/privacy" 
                        color="primary" 
                        sx={{ p: 0, minWidth: 'auto', textTransform: 'none', fontWeight: 'bold' }}
                      >
                        Privacy Policy
                      </Button>
                    </Typography>
                  }
                  sx={{ mt: 2 }}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 3 }}
                >
                  Submit
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
                  borderRadius: 2,
                  bgcolor: 'primary.main',
                  color: 'white'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                  Contact Information
                </Typography>
                
                <List disablePadding>
                  <ListItem disablePadding sx={{ pb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white'
                        }}
                      >
                        <PhoneIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone"
                      secondary="011-47094707"
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                      secondaryTypographyProps={{
                        color: 'white',
                        sx: { opacity: 0.8 }
                      }}
                    />
                  </ListItem>
                  
                  <ListItem disablePadding sx={{ pb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white'
                        }}
                      >
                        <EmailIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary="hello@moneysquad.in"
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                      secondaryTypographyProps={{
                        color: 'white',
                        sx: { opacity: 0.8 }
                      }}
                    />
                  </ListItem>
                  
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white'
                        }}
                      >
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Office Address"
                      secondary="935, 9th Floor, Westend Mall, Janakpuri, West Delhi 110058"
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                      secondaryTypographyProps={{
                        color: 'white',
                        sx: { opacity: 0.8 }
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
              
              {/* Map */}
              <Paper sx={{ borderRadius: 2, overflow: 'hidden', height: 300 }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8622652036694!2d77.0758!3d28.6284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d0aaaaaaaa%3A0x0!2zMjjCsDM3JzQyLjIiTiA3N8KwMDQnMzIuOSJF!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin" 
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

        <Divider sx={{ my: 6 }} />

        {/* Office Locations */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif" textAlign="center">
            Our Offices
          </Typography>
          
          <Grid container spacing={3} mt={4}>
            {[
              {
                city: "Delhi NCR (Headquarters)",
                address: "935, 9th Floor, Westend Mall, Janakpuri, West Delhi 110058",
                phone: "+91 011 4709 4707"
              },
              {
                city: "Mumbai",
                address: "Financial District, Bandra Kurla Complex, Mumbai, Maharashtra 400051",
                phone: "+91 22 1234 5678"
              },
              {
                city: "Bangalore",
                address: "Tech Park, Whitefield, Bangalore, Karnataka 560066",
                phone: "+91 80 3456 7890"
              }
            ].map((office, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                      {office.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {office.address}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
                      <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                      <Typography variant="body2">
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
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                Meet Our Partner Support Team
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Our dedicated partner support team is committed to helping you succeed. With years of experience in the financial services industry, they understand your challenges and are ready to provide solutions.
              </Typography>
              
              <List disablePadding>
                {[
                  "Personalized onboarding assistance",
                  "Dedicated relationship managers",
                  "Quick resolution of queries and issues",
                  "Regular training and updates on new products"
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item}
                      primaryTypographyProps={{ color: 'text.primary' }}
                    />
                  </ListItem>
                ))}
              </List>
              
              <Button 
                variant="contained" 
                color="primary"
                sx={{ mt: 3 }}
              >
                Schedule a Call
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwcmVwcmVzZW50YXRpdmUlMjB3aXRoJTIwaGVhZHNldHxlbnwxfHx8fDE3NDYzODE4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Support team member"
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      mb: 2
                    }}
                  />
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwcmVwcmVzZW50YXRpdmUlMjB3aXRoJTIwaGVhZHNldHxlbnwxfHx8fDE3NDYzODE4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Support team leader"
                    sx={{
                      width: '100%',
                      borderRadius: 2
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 3, 
                    bgcolor: 'secondary.main', 
                    color: 'white', 
                    borderRadius: 2, 
                    mb: 2,
                    height: 'calc(50% - 8px)'
                  }}>
                    <Typography variant="body2" paragraph fontStyle="italic">
                      "Our mission is to empower our partners with the tools and support they need to succeed."
                    </Typography>
                    <Typography variant="body2" align="right" fontWeight="bold">
                      - Partner Success Team
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    p: 3, 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    borderRadius: 2,
                    height: 'calc(50% - 8px)'
                  }}>
                    <Typography variant="body2" paragraph fontStyle="italic">
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
      </Container>
    </Box>
  );
};

export default ContactPage;