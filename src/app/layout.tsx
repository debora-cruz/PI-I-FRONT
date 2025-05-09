
import "./globals.css";
import { Header } from '../components/header'
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'Portal RH',
  openGraph:{
    title: 'Portal RH'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`antialiased`}
      >
      <Header/>

        {children}
      </body>
    </html>
  );
}
