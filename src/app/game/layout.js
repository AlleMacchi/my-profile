import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Head from '../../components/head/head'
import Header from '../../common/header'


import style from '../../styles/pages/game/layout/style.module.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head 
        title='Snake Game'
      />
      <body>
      <Header />
      <div className={style.container}>
        {children}
      </div>         
      </body>
    </html>
  )
}