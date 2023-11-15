import style from '../styles/common/footer/style.module.css'
import SocialMedia from '../app/home/components/social_media'

export default function Footer(){
    return(
            <footer className={`animate__animated animate__fadeIn animate__slower ${style.container}`}>
                <div className={style.slogan}>
                    <h4>Living, learning, & leveling up one day at a time.</h4>
                </div>               
               <div className={style.social}>
                    <SocialMedia /> 
               </div>
               <div className={style.ctreatedBy}>
                <h5>Handcrafted by me @allemacchi</h5>
               </div>
               
            </footer>            
    )
}