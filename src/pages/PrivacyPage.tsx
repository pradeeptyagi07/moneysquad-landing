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

const PrivacyPage = () => {
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
              Privacy Policy
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              How we collect, use, and protect your information
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
          <Typography color="text.primary">Privacy Policy</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
            MoneySquad Privacy Policy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Last updated: January 15, 2023
          </Typography>

          <Typography variant="body1" paragraph>
            At MoneySquad, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              1. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We collect the following types of information:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li><strong>Personal Information:</strong> Name, email address, phone number, address, date of birth, and PAN number.</li>
              <li><strong>Professional Information:</strong> Business name, GST number, professional qualifications, and work experience.</li>
              <li><strong>Financial Information:</strong> Bank account details for commission payments.</li>
              <li><strong>Client Information:</strong> Information about your clients that you submit through our platform.</li>
              <li><strong>Usage Data:</strong> Information about how you use our platform, including log data, device information, and cookies.</li>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use the information we collect for the following purposes:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>To verify your identity and create your partner account</li>
              <li>To provide and maintain our services</li>
              <li>To process loan applications submitted by you</li>
              <li>To calculate and pay your commissions</li>
              <li>To communicate with you about our services, updates, and promotions</li>
              <li>To improve our platform and services</li>
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraud and misuse of our platform</li>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              3. Information Sharing and Disclosure
            </Typography>
            <Typography variant="body1" paragraph>
              We may share your information with:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li><strong>Lending Partners:</strong> We share client information with our lending partners to process loan applications.</li>
              <li><strong>Service Providers:</strong> We engage third-party companies to perform services on our behalf, such as payment processing, data analysis, and customer support.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to legal processes.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </Typography>
            <Typography variant="body1" paragraph>
              We do not sell your personal information to third parties.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              4. Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </Typography>
            <Typography variant="body1" paragraph>
              These measures include:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication procedures</li>
              <li>Secure data storage practices</li>
            </Typography>
            <Typography variant="body1" paragraph>
              While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              5. Your Rights
            </Typography>
            <Typography variant="body1" paragraph>
              You have the following rights regarding your information:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request correction of your personal information if it is inaccurate or incomplete.</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information in certain circumstances.</li>
              <li><strong>Restriction:</strong> You can request restriction of processing of your personal information.</li>
              <li><strong>Data Portability:</strong> You can request a copy of your personal information in a structured, machine-readable format.</li>
              <li><strong>Objection:</strong> You can object to the processing of your personal information in certain circumstances.</li>
            </Typography>
            <Typography variant="body1" paragraph>
              To exercise these rights, please contact us at privacy@moneysquad.in.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              6. Client Data Protection
            </Typography>
            <Typography variant="body1" paragraph>
              As a partner, you must:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>Obtain proper consent from clients before submitting their information</li>
              <li>Inform clients about how their information will be used</li>
              <li>Only collect information that is necessary for the loan application</li>
              <li>Keep client information confidential and secure</li>
              <li>Not use client information for any purpose other than submitting loan applications through our platform</li>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              7. Cookies and Tracking Technologies
            </Typography>
            <Typography variant="body1" paragraph>
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information.
            </Typography>
            <Typography variant="body1" paragraph>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              8. Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph>
              Our platform is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to remove that information from our servers.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              9. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </Typography>
            <Typography variant="body1" paragraph>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
              10. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy, please contact us at:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
              <li>Email: privacy@moneysquad.in</li>
              <li>Phone: 011-47094707</li>
              <li>Address: 935, 9th Floor, Westend Mall, Janakpuri, West Delhi 110058</li>
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', mt: 4 }}>
            By using our platform and services, you acknowledge that you have read and understood this Privacy Policy.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPage;