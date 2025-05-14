import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button, 
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `product-tab-${index}`,
    'aria-controls': `product-tabpanel-${index}`,
  };
}

const ProductsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const productData = [
    {
      title: "Personal Loans",
      description: "Help your clients meet their personal financial needs with quick and hassle-free personal loans.",
      features: [
        "Minimal Documentation - Simple paperwork with quick processing for faster approvals.",
        "Competitive Interest Rates - Access to the best rates from 50+ lending partners.",
        "Flexible Loan Amounts - Loans ranging from ₹50,000 to ₹50 lakhs to suit various needs."
      ],
      image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Business Loans",
      description: "Empower businesses with the capital they need to grow, expand, and thrive.",
      features: [
        "Collateral-Free Options - Unsecured business loans with minimal documentation requirements.",
        "Customized Repayment - Flexible repayment options tailored to business cash flows.",
        "Higher Loan Amounts - Business loans up to ₹2 crores with competitive interest rates."
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Professional Loans",
      description: "Specialized loan products for doctors, CAs, and other professionals to grow their practice.",
      features: [
        "Preferential Rates - Special interest rates for qualified professionals.",
        "Equipment Financing - Specialized loans for medical equipment and professional tools.",
        "Practice Expansion - Tailored solutions for clinic setup and practice growth."
      ],
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Overdrafts",
      description: "Flexible credit line for businesses to manage cash flow gaps and working capital needs.",
      features: [
        "Pay Interest Only on Usage - Cost-effective solution with interest charged only on utilized amount.",
        "Revolving Credit - Withdraw and repay as needed within the approved limit.",
        "Quick Access to Funds - Immediate availability of funds for emergency business needs."
      ],
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwSW5kaWFuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGRpc2N1c3NpbmclMjBsb2FuJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NjM4MTI5N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    }
  ];

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
              Our Loan Products
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              Offer a wide range of loan products to meet your clients' diverse financial needs
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Tab Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto" 
            allowScrollButtonsMobile
            aria-label="product tabs"
            sx={{
              '& .MuiTab-root': {
                fontSize: { xs: '0.85rem', sm: '1rem' }, 
                px: { xs: 2, sm: 3 }
              }
            }}
          >
            <Tab label="Personal Loans" {...a11yProps(0)} />
            <Tab label="Business Loans" {...a11yProps(1)} />
            <Tab label="Professional Loans" {...a11yProps(2)} />
            <Tab label="Overdrafts" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        {productData.map((product, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 2
                  }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                
                <List disablePadding sx={{ my: 3 }}>
                  {product.features.map((feature, idx) => {
                    const [title, description] = feature.split(' - ');
                    return (
                      <ListItem alignItems="flex-start" key={idx} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ mt: 0 }}>
                          <Avatar
                            sx={{
                              width: 40,
                              height: 40,
                              bgcolor: 'primary.light',
                            }}
                          >
                            <CheckCircleOutlineIcon sx={{ color: 'primary.main' }} />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="h6" component="span" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
                              {title}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary">
                              {description}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
                
                <Button 
                  variant="contained" 
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/contact"
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
        ))}

        {/* Product Comparison Table */}
        <Box sx={{ mt: 8, display: { xs: 'none', md: 'block' } }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif" textAlign="center">
            Product Comparison
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 4, boxShadow: 2 }}>
            <Table aria-label="product comparison table">
              <TableHead>
                <TableRow sx={{ bgcolor: 'action.hover' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Loan Type</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Interest Rate</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Loan Amount</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Tenure</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Processing Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { 
                    type: "Personal Loan", 
                    rate: "10.5% - 18%", 
                    amount: "₹1L - ₹1Cr", 
                    tenure: "1-8 years", 
                    processing: "24-72 hours" 
                  },
                  { 
                    type: "Business Loan", 
                    rate: "14% - 24%", 
                    amount: "₹5L - ₹5Cr", 
                    tenure: "1-5 years", 
                    processing: "2-5 days" 
                  },
                  { 
                    type: "Doctor Loan", 
                    rate: "10.5% - 14%", 
                    amount: "₹5L - ₹2Cr", 
                    tenure: "1-5 years", 
                    processing: "2-5 days" 
                  },
                  { 
                    type: "CA Loan", 
                    rate: "11% - 15%", 
                    amount: "₹5L - ₹2Cr", 
                    tenure: "1-5 years", 
                    processing: "2-5 days" 
                  },
                  { 
                    type: "Overdraft", 
                    rate: "15% - 19%", 
                    amount: "₹10L - ₹2Cr", 
                    tenure: "Annual renewal", 
                    processing: "2-5 days" 
                  }
                ].map((item, index) => (
                  <TableRow 
                    key={index}
                    sx={{ '&:nth-of-type(even)': { bgcolor: 'action.hover' } }}
                  >
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.rate}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.tenure}</TableCell>
                    <TableCell>{item.processing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* CTA Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
            Ready to Offer These Products?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
            Join our partner network today and start offering the best loan products to your clients.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to="/contact"
          >
            Become a Partner
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsPage;