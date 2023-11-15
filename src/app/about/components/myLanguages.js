import MyButton from '../../../components/button/SnakeBorderButton'
import style from '../../../styles/pages/about/components/myLanguages/style.module.css'

export default function MyLanguages(){
    return(
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.card}><img src='/icons/AustralianFlag.png' /></div>
                <div className={style.card}><img src='/icons/ItalyFlag.png' /></div>
                <div className={style.card}><img src='/icons/PortugalFlag.png' /></div>
                <div className={style.card}><img src='/icons/SpainFlag.png' /></div>
            </div>
            <div className={style.button}>
                <MyButton
                    text='Contact Me'
                    url='/about'
                    backgroundColor= 'rgba(45,45,45,0.9)'
                    color='var(--grey)'
                /> 
            </div>  
         </div>
    )
}