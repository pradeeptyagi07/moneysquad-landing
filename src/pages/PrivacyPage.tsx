import { Box, Container, Typography, Paper, Breadcrumbs, Link as MuiLink, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import SecurityIcon from "@mui/icons-material/Security"

const PrivacyPage = () => {
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
            <SecurityIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
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
              Privacy Policy
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2, fontWeight: "normal" }}>
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
            'we' or the 'Company) is keen on data security as we are well aware that our users (you) care about how the
            personal information is used. Hosted on high performing Google & Amazon clouds, we assure you that all our
            customer information is held confidential. We never sell our customer list or our customer information. All
            the customer information collected such as name, email address, phone number, social media handles, mailing
            address, billing information or any other information related to third party integrations is collected for
            the sole purpose of providing best services to our customers and to update them of the improvements to our
            product and services.
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3, fontStyle: "italic" }}>
            MoneySquad and AltMoney can be used interchangeably here.
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
              Our Customer Information
            </Typography>
            <Typography variant="body1" paragraph>
              We understand that you are trusting us with confidential information and we believe that you have a right
              to know our practices regarding the information we may collect and use when you use our service or
              interact with us in any manner. AltMoney is a cloud-based web platform that enables associated individuals
              and organizations to manage their customer leads. A User may be either an entity, for example a Financial
              Institution which has executed an agreement with Company or with AltMoney's resellers or distributors who
              provide company's services ("Customer") or a Customer's users for example a Customer's connectors, credit
              seekers of the Services or users of the Website ("End User(s)") (Customer and End User shall collectively
              be referred to as "Users" or "you"). This Privacy Policy describes the policies and procedures of AltMoney
              on the collection, use, access, correction, and disclosure of your personal information on moneysquad.in
              (the "Site") and our Mobile Apps, as may be introduced in future. Your personal information will include
              any information which, either alone or with other data, is reasonably available to Us and relates to you
              ("Personal Information"). This Privacy Policy also covers any of your Personal Information which is
              provided to Us and which is used in connection with the marketing of the services, features or content We
              offer (the "Services") to Our Clients and/or the support that We may give you in connection with the
              provision of our Services and the Mobile Apps. This Privacy Policy does not apply to any third party
              applications or software that can be accessed from the Site, the Services or the Mobile Apps, such as
              external applicant tracking systems, social media websites or partner websites ("Third Party Services").
              By using our Services, you acknowledge you have read and understood this privacy policy. For data retained
              through the website or data processed not through the Service (i.e. contact detailed of potential
              customers or resumes sent to us from potential employees for the purpose of engagement with AltMoney),
              AltMoney is the controller (the "Controller")
            </Typography>
            <Typography variant="body1" paragraph>
              We will send product updates, special offers or promotional notices via mail, email or voice broadcast,
              from time to time, to our customers and prospects who have expressed interest and requested such
              information. The customer/ prospect can always opt out from receiving such offers/ notifications by
              following the opt out link on the specific communication or by contacting AltMoney Technologies directly.
            </Typography>
          </Box>

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
              Sharing of your Information
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Third Party Services
            </Typography>
            <Typography variant="body1" paragraph>
              At times, you may be able to access other Third Party Services through the Site, for example by clicking
              on links to those Third Party Services from within the Site. We are not responsible for the privacy
              policies and/or practices of these Third Party Services, and you are responsible for reading and
              understanding those Third Party Services' privacy policies.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Information Shared with Our Service Providers
            </Typography>
            <Typography variant="body1" paragraph>
              We may share your information with third parties who provide services to Us. These third parties are
              authorized to use your Personal Information only as necessary to provide these services to Us. These
              services may include the provision of (i) email services to send marketing communications, (ii) mapping
              services, (iii) customer service or support, and (iv) providing cloud computing infrastructure.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Information Shared with Our Sub-Processors
            </Typography>
            <Typography variant="body1" paragraph>
              We employ and contract with people and other entities that perform certain tasks on Our behalf and who are
              under Our control such as an email service provider to send emails on Our behalf, mapping service
              providers, and customer support providers Our "Sub-Processors"). We may need to share Personal Information
              with Our Sub-Processors in order to provide Services to you. Unless We tell you differently, Our
              Sub-Processors do not have any right to use Personal Information or other information We share with them
              beyond what is necessary to assist Us. Transfers to subsequent third parties are covered by onward
              transfer agreements between AltMoney and each Sub-Processor.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Information Disclosed Pursuant to Business Transfers
            </Typography>
            <Typography variant="body1" paragraph>
              In some cases, We may choose to buy or sell assets. In these types of transactions, user information is
              typically one of the transferred business assets. Moreover, if We, or substantially all of Our assets,
              Were acquired, or if We go out of business or enter bankruptcy, user information would be one of the
              assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur,
              and that any acquirer of Us or Our assets may continue to use your Personal Information as set forth in
              this Privacy Policy. You will be notified via email and/or a prominent notice on Our Site of any change in
              the legal owner or uses of your Personal Information, as Well as any choices you may have regarding your
              Personal Information.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Information Disclosed for Our Protection and the Protection of Others
            </Typography>
            <Typography variant="body1" paragraph>
              In certain situations, We may be required to disclose Personal Information in response to lawful requests
              by public authorities, including to meet national security or law enforcement requirements. We also
              reserve the right to access, read, preserve, and disclose any information as We reasonably believe is
              necessary to (i) satisfy any applicable law, regulation, legal process or governmental request (ii)
              enforce this Privacy Policy, including investigation of potential violations hereof, (iii) detect,
              prevent, or otherwise address fraud, security, or technical issues; (iv) respond to user support requests;
              or (v) protect Our rights, property, or safety. This includes exchanging information with other companies
              and organizations for fraud protection and spam/malware prevention. We require all third parties to
              respect the security of your Personal Information and to treat it in accordance with applicable laws. We
              do not allow third party service providers and Sub-Processors, we share your Personal Information with, to
              use it for their own purposes and only permit them to process your Personal Information for specified
              purposes in accordance with Our instructions. Except as set forth above, you will be notified when your
              Personal Information is shared with third parties, and will be able to prevent the sharing of this
              information. Unless We otherwise have your consent, We will only share your Personal Information in the
              ways that are described in this Privacy Policy.
            </Typography>
          </Box>

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
              Our Customer Lead Information
            </Typography>
            <Typography variant="body1" paragraph>
              Our customer lead information is tantamount to our customer information for us. All data with relation to
              leads generated by our customers or any other information collected automatically by our customers is held
              in strict confidence. We never reach out to them unsolicitedly nor do we share customer lead information
              to any third party.
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
              Our Integration Partner Information
            </Typography>
            <Typography variant="body1" paragraph>
              AltMoney Technologies may have integrations with third party softwares and services. We promise high data
              security on all the information shared by our integration partners. We collect information for integration
              purposes, commission checks and for tax compliance.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
              App's use of information received, and App's transfer of information to any other app, from Google APIs
              will adhere to Google's Limited Use Requirements.
            </Typography>
          </Box>

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
              Disclosure to Third Parties
            </Typography>
            <Typography variant="body1" paragraph>
              We do not share or sell your personal information to third parties.
            </Typography>
            <Typography variant="body1" paragraph>
              We disclose information only in the following cases:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                as required by law, such as to comply with a subpoena or a similar legal process
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or
                the safety of others, to investigate fraud, or to respond to a government request
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                if we are involved in a merger, acquisition, or sale of all or a portion of its assets, you will be
                notified via email and/or a prominent notice through our app of any change in ownership or uses of your
                personal information, as well as any choices you may have regarding your personal information
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                to any other third party with your prior consent to do so.
              </Box>
            </Box>
          </Box>

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
              Data Retention
            </Typography>
            <Typography variant="body1" paragraph>
              Any Customer may request information regarding the storage and retention of data ("Audit") by contacting
              us. AltMoney shall make reasonable efforts to respond to the Audit in a reasonable time and subject to
              applicable law and to the protection of Altmoney's trade secrets (Customer's personnel may be required to
              execute non-disclosure agreements).
            </Typography>
            <Typography variant="body1" paragraph>
              AltMoney will retain data it processes on behalf of its Customers only for as long as required to provide
              the Service to its Customers and as necessary to comply with its legal obligations, resolve disputes and
              enforce its agreements. The data in AltMoney is backed up for system continuity purposes and each backup
              file may be stored for 90 days.
            </Typography>
            <Typography variant="body1" paragraph>
              Each User must keep the appropriate backup of its data. AltMoney shall not be responsible for any deletion
              of data or for any breach to database or for any erroneous data unless otherwise agreed with its Customer.
            </Typography>
            <Typography variant="body1" paragraph>
              After a termination of services by a customer, an automated process will begin that permanently deletes
              the data in 90 days. Once begun, this process cannot be reversed and data will be permanently deleted.
              Some data will not be deleted and shall be kept in an anonymized manner.
            </Typography>
            <Typography variant="body1" paragraph>
              AltMoney collects and retains metadata and statistical information concerning the use of the Service which
              are not subject to the deletion procedures in this policy and may be retained by AltMoney for no more than
              required to conduct its business. Some data may be retained also on our third-party service providers'
              servers in accordance with their retention policies. You will not be identifiable from this retained
              metadata or statistical information.
            </Typography>
            <Typography variant="body1" paragraph>
              Customer may retain Personal Information and other Data about an End User which the Controller owns and
              the End User may have no access to. If you have any questions about the right of the Customer to retain
              and process your Personal Information you should raise this directly with the Customer. You hereby agree
              not to assert any claim against Altmoney in this regard and waive any rights regarding such Data and
              Personal Information including the right to view and control such Data and Information.
            </Typography>
            <Typography variant="body1" paragraph>
              Please note that some data will not be deleted and shall be kept in an anonymized manner. Some metadata
              and statistical information concerning the use of the Service are not subject to the deletion procedures
              in this policy and may be retained by AltMoney. We will not be able to identify you from this data. Some
              data may also be retained on our third-party service providers' servers until deleted in accordance with
              their privacy policy and their retention policy.
            </Typography>
            <Typography variant="body1" paragraph>
              Anonymized aggregated data may be retained by AltMoney for as long as it is required to provide its
              services. Contracts and billing information may be retained as required by AltMoney but at least 5 years
              from termination or expiration of the relationship with the applicable Customer or party.
            </Typography>
          </Box>

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
              Where do we store your Data?
            </Typography>
            <Typography variant="body1" paragraph>
              The Data we collect is hosted on the AWS Cloud in Mumbai and Bangalore data centers which provides
              advanced security features and is compliant with ISO 27001 standard. AltMoney Headquarter is based in
              India, all the customer data information is stored within India only.
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
              Security and storage of information
            </Typography>
            <Typography variant="body1" paragraph>
              We take great care in implementing, enforcing and maintaining the security of the Service, and our Users'
              Personal Information. AltMoney implements, enforces and maintains security policies to prevent the
              unauthorized or accidental access to or destruction, loss, modification, use or disclosure of personal
              data and monitor compliance of such policies on an ongoing basis. AltMoney is certified under the ISO
              27001:2013.
            </Typography>
            <Typography variant="body1" paragraph>
              Customer Data is protected with 256 bit encryption, bank grade security and TLS protocols. All Personal
              Information is stored with logical separation from information of other customers. However, we do not
              guarantee that unauthorized access will never occur. AltMoney takes steps to ensure that its staff who
              have access to personal data are honest, reliable, competent and periodically properly trained.
            </Typography>
            <Typography variant="body1" paragraph>
              AltMoney shall act in accordance with its policies to promptly notify Customer in the event that any
              personal data processed by AltMoney on behalf of Customer is lost, stolen, or where there has been any
              unauthorized access to it subject to applicable law and instructions from any agency or authority.
              Furthermore, AltMoney undertakes to co-operate with Customer in investigating and remedying any such
              security breach. In any security breach involving Personal Information, AltMoney shall promptly take
              remedial measures, including without limitation, reasonable measures to restore the security of the
              Personal Information and limit unauthorized or illegal dissemination of the Personal Information or any
              part thereof.
            </Typography>
            <Typography variant="body1" paragraph>
              AltMoney maintains documentation regarding compliance with the requirements of the law, including without
              limitation documentation of any known breaches and holds reasonable insurance policies in connection with
              data security.
            </Typography>
            <Typography variant="body1" paragraph>
              The Service may, from time to time, contain links to external sites. We are not responsible for the
              operation, privacy policies or the content of such sites.
            </Typography>
          </Box>

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
              Your Rights associated with your information
            </Typography>
            <Typography variant="body1" paragraph>
              If we are storing your personal information, you have the following rights to your information based on
              the services and your region.
            </Typography>
            <Typography variant="body1" paragraph>
              In the event that you have provided Personal Information to Us on our website moneysquad.in, we will
              provide you with information about whether we hold any of your Personal Information. You may access,
              correct, or request deletion of your Personal Information by contacting Us at hello@moneysquad.in. We will
              respond to your request within a reasonable timeframe.
            </Typography>
            <Typography variant="body1" paragraph>
              When acting as a service provider of Our Customer, AltMoney has no direct relationship with the
              individuals whose Personal Information is provided to AltMoney through the Services. An individual who is
              or was employed by one of Our Customers and who seeks access to, or who seeks to correct, amend, object to
              the processing or profiling of, or to delete his/her Personal Information in the Platform, should direct
              his/her query to the HR department of the Customer Organization that uses the Platform and for which
              he/she works or used to work if he/she cannot make the appropriate changes via its access to the Platform
              provided by the Customer.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Right of Access
            </Typography>
            <Typography variant="body1" paragraph>
              You can request details of your Personal Information We hold. We will confirm whether We are processing
              your Personal Information and We will disclose additional information including the types of Personal
              Information, the sources it originated from, the purpose and legal basis for the processing, subject to
              the limitations set out in applicable laws and regulations. We will provide you free of charge with a copy
              of your Personal Information but We may charge you a fee to cover Our administrative costs if you request
              further copies of the same information.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Right of correction
            </Typography>
            <Typography variant="body1" paragraph>
              At your request, We will correct incomplete or inaccurate parts of your Personal Information, although We
              may need to verify the accuracy of the new information you provide us.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Right to be forgotten
            </Typography>
            <Typography variant="body1" paragraph>
              At your request, We will delete your Personal Information if:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                it is no longer necessary for Us to retain your Personal Information;
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                you withdraw the consent which formed the legal basis for the processing of your Personal Information;
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                you object to the processing of your Personal Information and there are no overriding legitimate grounds
                for such processing;
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                the Personal Information was processed illegally;
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                the Personal Information must be deleted for Us to comply with Our legal obligations.
              </Box>
            </Box>
            <Typography variant="body1" paragraph>
              We will decline your request for deletion if processing of your Personal Information is necessary: 1. for
              Us to comply with Our legal obligations; 2. for the establishment, exercise or defense of legal claims; or
              3. for the performance of a task in the public interest.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Right to object
            </Typography>
            <Typography variant="body1" paragraph>
              Where We rely on Our legitimate interests (or that of a third party) to process your Personal Information,
              you have the right to object to this processing on grounds relating to your particular situation if you
              feel it impacts on your fundamental rights and freedoms. We will comply with your request unless We have
              compelling legitimate grounds for the processing which override your rights and freedoms, or where the
              processing is in connection with the establishment, exercise or defense of legal claims. We will always
              comply with your objection to processing your Personal Information for direct marketing purposes.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Right not to be subject to decisions based solely on automated processing
            </Typography>
            <Typography variant="body1" paragraph>
              You will not be subject to decisions with a legal or similarly significant effect (including profiling)
              that are based solely on the automated processing of your Personal Information, unless you have given Us
              your explicit consent or where they are necessary for the performance of a contract with Us.
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              fontWeight="bold"
              fontFamily="Inter, Arial, sans-serif"
              sx={{ mt: 3, mb: 1 }}
            >
              Right to withdraw consent
            </Typography>
            <Typography variant="body1" paragraph>
              You have the right to withdraw any consent you may have previously given Us at any time. In order to
              exercise your rights in this section We may ask you for certain identifying information to ensure the
              security of your Personal Information. To request to exercise any of the above rights, please contact Us
              at support@moneysquad.in. We will respond to your request within 30 days or provide you with reasons for
              the delay.
            </Typography>
            <Typography variant="body1" paragraph>
              Usually, We will not charge you any fees in connection with the exercise of your rights. If your request
              is manifestly unfounded or excessive, for example, because of its repetitive character, We may charge a
              reasonable fee, taking into account the administrative costs of dealing with your request. If We refuse
              your request We will notify you of the relevant reasons.
            </Typography>
          </Box>

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
              Privacy Statement Updates
            </Typography>
            <Typography variant="body1" paragraph>
              The terms of this Privacy Policy will govern the use of the Service and any information collected in
              connection therewith, however, AltMoney may amend or update this Privacy Policy from time to time. Changes
              to this Privacy Policy are effective as of the stated "Last Revised" date and your continued use of
              Services will constitute your active acceptance of, and agreement to be bound by, the changes to the
              Privacy Policy.
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions concerning this Privacy Policy, you are welcome to send us an email or otherwise
              contact us at support@moneysquad.in and we will make an effort to reply within a reasonable timeframe, and
              not over 30 business days. We encourage you to periodically review this page for the latest information on
              our privacy practices.
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

export default PrivacyPage
