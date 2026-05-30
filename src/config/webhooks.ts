// Client-side endpoint for contact submissions.
// Defaults to the Vercel serverless function route.
export const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "/api/contact";
