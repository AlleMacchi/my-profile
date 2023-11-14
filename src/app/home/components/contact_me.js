import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'

import style from '../../../styles/pages/home/layout/style.module.css'

export default function ContactMe(){
    return(
        <>  
        <a href=""><FontAwesomeIcon className={style.icon} icon={faEnvelope} /></a>      
        <a href=""><FontAwesomeIcon className={style.icon} icon={faPhone} /></a>
        </>
    )
}