'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from "web3uikit"

const inter = Inter({ subsets: ['latin'] })

//export const metadata = {
//  title: 'Smart Contract Lottery',
//  description: 'Our Smart Contract Lottery',
//}

export default function RootLayout({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}> 
      {/* <NotificationProvider> */}
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
        {/* </NotificationProvider>  */}
    </MoralisProvider>
  )
}
