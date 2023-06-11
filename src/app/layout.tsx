import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';


import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estilo de Campos',
  description: 'Conheça os chalés Estilo de Campos, um lugar tranquilo e aconchegante para você e toda sua família. Venha se hospedar com a gente.',
  keywords: ['Campos do Jordão', 'Hospedagem', 'Conforto', 'Chalés', 'Pousadas', 'Natureza', 'Turismo'],
  verification: {
    google: 'google-site-verification=MN4QpuRzgxDYUx5A0uwmwuFJfPRG_SDkAw1FXSdv7og'
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${nunito.className} text-gray-800`} >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
