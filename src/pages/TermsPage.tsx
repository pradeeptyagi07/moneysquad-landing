import { Box, Container, Typography, Paper, Breadcrumbs, Link as MuiLink, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import GavelIcon from "@mui/icons-material/Gavel"

const TermsPage = () => {
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
              Terms of Use
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2, fontWeight: "normal" }}>
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
          <Typography color="text.primary">Terms of Use</Typography>
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
            MoneySquad (Altmoney Technologies Private Limited)
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Last Revised: May 15, 2025
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Altmoney Technologies Pvt. Ltd. ("AltMoney" or "MoneySquad", "altmoney.in" , "moneysquad.in" or AltMoney
            Applications, including its subsidiaries or affiliated companies, henceforth also referred as 'AltMoney',
            'we' or the 'Company) and its related services ("Service") subject to your compliance with the terms and
            conditions ("Terms of Service") set forth below. Please read the following carefully.
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3, fontStyle: "italic" }}>
            MoneySquad and AltMoney can be interpreted here interchangeably.
          </Typography>

          <Typography variant="body1" paragraph>
            AltMoney reserves the right to update and change the Terms of Service at any time without notice. All new
            features that augment or enhance the current Service, including the release of new tools and resources,
            shall be subject to the Terms of Service. Continued use of the Service after any such changes shall
            constitute your consent to said changes.
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Violation of any of the terms below will result in the termination of your account. While AltMoney prohibits
            such conduct and content on the service, you understand and agree that AltMoney cannot be held responsible
            for the content posted on the Service and you may be exposed to such content. You agree to use the Service
            at your own risk.
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
              Account Terms
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 2 }}>
                You must be human. Accounts registered by bots and other automated methods are not permitted.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney may communicate with you via email regarding your account, updates, news, and other issues
                related to your account. You automatically get subscribed to our mailing lists and newsletters. You can
                choose to opt out from receiving emails.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You are responsible for maintaining the security of your account and password. AltMoney cannot and will
                not be liable for any loss or damage from your failure to comply with this security obligation.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You are responsible for all content posted and activity that occurs under your account (even if the
                content is user generated) - be it in the live chat, help desk, phone or social.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                We reserve the rights to accept or refuse to any potential client. We have the sole discretion on
                whether to allow you to register or use our services.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You must provide your legal full name, a valid email address, primary mobile number and any other
                information requested in order to complete the sign up process.
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
              Cancellation and Termination
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 2 }}>
                The account owner is the only person who can cancel an account. You are solely responsible for properly
                canceling your account. Any email/ phone/ contact request to cancel the account will not be entertained.
                Please ensure that the cancellation/deactivation requests are made only through the online control
                panel.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                Account cancellations typically take about 2-3 business days to be processed. Once your account is
                canceled, all your account information may be permanently deleted. You won't be charged again after your
                official cancellation date.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney, in its sole discretion, has the right to suspend or terminate your account and refuse any and
                all current or future use of the Service, or any other AltMoney service, for any reason, at any time.
                Such termination of the Service will result in the deactivation or deletion of your Account or access to
                your Account, and the forfeiture and relinquishment of all content in your Account. AltMoney reserves
                the right to refuse service to anyone for any reason at any time.
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
              Modifications to the Service and Prices
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney reserves the right to modify and discontinue, at any time and from time to time, temporarily or
                permanently, the Service (or any part thereof) with or without notice.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                Prices of all Services, including but not limited to subscription plan fees of the Service, are subject
                to change without notice from us. AltMoney shall not be liable to you or to any third party for any
                modification, price change, suspension, or discontinuance of the Service.
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
              Copyright and Ownership
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney or its suppliers own the intellectual property rights to any and all protectable components of
                the Service, including but not limited to the name of the Service, artwork and end-user interface
                elements contained within the Service, many of the individual features, trademarks, trade secrets,
                patents, copyrights on copyrightable works including code, logos, designs, ideas, content and the
                related documentation. You may not copy, modify, adapt, reproduce, distribute, reverse engineer,
                decompile, or disassemble any aspect of the Service which AltMoney or its suppliers own.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney claims no intellectual property rights over the Content you upload or provide to the Service.
                However, by using the Service to send Content, you agree that others may view and share your Content.
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
              General Conditions
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 2 }}>
                Your use of the Service, including any content, information, or functionality contained within it, is
                provided "as is" and "as available" with no representations or warranties of any kind, either expressed
                or implied, including but not limited to, the implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement. You assume total responsibility and risk for your use of this
                Service.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You understand that the Service can be used for transmission of your Content, and that during
                processing, your Content may be transferred unencrypted over the internet.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You understand that AltMoney uses third party vendors and hosting partners to provide necessary
                hardware, software, information, networking, storage, and related technology to run the service.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You agree not to resell, duplicate, reproduce, or exploit any part of the Service without the explicit
                written permission of AltMoney.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You may not use the service to store, host, or send unsolicited email (spam), chats or SMS messages.
                AltMoney is Anti-Spam compliant and does not authorize or permit spam to be sent out via the automation
                service by you. If there is evidence of spam, your services might be suspended without notice.
                Accidental spam must immediately be reported to AltMoney to prevent suspension.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                You may not use the service to transmit any viruses, worms, or malicious content.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney makes no warranties regarding (i) your ability to use the Service, (ii) your satisfaction with
                the Service, (iii) that the Service will be available at all times, uninterrupted, and error-free (iv),
                the accuracy of mathematical calculations performed by the Service, and (v) that bugs or errors in the
                Service will be corrected.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney, its affiliates and its sponsors are neither responsible nor liable for any direct, indirect,
                incidental, consequential, special, exemplary, punitive, or other damages arising out of or relating in
                any way to your use of the Service. Your sole remedy for dissatisfaction with the Service is to stop
                using the Service.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                If any provision of the Terms of Service is held invalid or otherwise unenforceable, the enforceability
                of the remaining provisions shall not be impaired thereby.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                AltMoney may, but have no obligation to, remove Content and Accounts containing Content that we
                determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory,
                pornographic, obscene, or otherwise objectionable or violates any party's intellectual property or these
                Terms of Service.
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                The Terms of Service sets forth the entire understanding between you and AltMoney as to the Service, and
                supersedes any prior agreements between you and AltMoney (including, but not limited to, prior versions
                of the Terms of Service).
              </Box>
              <Box component="li" sx={{ mb: 2 }}>
                Any questions regarding the Terms of Service should be addressed to support@moneysquad.in.
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
              Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These Terms shall be governed by the relevant Indian laws without regard to the principles of conflicts of
              law. You hereby expressly agree to submit to the exclusive personal jurisdiction of the High Court of
              Delhi in India for the purpose of resolving any dispute relating to Your access to or use of the Service.
            </Typography>
          </Box>

          <Box sx={{ mt: 5, pt: 3, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#00796b" }}>
              Last Revised: May 15, 2025
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default TermsPage
