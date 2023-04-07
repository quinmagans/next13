import { Poppins } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'React Next App',
  description: 'Web Development',
  keywords: 'web development, react, next'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
        </body>
    </html>
  )
}

//react server component
//react client component

//advantage of react server component
// load faster - don't need to wait for js to load
// SEO - search engines can read the content
//smaller client bundle size
// access to resources the client doesn't have access to
// hide sensitive data from the client
// more secure against xss attacks
//improved developer experience

//disadvantage of react server component
// not as interactive
//no component state. cannot use ''useState'' hook
//no lifecycle methods. cannot use ''useEffect'' hook