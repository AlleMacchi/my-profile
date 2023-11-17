import style from '../../../styles/pages/about/components/cvDownload/style.module.css'

import MyButton from '../../../components/button/SnakeBorderButton'
import MyVideo from '../../../components/videofullWidth/videoFullWidht'

export default function CvDownload(){
    return(
        <div className={style.container}>
            <div className={`col col-12 col-s-12 ${style.title}`} id={style.fieldText}>
                <h2>I'm an experienced <span>Industrial Automation Software Engineer</span> located in Melbourne, VIC.</h2>
                <br />
                <p>With 20 years of experience in this field, I have acquired the skills and knowledge necessary 
                    to contribute significantly to the success of your projects.
                </p>
                <div className={style.button}>
                    <MyButton
                        text='Download CV'
                        url='/about'
                        backgroundColor= 'rgba(45,45,45,0.9)'
                        color='var(--grey)'
                    />
                </div>  
            </div>
            <div className={`col col-12 col-s-12 ${style.imageBx}`} id={style.fieldImage}>
                <div className={style.image} />
            </div>
        </div>
    )
}