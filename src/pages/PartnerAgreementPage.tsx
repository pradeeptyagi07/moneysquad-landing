import { Box, Container, Typography, Paper, Breadcrumbs, Link as MuiLink, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import GavelIcon from "@mui/icons-material/Gavel"

const PartnerAgreementPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #00796b 0%, #009688 100%)",
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: "url('/abstract-geometric-flow.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ maxWidth: 800, mx: "auto", position: "relative", zIndex: 2 }}>
            <GavelIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                mb: 3,
              }}
            >
              Partner Service Agreement
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2, fontWeight: "normal" }}>
              Terms and conditions for MoneySquad partners
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
          <Typography color="text.primary">Partner Agreement</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            fontWeight="bold"
            fontFamily="Inter, Arial, sans-serif"
            sx={{ color: "#00796b" }}
          >
            MoneySquad Partner Service Agreement
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Last updated: 30th June, 2025
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            <strong>Effective Date:</strong> Same as Acceptance or registration date.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              Introduction
            </Typography>
            <Typography variant="body1" paragraph>
              By registering as a Partner on the MoneySquad Partner Platform (https://app.moneysquad.in), you
              ("Partner") agree to the following Partner Service Agreement ("Agreement") with:
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Altmoney Technologies Private Limited</strong>, a company incorporated under the Companies Act,
              2013, having its registered office at 935, 9th Floor, Westend Mall, Janakpuri, Delhi – 110058 (hereinafter
              referred to as "Altmoney", which owns and operates the brand MoneySquad®, a registered trademark).
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              1. Purpose
            </Typography>
            <Typography variant="body1" paragraph>
              This Agreement governs your engagement as a Partner for sourcing and referring eligible leads for
              financial/loan products—such as but not limited to Personal Loans, Business Loans, Professional Loans, and
              Overdrafts—through the MoneySquad® team or the partner platform.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              2. Acceptance
            </Typography>
            <Typography variant="body1" paragraph>
              By checking the box during signup and clicking 'Register/Sign-up', you:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Confirm that you have read, understood, and agree to the terms of this Agreement.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Acknowledge this constitutes a legally binding contract under the Indian Contract Act, 1872 and the
                Information Technology Act, 2000 or any amendments to these acts.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Provide consent to receive transactional and partner-related communication via SMS, email, WhatsApp, or
                phone.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              3. Term & Termination
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                This Agreement is valid from the date of acceptance until terminated by either party.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Either party may terminate this Agreement with 15 days' prior notice.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Altmoney may terminate this Agreement immediately in case of breach, fraud, misrepresentation, or
                regulatory violations by the Partner.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              4. Partner Responsibilities
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Source and submit only genuine, accurate, and consenting borrower leads.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Share/email/upload accurate and unaltered documents including KYC, bank statements, ITRs, etc.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Maintain the integrity, transparency, and professionalism expected under this Agreement.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Never impersonate any employee or representative of MoneySquad®, Altmoney, or any lending partner.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              5. Payouts & Commission Policy
            </Typography>
            <Typography variant="body1" paragraph>
              Commission is paid only on successful disbursal of loans sourced by the Partner.
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                The payout structure shall be shared via the Partner Dashboard or separate annexure and may be revised
                from time to time.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Payouts will be processed monthly/weekly/on-spot as may be decided mutually, after reconciliation with
                lending partners.
              </Box>
            </Box>
            <Typography variant="body1" paragraph>
              <strong>Payouts will be withheld or clawed back if:</strong>
            </Typography>
            <Box component="ul" sx={{ pl: 6, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                The loan is cancelled within 30 days of disbursal.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                The borrower defaults in the first EMI or within 30 days. Or The borrower defaults during loan tenure
                and lender claws back the Payout from Altmoney.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Documentation is found to be fraudulent or tampered causing penalty to Altmoney.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              6. Prohibited Conduct & Fraud Policy
            </Typography>
            <Typography variant="body1" paragraph>
              You shall not:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Forge, manipulate, or fabricate documents.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Submit dummy, non-existent, or consentless leads.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Charge any money to the customer for lead submission, approvals, or processing.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Misrepresent your affiliation with Altmoney or any financial institution.
              </Box>
            </Box>
            <Typography variant="body1" paragraph>
              <strong>If found in violation:</strong>
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Your partner account will be immediately blacklisted and deactivated.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                All unpaid commissions will be forfeited.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Altmoney may initiate legal action, including FIRs and civil recovery suits.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              7. Documentation & Compliance
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                You are solely responsible for verifying the authenticity of the documents submitted.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                You must retain soft or physical copies of all documents for a minimum of 6 months.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Any discrepancy or mismatch may lead to account suspension or legal recourse.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              8. Loan Cancellation & Default
            </Typography>
            <Typography variant="body1" paragraph>
              If the borrower cancels or defaults on the loan:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Within 15 days post disbursal → No commission will be paid.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Within the first EMI period → Any already-paid commission must be refunded within 7 working days.
              </Box>
            </Box>
            <Typography variant="body1" paragraph>
              Repeated cancellations or high default rates may result in delisting of the Partner.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              9. Intellectual Property
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                MoneySquad® is a registered trademark of Altmoney Technologies Private Limited.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                All branding, code, content, and marketing material on the platform is the sole property of Altmoney.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                You may not copy, misuse, reverse-engineer, or create derivative platforms based on any of our content
                or systems.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              10. Confidentiality
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Keep all borrower, business, and partner information confidential.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Not share, sell, or exploit any data or insights gathered through the platform.
              </Box>
            </Box>
            <Typography variant="body1" paragraph>
              This clause will remain in effect for 2 years post-termination of the Agreement.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              11. Indemnity
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to fully indemnify, defend, and hold harmless Altmoney Technologies Private Limited
              (MoneySquad®) from and against any loss, liability, legal claim, penalty, or cost arising from:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Your fraud, negligence, or misrepresentation.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Disputes initiated by clients referred by you.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Any third-party claim resulting from your conduct.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              12. Dispute Resolution & Governing Law
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                Any disputes shall first be attempted to be resolved amicably.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act,
                1996.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                The sole arbitrator shall be appointed by Altmoney.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Jurisdiction and seat of arbitration: New Delhi
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                This Agreement shall be governed by the laws of India.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              13. Legal Remedies & Penalties
            </Typography>
            <Typography variant="body1" paragraph>
              In the event of fraudulent activity or breach, Altmoney may:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                File an FIR under relevant sections of the Indian Penal Code, BNS, and the Information Technology Act,
                2000.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Initiate civil proceedings to recover commissions, losses, and legal costs.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              14. Nature of Agreement
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                This is an independent contractor agreement. You are not an employee, franchisee, or agent of Altmoney.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                No exclusivity or minimum business guarantee is provided unless agreed separately in writing.
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                Altmoney may update or revise this Agreement at any time with prior notice via email or dashboard
                alerts.
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ color: "#00796b", mb: 2 }}
            >
              15. Electronic Execution
            </Typography>
            <Typography variant="body1" paragraph>
              This Agreement is an electronic record as per the Information Technology Act, 2000. It does not require a
              physical or digital signature. Your acceptance by checkbox and submission of the registration form
              constitutes binding consent.
            </Typography>
          </Box>

          <Box sx={{ mt: 5, pt: 3, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#00796b" }}>
              Last updated: 30th June, 2025
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default PartnerAgreementPage
