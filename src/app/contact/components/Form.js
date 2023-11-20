import style from '../../../styles/pages/contact/components/form/style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function(){
    return(
        <section id={style.contact}>
            <div className={style.contactContainer}>
                <div className={style.contactInfo}>
                    <div>
                        <h2>Contact Info</h2>
                        <ul className={style.info}>
                            <li>
                                <span><FontAwesomeIcon className={style.icon} icon={faLocationDot} /></span>
                                <span>58 High St <br />
                                Coburg, Melbourne <br />
                                Victoria, 3058</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon className={style.icon} icon={faEnvelope} /></span>
                                <span>alessandro.macchitella@gmail.com</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon className={style.icon} icon={faPhone} /></span>
                                <span>(+61) 452-177-060</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={style.sci}>
                            <li><a href='#'><FontAwesomeIcon className={style.icon} icon={faInstagram} /></a></li>
                            <li><a href='#'><FontAwesomeIcon className={style.icon} icon={faWhatsapp} /></a></li>
                            <li><a href='#'><FontAwesomeIcon className={style.icon} icon={faTelegram} /></a></li>
                            <li><a href='#'><FontAwesomeIcon className={style.icon} icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className={style.contactForm}>
                    <h2>Send Message</h2>
                    <div className={style.formBox}>
                        <div className={`${style.inputBox} ${style.w50}`}>
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>
                        <div className={`${style.inputBox} ${style.w50}`}>
                            <input type="text" name="" required />
                            <span>Last Name</span>
                        </div>
                        <div className={`${style.inputBox} ${style.w100}`}>
                            <input type="email" name="" required />
                            <span>E-mail Address</span>
                        </div>
                        <div className={`${style.inputBox} ${style.w100}`}>
                            <textarea name="" required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className={`${style.inputBox} ${style.w100}`}>
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>         
        </section>
      
    )
}