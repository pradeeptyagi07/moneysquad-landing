import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  TextField, 
  Card, 
  CardContent, 
  CardMedia,
  Avatar,
  Stack,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        position: 'relative',
        pt: { xs: 6, md: 10 },
        pb: { xs: 10, md: 14 }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.2,
        }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwd2l0aCUyMHBhcnRuZXJzfGVufDB8MHwxfHwxNzQ2MzgxMjA2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                Grow Your Income With India's Top Loan Partner Network
              </Typography>
              <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 3 }}>
                Join MoneySquad's exclusive partner program and connect with 50+ lenders to offer the best loan products to your clients.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
                  }}
                  component={Link}
                  to="/contact"
                >
                  Become a Partner
                </Button>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    bgcolor: 'secondary.main',
                    '&:hover': { bgcolor: 'secondary.dark' } 
                  }}
                  component={Link}
                  to="/"
                >
                  Partner Login
                </Button>
              </Stack>

              {/* Metrics */}
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="h4" fontWeight="bold">50+</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>Lending Partners</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" fontWeight="bold">₹30Cr+</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>Monthly Disbursals</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" fontWeight="bold">5000+</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>Active Partners</Typography>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Paper 
                elevation={4} 
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  mx: 'auto',
                  maxWidth: 400
                }}
              >
                <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                  Start Your Journey Today
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="tel"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="address-level2"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Register as Partner
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        
        {/* Mobile Form */}
        <Container sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Start Your Journey Today
            </Typography>
            <Box component="form" noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name-mobile"
                label="Full Name"
                name="name"
                autoComplete="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone-mobile"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Register as Partner
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Partner Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Our Partner Network
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              Join thousands of financial advisors and consultants who are growing their business with MoneySquad.
            </Typography>
          </Box>

          <Grid container spacing={3} mb={6}>
            {/* Partner Cards */}
            {[
              {
                title: "Financial Advisors",
                description: "Expand your service offerings with our comprehensive loan products and earn additional commission.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwY2xpZW50c3xlbnwwfHx8fDE3NDYzODEyMzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              },
              {
                title: "Property Consultants",
                description: "Help your clients secure financing for their property purchases and earn attractive incentives.",
                image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwY2xpZW50c3xlbnwwfHx8fDE3NDYzODEyMzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              },
              {
                title: "Chartered Accountants",
                description: "Provide value-added financial services to your clients and create a new revenue stream.",
                image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwY2xpZW50c3xlbnwwfHx8fDE3NDYzODEyMzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              }
            ].map((partner, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={partner.image}
                    alt={partner.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                      {partner.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {partner.description}
                    </Typography>
                    <Button 
                      endIcon={<ArrowForwardIcon />} 
                      color="primary"
                      sx={{ 
                        textTransform: 'none', 
                        fontWeight: 500,
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Partner Journey */}
          <Paper variant="outlined" sx={{ p: 4, borderRadius: 2 }}>
            <Box textAlign="center" mb={4}>
              <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                Your Partner Journey
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                Simple steps to start earning with MoneySquad's partner program.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {[
                { number: "1", title: "Register", description: "Complete our simple registration process to join our partner network." },
                { number: "2", title: "Verification", description: "Our team verifies your details and activates your partner account." },
                { number: "3", title: "Refer Clients", description: "Start referring clients for various loan products through our platform." },
                { number: "4", title: "Earn Rewards", description: "Receive competitive commissions for every successful loan disbursement." }
              ].map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'primary.light',
                      color: 'primary.main',
                      fontSize: 24,
                      fontWeight: 'bold',
                      mx: 'auto',
                      mb: 2,
                      border: '2px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    {step.number}
                  </Avatar>
                  <Typography variant="h6" component="h4" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Testimonials */}
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {[
              {
                name: "Priya Sharma",
                title: "Financial Advisor, Mumbai",
                testimonial: "MoneySquad has transformed my business. The platform's access to multiple lenders has increased my loan approval rates by 40%, and the quick disbursals keep my clients happy.",
                avatar: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwY2xpZW50c3xlbnwwfHx8fDE3NDYzODEyMzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              },
              {
                name: "Rajesh Kumar",
                title: "Property Consultant, Delhi",
                testimonial: "The partner dashboard makes tracking applications and commissions effortless. I've seen a 30% increase in my monthly income since joining MoneySquad's partner network.",
                avatar: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvcnMlMjBtZWV0aW5nJTIwY2xpZW50c3xlbnwwfHx8fDE3NDYzODEyMzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      sx={{ width: 64, height: 64, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" component="h4" fontWeight="semibold" fontFamily="Inter, Arial, sans-serif">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="secondary.main">
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    "{testimonial.testimonial}"
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* CTA Banner */}
          <Paper
            sx={{
              mt: 6,
              p: 4,
              borderRadius: 2,
              background: 'linear-gradient(to right, #12AA9E, #0d8a80)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Ready to Grow Your Business?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 3, opacity: 0.9 }}>
              Join our partner network today and start offering the best loan products to your clients.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
                }}
                component={Link}
                to="/contact"
              >
                Become a Partner
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'secondary.main',
                  '&:hover': { bgcolor: 'rgba(107, 154, 196, 0.9)' } 
                }}
                component={Link}
                to="/about"
              >
                Learn More
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* Products Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Products
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              Offer a wide range of loan products to meet your clients' diverse financial needs.
            </Typography>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: { xs: '100%', md: 600 }, mx: 'auto', mb: 4 }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange} 
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label="Personal Loans" id="tab-0" aria-controls="tabpanel-0" />
              <Tab label="Business Loans" id="tab-1" aria-controls="tabpanel-1" />
              <Tab label="Professional Loans" id="tab-2" aria-controls="tabpanel-2" />
              <Tab label="Overdrafts" id="tab-3" aria-controls="tabpanel-3" />
            </Tabs>
          </Box>

          {/* Tab Panels */}
          <div
            role="tabpanel"
            hidden={activeTab !== 0}
            id="tabpanel-0"
            aria-labelledby="tab-0"
          >
            <ProductTabPanel 
              title="Personal Loans"
              description="Help your clients meet their personal financial needs with quick and hassle-free personal loans."
              features={[
                "Minimal Documentation",
                "Competitive Interest Rates",
                "Flexible Loan Amounts"
              ]}
              image="https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div
            role="tabpanel"
            hidden={activeTab !== 1}
            id="tabpanel-1"
            aria-labelledby="tab-1"
          >
            <ProductTabPanel 
              title="Business Loans"
              description="Empower businesses with the capital they need to grow, expand, and thrive."
              features={[
                "Collateral-Free Options",
                "Customized Repayment",
                "Higher Loan Amounts"
              ]}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div
            role="tabpanel"
            hidden={activeTab !== 2}
            id="tabpanel-2"
            aria-labelledby="tab-2"
          >
            <ProductTabPanel 
              title="Professional Loans"
              description="Specialized loan products for doctors, CAs, and other professionals to grow their practice."
              features={[
                "Preferential Rates",
                "Equipment Financing",
                "Practice Expansion"
              ]}
              image="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div
            role="tabpanel"
            hidden={activeTab !== 3}
            id="tabpanel-3"
            aria-labelledby="tab-3"
          >
            <ProductTabPanel 
              title="Overdrafts"
              description="Flexible credit line for businesses to manage cash flow gaps and working capital needs."
              features={[
                "Pay Interest Only on Usage",
                "Revolving Credit",
                "Quick Access to Funds"
              ]}
              image="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>

          {/* CTA Section */}
          <Box textAlign="center" mt={6}>
            <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Ready to Offer These Products?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
              Join our partner network today and start offering the best loan products to your clients.
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              endIcon={<ArrowForwardIcon />}
              size="large"
              component={Link}
              to="/contact"
            >
              Become a Partner
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

// Product Tab Panel Component
interface ProductTabPanelProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ProductTabPanel = ({ title, description, features, image }: ProductTabPanelProps) => {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            borderRadius: 2,
            boxShadow: 2
          }}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {description}
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.light',
                  mr: 2
                }}
              >
                <CheckCircleOutlineIcon sx={{ color: 'primary.main' }} />
              </Avatar>
              <Box>
                <Typography variant="h6" component="h4" gutterBottom fontFamily="Inter, Arial, sans-serif" fontWeight="semibold">
                  {feature}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Simple description could be added here if needed */}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 3 }}
          component={Link}
          to="/products"
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomePage;