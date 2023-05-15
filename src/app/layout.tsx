import './globals.css';


import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Estilo de Campos',
  description: 'Conheça a pousada Estilo de Campos, um lugar tranquilo e aconchegante para você e toda sua família. Venha se hospedar com a gente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} text-gray-800`} >{children}</body>
    </html>
  )
}
