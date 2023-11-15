import Header from '../../common/header'
import Head from '../../components/head/head'

import BackToTopButton from '../../components/button/BackToTopButton'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head 
        title='Alessandro Macchitella Profile'
      />
    <body>
      <Header />
      <main>
        {children}
      </main>
      <BackToTopButton />  
    </body>
  </html>


  )
}