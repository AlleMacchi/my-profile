import '../styles/common/globals/globals.css'
import 'animate.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
     <>
      {children}
    </>
  )
}
