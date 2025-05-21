"use client"

import { Box, IconButton, Tooltip } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { useEffect, useState } from "react"

const WhatsAppChat = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a small delay before showing the button to prevent layout shifts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    window.open(`https://wa.me/918287943538`, "_blank")
  }

  if (!isVisible) return null

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 100, // Position above the Brevo chat button
        right: 24,
        zIndex: 1000,
      }}
    >
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <IconButton
          onClick={openWhatsApp}
          sx={{
            bgcolor: "#25D366", // WhatsApp green
            color: "white",
            width: 56,
            height: 56,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            "&:hover": {
              bgcolor: "#20BD5C",
            },
            transition: "all 0.3s ease",
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
          aria-label="WhatsApp Chat"
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default WhatsAppChat
