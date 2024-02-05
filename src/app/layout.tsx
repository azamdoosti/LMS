
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className='flex flex-col min-h-screen front-bold uppercase'>
        <header className='bg-gray-200 flex items-center justify-center h-20'>
          header
        </header>
        <div className=' flex felx-1'>
          {children}
        </div>
        <footer className='bg-gray-200 flex items-center justify-center'>
          footer
        </footer>
      </body>
    </html>
  )
}
