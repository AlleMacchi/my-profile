import style from '../../styles/pages/home/main/style.module.css'
import TypewriterText from './components/text/typewriter' 
import TwoColorText from './components/text/twoColorText'
import MyButton from '../../components/button/SnakeBorderButton'

export default function Main(){
    return(
        <div className={style.container}>
            <div className={`col col-1 col-s-12 ${style.title}`}>
                <TwoColorText 
                    firstText='Alessandro '
                    secondText='Macchitella'
                />
                <TypewriterText />
                
{/*                 <div className={style.button}>
                    <MyButton
                        text='Read More'
                        url='/about'
                        backgroundColor= 'rgba(45,45,45,0.9)'
                    />
                </div>  */}                   
                

            </div>
            <div className={`col col-1 col-s-12 ${style.image}`}>
                <img src="/images/Profile_BW-transformed.png" />
            </div>
        </div>
    )
}