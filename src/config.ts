// In Vite, environment variables are accessed using import.meta.env
// Only variables prefixed with VITE_ are exposed to the client
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ""
export const BREVO_CHAT_ID = import.meta.env.VITE_BREVO_CHAT_ID || ""
