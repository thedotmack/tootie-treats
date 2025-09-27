import './globals.css'

export const metadata = {
  title: 'Sacramento Cake Classes | Tootie Treats Cake Lab',
  description: 'Discover pastel-perfect cake decorating classes in Sacramento with Tootie Treats Cake Lab. Learn modern techniques in an uplifting, design-forward studio.',
  openGraph: {
    type: 'website',
    title: 'Sacramento Cake Classes | Tootie Treats Cake Lab',
    description: 'Hands-on cake decorating classes, private events, and custom cakes in Sacramento. All skill levels welcome!',
    images: ['/tootie-og.png'],
    siteName: 'Tootie Treats Cake Lab',
  },
  keywords: 'cake classes Sacramento, cake decorating lessons, custom cakes, private parties, team building Sacramento, cake workshops, Alexa Melhado, Tootie Treats',
  author: 'Alexa Melhado',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#ffe44d',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tootie.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}