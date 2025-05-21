"use client"

import { useState, useEffect, useRef } from "react"
import { Box, Typography, Container, Paper, useTheme, alpha, Button } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { motion } from "framer-motion"

// Define lender data with logo file paths
const lenders = [
  { name: "ADITYA BIRLA", logo: "/lenders/ABCAPITAL.NS.png", category: "NBFC" },
  { name: "AMBIT FINVEST", logo: "/lenders/Ambit.jpg", category: "NBFC" },
  { name: "ARKA FINCAP", logo: "/lenders/Arka FinCap.webp", category: "NBFC" },
  { name: "AXIS BANK", logo: "/lenders/2560px-Axis_Bank_logo.svg.png", category: "Bank" },
  { name: "AXIS FINANCE", logo: "/lenders/Axis Finance.png", category: "NBFC" },
  { name: "BAJAJ FINSERV", logo: "/lenders/Bajaj-Finserv.png", category: "NBFC" },
  { name: "BANDHAN BANK", logo: "/lenders/Bandhan Bank.png", category: "Bank" },
  { name: "CHOLAMANDALAM", logo: "/lenders/Chola.jpeg", category: "NBFC" },
  { name: "CLIX CAPITAL", logo: "/lenders/Clix Capital.jpeg", category: "NBFC" },
  { name: "CREDIT SAISON", logo: "/lenders/Credit Saison.png", category: "NBFC" },
  { name: "DBS", logo: "/lenders/DB.png", category: "Bank" },
  { name: "DCB BANK", logo: "/lenders/DCB Bank.png", category: "Bank" },
  { name: "EDELWEISS", logo: "/lenders/edelweiss.png", category: "NBFC" },
  { name: "FEDBANK", logo: "/lenders/Fedbank.jpg", category: "Bank" },
  { name: "FINNABLE", logo: "/lenders/Finnable.png", category: "NBFC" },
  { name: "FLEXI LOANS", logo: "/lenders/Flexiloans.png", category: "NBFC" },
  { name: "FULLERTON", logo: "/lenders/Fullerton-logo.png", category: "NBFC" },
  { name: "GODREJ CAPITAL", logo: "/lenders/Godrej.jpeg", category: "NBFC" },
  { name: "HDFC BANK", logo: "/lenders/HDFC_Bank_Logo.svg.png", category: "Bank" },
  { name: "HERO FINCORP", logo: "/lenders/Hero Fincorp.png", category: "NBFC" },
  { name: "ICICI BANK", logo: "/lenders/icici.png", category: "Bank" },
  { name: "IDFC FIRST BANK", logo: "/lenders/IDFC_First_Bank_logo.jpg", category: "Bank" },
  { name: "IIFL FINANCE", logo: "/lenders/IIFL Finance.png", category: "NBFC" },
  { name: "INCRED", logo: "/lenders/incred.png", category: "NBFC" },
  { name: "INDIFI FINANCE", logo: "/lenders/INdifi.webp", category: "NBFC" },
  { name: "INDUSIND BANK", logo: "/lenders/7-indusind-logo.png", category: "Bank" },
  { name: "KARUR VYSYA BANK", logo: "/lenders/Karur.png", category: "Bank" },
  { name: "KOTAK MAHINDRA", logo: "/lenders/Kotak_Mahindra_Bank_logo.png", category: "Bank" },
  { name: "L&T FINANCE", logo: "/lenders/L&T Fin.webp", category: "NBFC" },
  { name: "LENDINGKART", logo: "/lenders/Lendingkart.png", category: "NBFC" },
  { name: "MAHINDRA FINANCE", logo: "/lenders/Mahindra.png", category: "NBFC" },
  { name: "MAS FINANCE", logo: "/lenders/MAS.jpeg", category: "NBFC" },
  { name: "MUTHOOT FINCORP", logo: "/lenders/Muthoot_Finance_Logo.svg.png", category: "NBFC" },
  { name: "NEOGROWTH", logo: "/lenders/NeoGrowth.png", category: "NBFC" },
  { name: "PIRAMAL CAPITAL", logo: "/lenders/piramal.jpeg", category: "NBFC" },
  { name: "POONAWALLA FINCORP", logo: "/lenders/poonawalla-fincorp-logo-1.webp", category: "NBFC" },
  { name: "PROTIUM FINANCE", logo: "/lenders/Protium-Logo-Final-02.png", category: "NBFC" },
  { name: "SBM BANK", logo: "/lenders/SBM.png", category: "Bank" },
  { name: "SHRIRAM FINANCE", logo: "/lenders/Shriram.jpg", category: "NBFC" },
  { name: "SMFG INDIA", logo: "/lenders/SMFG.png", category: "NBFC" },
  { name: "STANDARD CHARTERED", logo: "/lenders/Standard_Chartered_(2021).svg.png", category: "Bank" },
  { name: "TATA CAPITAL", logo: "/lenders/tata-logo-without-tagline.png", category: "NBFC" },
  { name: "UGRO CAPITAL", logo: "/lenders/UGRO.webp", category: "NBFC" },
  { name: "UNITY BANK", logo: "/lenders/unity-bank-logo.svg", category: "Bank" },
  { name: "UTKARSH BANK", logo: "/lenders/Utkarsh.jpg", category: "Bank" },
  { name: "YES BANK", logo: "/lenders/Yes Bank.png", category: "Bank" },
]

const LenderPartners = () => {
  const theme = useTheme()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [animateIn, setAnimateIn] = useState(false)
  const [hovering, setHovering] = useState(false)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Initialize animation and scroll event listener
  useEffect(() => {
    setAnimateIn(true)

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition)
      return () => scrollContainer.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  // Auto-scroll functionality with increased speed
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }

      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current && !hovering) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

          // If we're near the end, go back to the start
          if (scrollLeft >= scrollWidth - clientWidth - 50) {
            scrollRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            })
          } else {
            // Otherwise, continue scrolling with increased speed
            scrollRef.current.scrollBy({
              left: 300, // Increased for faster scrolling
              behavior: "smooth",
            })
          }

          checkScrollPosition()
        }
      }, 1500) // Faster scrolling interval
    }

    startAutoScroll()

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [hovering])

  // Manual scroll function
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Animation styles
  const fadeIn = {
    opacity: animateIn ? 1 : 0,
    transform: animateIn ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  }

  return (
    <Box
      sx={{
        py: 10, // Increased padding
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(
          theme.palette.primary.main,
          0.05,
        )} 100%)`,
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)}, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)}, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" sx={{ mb: 8, ...fadeIn }}>
          <Typography
            variant="h3" // Larger heading
            component="h2"
            gutterBottom
            fontWeight="bold"
            fontFamily="Inter, Arial, sans-serif"
            sx={{
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              display: "inline-block",
            }}
          >
            Our Lending Partners
            <Box
              sx={{
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }}
            />
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.2rem", // Larger text
              mt: 4,
              mb: 2,
            }}
          >
            We've partnered with India's leading banks and NBFCs to offer you the best loan products with competitive
            rates
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            px: { xs: 0, md: 6 },
            ...fadeIn,
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: `linear-gradient(90deg, ${alpha(theme.palette.background.default, 0.9)}, transparent)`,
              zIndex: 3,
              pointerEvents: "none",
              display: { xs: "none", md: "block" },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: `linear-gradient(270deg, ${alpha(theme.palette.background.default, 0.9)}, transparent)`,
              zIndex: 3,
              pointerEvents: "none",
              display: { xs: "none", md: "block" },
            },
          }}
        >
          {/* Left scroll button */}
          <Button
            variant="contained"
            onClick={() => scroll("left")}
            disabled={!showLeftArrow}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              minWidth: 48, // Larger button
              width: 48,
              height: 48,
              borderRadius: "50%",
              zIndex: 4,
              bgcolor: "white",
              color: "primary.main",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              "&:hover": {
                bgcolor: "white",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                transform: "translateY(-50%) scale(1.05)",
              },
              display: { xs: "none", md: "flex" },
              opacity: showLeftArrow ? 1 : 0,
              transition: "opacity 0.3s ease, transform 0.2s ease",
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Button>

          {/* Lender logos container */}
          <Box
            ref={scrollRef}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onTouchStart={() => setHovering(true)}
            onTouchEnd={() => setTimeout(() => setHovering(false), 5000)}
            sx={{
              display: "flex",
              overflowX: "auto",
              py: 4, // Increased padding
              px: { xs: 2, md: 0 },
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge
              },
              gap: 4, // Increased gap
              position: "relative",
              "&::after": {
                content: '""',
                minWidth: { xs: 16, md: 40 },
              },
            }}
          >
            {lenders.map((lender, index) => (
              <Paper
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                elevation={0}
                sx={{
                  p: 3, // Adjusted padding
                  borderRadius: 4, // Increased border radius
                  minWidth: { xs: 250, md: 280 }, // Larger cards
                  height: 240, // Increased height to fit content
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.05)}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)", // More pronounced lift
                    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.1)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                  },
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                  flexShrink: 0,
                  background: `linear-gradient(145deg, white, ${alpha(theme.palette.primary.light, 0.05)})`,
                }}
              >
                {/* Logo container */}
                <Box
                  sx={{
                    width: "100%", // Full width
                    height: 100, // Tall enough for logos
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    backgroundColor: "white",
                    padding: 2, // More padding
                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                    mb: 3, // Space below logo
                  }}
                >
                  <Box
                    component="img"
                    src={lender.logo}
                    alt={`${lender.name} logo`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>

                {/* Spacer to push content apart */}
                <Box sx={{ flexGrow: 1, minHeight: 10 }} />

                {/* Name - now with more space and no truncation */}
                <Typography
                  variant="subtitle1"
                  fontWeight="medium"
                  textAlign="center"
                  sx={{
                    color: "text.primary",
                    fontSize: "1.1rem",
                    lineHeight: 1.3,
                    width: "100%",
                    mb: 2, // Space before badge
                    mt: 1, // Space after spacer
                  }}
                >
                  {lender.name}
                </Typography>

                {/* Category badge - now at the bottom with enough space */}
                <Typography
                  variant="caption"
                  sx={{
                    color: "white",
                    bgcolor: lender.category === "Bank" ? "primary.main" : "secondary.main",
                    px: 2, // Wider badge
                    py: 0.5,
                    borderRadius: 10,
                    fontSize: "0.75rem", // Larger font
                    fontWeight: "medium",
                    boxShadow: `0 2px 8px ${alpha(
                      lender.category === "Bank" ? theme.palette.primary.main : theme.palette.secondary.main,
                      0.3,
                    )}`,
                    mb: 1, // Space at bottom
                  }}
                >
                  {lender.category}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Right scroll button */}
          <Button
            variant="contained"
            onClick={() => scroll("right")}
            disabled={!showRightArrow}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              minWidth: 48, // Larger button
              width: 48,
              height: 48,
              borderRadius: "50%",
              zIndex: 4,
              bgcolor: "white",
              color: "primary.main",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              "&:hover": {
                bgcolor: "white",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                transform: "translateY(-50%) scale(1.05)",
              },
              display: { xs: "none", md: "flex" },
              opacity: showRightArrow ? 1 : 0,
              transition: "opacity 0.3s ease, transform 0.2s ease",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Box>

        <Box
          textAlign="center"
          sx={{
            mt: 6, // More space
            ...fadeIn,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5, // More space between elements
          }}
        >
          <Typography
            variant="body1" // Larger text
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontWeight: "medium",
              fontSize: "1rem", // Larger font
            }}
          >
            <Box
              component="span"
              sx={{
                width: 10, // Larger dot
                height: 10,
                borderRadius: "50%",
                bgcolor: "primary.main",
                display: "inline-block",
              }}
            />
            Partnered with 65+ leading financial institutions
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3, // More space between badges
              justifyContent: "center",
              mt: 2, // More space above
            }}
          >
            <Box
              sx={{
                px: 3, // Wider badge
                py: 1, // Taller badge
                borderRadius: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.main",
                fontSize: "0.85rem", // Larger font
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 8, // Larger dot
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                }}
              />
              Banks: {lenders.filter((l) => l.category === "Bank").length}
            </Box>

            <Box
              sx={{
                px: 3, // Wider badge
                py: 1, // Taller badge
                borderRadius: 2,
                bgcolor: alpha(theme.palette.secondary.main, 0.1),
                color: "secondary.main",
                fontSize: "0.85rem", // Larger font
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 8, // Larger dot
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                }}
              />
              NBFCs: {lenders.filter((l) => l.category === "NBFC").length}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LenderPartners
