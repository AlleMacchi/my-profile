import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import style from '../../../styles/pages/home/layout/style.module.css'

export default function SocialMedia(){
    return(
        <>
        <a href=""><FontAwesomeIcon className={style.icon} icon={faInstagram} /></a>
        <a href=""><FontAwesomeIcon className={style.icon} icon={faWhatsapp} /></a>
        <a href=""><FontAwesomeIcon className={style.icon} icon={faTelegram} /></a>
        <a href=""><FontAwesomeIcon className={style.icon} icon={faLinkedin} /> </a>       
        </>
    )
}