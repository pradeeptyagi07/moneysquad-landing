import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  Button, 
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { Link } from 'react-router-dom';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BenefitsPage = () => {
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
              Partner Benefits
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              Join our partner network and unlock a world of opportunities and advantages
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            {
              title: "Higher Earnings",
              description: "Earn up to 40% higher commissions compared to industry standards with our competitive payout structure.",
              icon: <MonetizationOnOutlinedIcon fontSize="large" />,
              image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
              points: [
                "Transparent commission structure",
                "Faster payout cycles",
                "Performance-based incentives"
              ]
            },
            {
              title: "Advanced Technology",
              description: "Access our cutting-edge partner portal and mobile app to manage your business efficiently.",
              icon: <DevicesOutlinedIcon fontSize="large" />,
              image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
              points: [
                "Real-time application tracking",
                "Digital document submission",
                "Comprehensive analytics dashboard"
              ]
            },
            {
              title: "Business Growth",
              description: "Expand your service offerings and grow your client base with our diverse loan products.",
              icon: <TrendingUpOutlinedIcon fontSize="large" />,
              image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
              points: [
                "Access to 50+ lending partners",
                "Multiple loan product categories",
                "Higher approval rates"
              ]
            }
          ].map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                  image={benefit.image}
                  alt={benefit.title}
                  sx={{
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.light', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'primary.main',
                      mb: 2
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {benefit.description}
                  </Typography>
                  <List disablePadding sx={{ mt: 'auto' }}>
                    {benefit.points.map((point, idx) => (
                      <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={point} 
                          primaryTypographyProps={{ 
                            variant: 'body2', 
                            color: 'text.secondary' 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Benefits */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              More Partner Advantages
            </Typography>
            
            <List disablePadding>
              {[
                { 
                  title: "Customized Solutions", 
                  description: "Tailor loan products to meet your clients' specific needs with our flexible options.",
                  icon: <SettingsOutlinedIcon fontSize="large" sx={{ color: 'secondary.main' }} />
                },
                { 
                  title: "Dedicated Support", 
                  description: "Get assistance from our expert team at every step of the loan process.",
                  icon: <CardMembershipOutlinedIcon fontSize="large" sx={{ color: 'secondary.main' }} />
                },
                { 
                  title: "Training Resources", 
                  description: "Access comprehensive training materials to enhance your product knowledge.",
                  icon: <CardMembershipOutlinedIcon fontSize="large" sx={{ color: 'secondary.main' }} />
                },
                { 
                  title: "Secure Transactions", 
                  description: "Ensure your clients' data is protected with our bank-grade security systems.",
                  icon: <SecurityOutlinedIcon fontSize="large" sx={{ color: 'secondary.main' }} />
                }
              ].map((advantage, index) => (
                <ListItem 
                  key={index} 
                  alignItems="flex-start"
                  sx={{ py: 2 }}
                >
                  <ListItemIcon>
                    <Box 
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        borderRadius: '50%', 
                        bgcolor: 'secondary.light', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'secondary.main',
                      }}
                    >
                      {advantage.icon}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" component="h3" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                        {advantage.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {advantage.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            
            <Button 
              variant="contained" 
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 3 }}
              component={Link}
              to="/contact"
            >
              Become a Partner
            </Button>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Partner Benefits"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 2
              }}
            />
          </Grid>
        </Grid>

        {/* Testimonial */}
        <Paper sx={{ p: 4, borderRadius: 2, mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8QjJCJTIwZmluYW5jaWFsJTIwcGFydG5lcnNoaXAlMjBiZW5lZml0c3xlbnwxfHx8fDE3NDYzODE0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Partner Testimonial"
                sx={{
                  width: '100%',
                  borderRadius: 2
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ pl: { md: 4 } }}>
                <FormatQuoteIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" component="p" paragraph fontStyle="italic">
                  "MoneySquad has transformed my financial advisory business. The platform's technology, diverse loan products, and quick approvals have helped me increase my client base by 30% in just six months."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" component="p" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                    Rahul Sharma
                  </Typography>
                  <Typography variant="body2" color="secondary.main" sx={{ ml: 1 }}>
                    Financial Advisor, Mumbai
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', mt: 1 }}>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <StarIcon key={index} sx={{ color: 'warning.main', fontSize: 20 }} />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Statistics */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {[
            { value: "50+", label: "Lending Partners" },
            { value: "5000+", label: "Active Partners" },
            { value: "₹500Cr+", label: "Loan Disbursals" },
            { value: "24hrs", label: "Average Approval Time" }
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" component="p" color="primary.main" fontWeight="bold" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
            Ready to Boost Your Income?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
            Join our partner network today and start offering the best loan products to your clients.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              component={Link}
              to="/contact"
            >
              Become a Partner
            </Button>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              component={Link}
              to="/contact"
            >
              Schedule a Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsPage;