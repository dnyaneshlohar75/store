import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/landing/Header'
import Provider from './components/providers/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <div>
            <Header />
          </div>
          {children}
        </Provider>
      </body>
    </html>
  )
}
