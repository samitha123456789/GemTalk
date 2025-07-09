import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GemTalk - Your Intelligent Chatbot Companion',
  description: 'GemTalk is an AI-powered chatbot designed to provide instant, accurate, and engaging conversations. Connect with GemTalk for answers, insights, and fun!',
  keywords: ['chatbot', 'AI', 'GemTalk', 'artificial intelligence', 'conversation', 'assistant'],
  authors: [{ name: 'GemTalk Team' }],
  openGraph: {
    title: 'GemTalk - AI Chatbot',
    description: 'Experience seamless conversations with GemTalk, your smart AI chatbot companion.',
    url: 'https://gemtalk.vercel.app/', // Replace with your actual domain
    siteName: 'GemTalk',
    images: [
      {
        url: '/logo.png', // Updated to use local public/logo.avif
        width: 1200,
        height: 630,
        alt: 'GemTalk Chatbot Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GemTalk - Your AI Chatbot',
    description: 'Chat with GemTalk for instant answers and engaging conversations.',
    images: ['/logo.png'], // Updated to use local public/logo.avif
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/logo.png', // or '/logo.avif' if you prefer
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}