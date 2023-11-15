import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Head from '../../components/head/head'
import Header from '../../common/header'
import Footer from '../../common/footer'

import BackToTopButton from '../../components/button/BackToTopButton'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head 
        title='My Portfolio'
      />
      <body>
      <Header />
        {children}
      <Footer />
      <BackToTopButton />
      </body>
    </html>
  )
}