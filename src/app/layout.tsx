import type { Metadata } from 'next'
import './globals.css'

// Define metadata for the application - used for SEO and browser tab information
export const metadata: Metadata = {
  title: 'Dad Jokes',
  description: 'Random dad jokes generator',
}

// Root layout component that wraps all pages
// This is required in Next.js 13+ and provides the basic HTML structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode // Type definition for the children prop
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
