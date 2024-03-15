import 'primeicons/primeicons.css';
import './globals.css';
import 'primereact/resources/themes/lara-dark-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "primeflex/primeflex.css";
import { PrimeReactProvider } from 'primereact/api';
import Provider  from "@/components/Provider";



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Equinox',
  description: 'Rule the universe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   
    <html lang="en">
  
      <body className={inter.className}>
  
      <PrimeReactProvider >
      <Provider>{children}</Provider>
        </PrimeReactProvider>
        
        </body>
      
    </html>
    
   
  )
}
