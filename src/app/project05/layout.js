import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Head from '../../components/head/head'
import Header from '../../common/header'
import Menu from './components/menu/menu'

import style from '../../styles/pages/project05/layout/style.module.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head 
        title='3D SCADA'
      />
      <body>
      <Header />
      <div className={style.container}>
        {children}
        <Menu />
      </div>      
      <div className={style.portrait}> 
            <h2> Turn the Device for active the SCADA 3D</h2>
        </div>    
        <div className={style.resolution}> 
            <h2> Minimum resolution to view the project is 1280 x 720.</h2>
        </div>    
      </body>
    </html>
  )
}