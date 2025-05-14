import { 
  Box, 
  Container, 
  Typography, 
  Paper,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TermsPage = () => {
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
              Terms of Service
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              Please read these terms carefully before using our platform
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Breadcrumbs */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <MuiLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MuiLink>
          <Typography color="text.primary">Terms of Service</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
            MoneySquad Partner Terms & Conditions
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Last updated: January 15, 2023
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to MoneySquad. By accessing our partner platform and services, you agree to be bound by these Terms of Service. Please read them carefully.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              1. Definitions
            </Typography>
            <Typography variant="body1" paragraph>
              "MoneySquad," "we," "us," and "our" refer to MoneySquad Financial Services Private Limited, a company registered under the Companies Act, 2013.
            </Typography>
            <Typography variant="body1" paragraph>
              "Partner," "you," and "your" refer to the individual or entity that registers as a partner on our platform.
            </Typography>
            <Typography variant="body1" paragraph>
              "Platform" refers to our website, partner portal, mobile applications, and other digital services.
            </Typography>
            <Typography variant="body1" paragraph>
              "Services" refers to the loan distribution and related services we provide.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              2. Partner Eligibility
            </Typography>
            <Typography variant="body1" paragraph>
              To become a MoneySquad partner, you must:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>Be at least 18 years of age</li>
              <li>Be a resident of India</li>
              <li>Have a valid PAN card and GST number (if applicable)</li>
              <li>Complete our verification process</li>
              <li>Comply with all applicable laws and regulations</li>
            </Typography>
            <Typography variant="body1" paragraph>
              We reserve the right to reject any partner application or terminate a partnership at our sole discretion.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              3. Services and Commission Structure
            </Typography>
            <Typography variant="body1" paragraph>
              As a MoneySquad partner, you can:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>Refer clients for various loan products offered on our platform</li>
              <li>Track loan applications through our partner portal</li>
              <li>Earn commissions on successful loan disbursals</li>
              <li>Access training and marketing materials</li>
            </Typography>
            <Typography variant="body1" paragraph>
              Commission rates vary by loan product and lender. The current commission structure is available in your partner dashboard and may be updated from time to time at our discretion.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              4. Partner Obligations
            </Typography>
            <Typography variant="body1" paragraph>
              As a MoneySquad partner, you agree to:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>Provide accurate and complete information during registration</li>
              <li>Keep your login credentials secure</li>
              <li>Not misrepresent the services or make false promises to clients</li>
              <li>Comply with all applicable laws, including but not limited to data protection and privacy laws</li>
              <li>Obtain proper consent from clients before submitting their information</li>
              <li>Not engage in any fraudulent, deceptive, or unethical practices</li>
              <li>Maintain the confidentiality of all client information</li>
              <li>Not use our platform to promote any other competing services</li>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              5. Payments
            </Typography>
            <Typography variant="body1" paragraph>
              Commissions are paid directly to your registered bank account. Payments are typically processed within 7 working days after loan disbursal.
            </Typography>
            <Typography variant="body1" paragraph>
              All payments are subject to TDS as per applicable laws. You are responsible for your own tax liabilities.
            </Typography>
            <Typography variant="body1" paragraph>
              If there are any disputes regarding commissions, you must notify us within 30 days of the payment date.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              6. Term and Termination
            </Typography>
            <Typography variant="body1" paragraph>
              This agreement shall remain in effect until terminated by either party. Either party may terminate this agreement at any time, with or without cause, by providing written notice to the other party.
            </Typography>
            <Typography variant="body1" paragraph>
              Upon termination, you shall cease to use our platform and services. Any pending commissions for loans disbursed before termination will be paid according to our payment schedule.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              7. Confidentiality
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to keep confidential all information relating to our business, operations, and clients that you receive through your partnership.
            </Typography>
            <Typography variant="body1" paragraph>
              This obligation continues even after the termination of our partnership.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              8. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              To the maximum extent permitted by law, MoneySquad shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, goodwill, or other intangible losses resulting from your use of our platform and services.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              9. Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              We may modify these terms at any time by posting the updated terms on our website or partner portal. Your continued use of our platform after such changes constitutes your acceptance of the new terms.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              10. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These terms and your use of our platform shall be governed by and construed in accordance with the laws of India. Any dispute arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', mt: 4 }}>
            By registering as a MoneySquad partner, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 4 }}>
            If you have any questions about these Terms, please contact us at legal@moneysquad.in.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsPage;