import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  Button, 
  Avatar,
  Paper
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              Who We Are
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              MoneySquad is India's premier loan distribution platform connecting financial advisors, property consultants, and other professionals with 50+ lending institutions across the country.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Founded in 2020, we have rapidly grown to become the partner of choice for thousands of financial professionals who want to expand their service offerings and increase their income.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Our technology-driven platform simplifies the loan distribution process, making it efficient for partners to offer diverse loan products while ensuring the best rates and terms for end customers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwdGVhbXxlbnwxfHx8fDE3NDYzODE4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="About MoneySquad"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 2
              }}
            />
          </Grid>
        </Grid>

        {/* Our Mission */}
        <Paper variant="outlined" sx={{ p: 5, borderRadius: 2, mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif" color="primary.main">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                To empower financial professionals with advanced technology and seamless access to multiple lending institutions, enabling them to better serve their clients and grow their business.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {[
                  { 
                    title: "Simplify Loan Distribution", 
                    description: "We make it easy for partners to connect their clients with the right loan products."
                  },
                  { 
                    title: "Maximize Partner Earnings", 
                    description: "Our competitive commission structure ensures partners earn more than industry standards."
                  },
                  { 
                    title: "Enable Business Growth", 
                    description: "We provide the tools, training, and support partners need to expand their service offerings."
                  },
                  { 
                    title: "Ensure Customer Satisfaction", 
                    description: "Quick approvals and transparent processes lead to happy clients and repeat business."
                  }
                ].map((mission, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                        {mission.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {mission.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* Our Team */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif" textAlign="center">
            Our Leadership Team
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Meet the experienced professionals who drive our vision and partner success
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                name: "Rajesh Kumar",
                title: "Founder & CEO",
                bio: "With over 15 years of experience in financial services, Rajesh founded MoneySquad to transform how loan products are distributed in India.",
                image: "https://images.unsplash.com/photo-1560264357-8d9202250f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aW5kaWFuJTIwYnVzaW5lc3MlMjBtYW58ZW58MXx8fHwxNzQ2MzgyMDYyfDA&ixlib=rb-4.0.3&q=80&w=1080"
              },
              {
                name: "Priya Sharma",
                title: "Chief Operating Officer",
                bio: "Priya oversees the day-to-day operations, ensuring our partners receive exceptional service and support for their business growth.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aW5kaWFuJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NDYzODIwNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              },
              {
                name: "Vikram Singh",
                title: "Chief Technology Officer",
                bio: "Vikram leads our technology initiatives, creating innovative solutions that keep our platform at the cutting edge of the industry.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MnxcIGluZGlhbiUyMHRlY2glMjBleGVjdXRpdmV8ZW58MXx8fHwxNzQ2MzgyMDYyfDA&ixlib=rb-4.0.3&q=80&w=1080"
              }
            ].map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle2" color="primary.main" gutterBottom>
                      {member.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Company Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif" textAlign="center">
            Our Growth Story
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ maxWidth: 800, mx: 'auto', mb: 5 }}>
            From a small startup to India's leading loan distribution platform
          </Typography>

          <Box sx={{ position: 'relative', px: 2 }}>
            {/* Timeline Line */}
            <Box sx={{ 
              position: 'absolute', 
              left: '50%', 
              top: 0, 
              bottom: 0, 
              width: 2, 
              bgcolor: 'divider',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' }
            }} />

            {[
              {
                year: "2020",
                title: "Foundation",
                description: "MoneySquad was founded with a vision to transform loan distribution in India."
              },
              {
                year: "2021",
                title: "First 1000 Partners",
                description: "Reached our first milestone of 1,000 active partners across 10 cities in India."
              },
              {
                year: "2022",
                title: "Technology Expansion",
                description: "Launched our partner mobile app and enhanced the platform with AI-based loan matching."
              },
              {
                year: "2023",
                title: "Market Leadership",
                description: "Expanded to 50+ lending partners and 5,000+ active distribution partners nationwide."
              }
            ].map((event, index) => (
              <Grid 
                container 
                key={index} 
                spacing={4} 
                sx={{ 
                  mb: 4,
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }
                }}
              >
                <Grid item xs={12} md={5} sx={{ 
                  textAlign: { 
                    xs: 'left', 
                    md: index % 2 === 0 ? 'right' : 'left' 
                  }
                }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                    {event.year}
                  </Typography>
                  <Typography variant="h6" component="h4" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2} sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'primary.main',
                      fontSize: 20,
                      fontWeight: 'bold',
                      zIndex: 1
                    }}
                  >
                    {index + 1}
                  </Avatar>
                </Grid>
                <Grid item xs={12} md={5}>
                  {/* Empty space for layout */}
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 2,
            background: 'linear-gradient(to right, #12AA9E, #0d8a80)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
            Join Our Journey
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 3, opacity: 0.9 }}>
            Become a part of India's fastest-growing loan distribution network and take your financial advisory business to new heights.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              bgcolor: 'white', 
              color: 'primary.main',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
            }}
            component={Link}
            to="/contact"
          >
            Become a Partner Today
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;