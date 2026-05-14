import './globals.css';

export const metadata = {
  title: 'Religious Humanism',
  description: 'A platform for the study and practice of Religious Humanism.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
