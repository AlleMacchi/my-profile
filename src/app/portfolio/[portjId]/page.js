import style from '../../../styles/pages/portfolio/components/portfolioPage/style.module.css'
import Title from '../../../components/title/title'


export default function ProjectPage(){
return(
       <div className={`animate__animated animate__fadeIn animate__slower ${style.container} `}>
            <div className={style.titleBx}>
                <Title 
                    /* Title */
                    firstPartTitle='BERNECK®'
                    secondPartTitle=''
                    /* Subtitle */
                    firstPartSubtitle='IMAL srl '
                    secondPartSubtitle='1st June 2016'/>
            </div>

            <div className={style.wrapper}>
                <div className={style.imageBx}>
                    <img src='/images/Project_01.jpg' />
                </div>
                <div className={style.textBx}>
                    <h2>industry</h2>
                    <h4>manufacturing process</h4>

                    <h2>used technology</h2>
                    <div className={style.techBx}>
                        <h4>PLC Siemens</h4>
                        <h4>S7 System</h4>
                        <h4>LADDER</h4>
                        <h4>Profinet</h4>
                        <h4>Profisafe</h4>
                        <h4>Wonderware</h4>
                        <h4>Title</h4>
                        <h4>Title</h4>
                        <h4>Title</h4>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}