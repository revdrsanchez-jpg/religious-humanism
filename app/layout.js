import './globals.css'

export const metadata = {
  title: 'Religious Humanism',
  description: 'Guardians of the Essence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#020617] antialiased">{children}</body>
    </html>
  )
}
