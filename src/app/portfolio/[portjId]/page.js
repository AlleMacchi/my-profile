import style from '../../../styles/pages/portfolio/components/projectPage/style.module.css'
import BackToTopButton from '../../../components/button/BackToTopButton'


export default function ProjectPage(){
    return(
        // <div className={`animate__animated animate__fadeIn animate__slower ${style.wrapper} `}>

<       div className={`animate__animated animate__fadeIn animate__slower ${style.container} `}>
                <div className={style.section} id={style.img1}>
                    adfsfasddf
                </div>
                <div className={style.section} id={style.img2}>
                    <BackToTopButton />
                </div>
                <div className={style.section} id={style.img3}></div>
                <div className={style.section} id={style.img4}></div>
                <div className={style.section} id={style.img5}></div>
        </div>
/*              <a href="/contact"className={style.button}>Lets Talk</a>
            <a href="/portfolio"className={style.button}>Back to Portfolio</a> 
        </div> */
    )
}