import style from '../../../styles/pages/portfolio/components/portfolioPage/style.module.css'
import Title from '../../../components/title/title'
import GeneralData from '../../../data/Portfolio/List.json'
import Data from '../../../data/Portfolio/Proj.json'


import ParseTxtToHtml from '../components/ParseTxtToHtml'

export default async function ProjectPage({params}){
    
const Overview = Data[params.portjId].overview;
const Paragraph01 = Data[params.portjId].paragraph01;
const Paragraph02 = Data[params.portjId].paragraph02;
const Paragraph03 = Data[params.portjId].paragraph03;
const UseTech = Data[params.portjId].usedTech;
const urlMedia01 = Data[params.portjId].urlMedia01;
const urlMedia02 = Data[params.portjId].urlMedia02;
const urlMedia03 = Data[params.portjId].urlMedia03;
const Conclusion = Data[params.portjId].conclusion;


return(
       <div className={`animate__animated animate__fadeIn animate__slower ${style.container} `}>
            <div className={style.titleBx}>
                <Title 
                    /* Title */
                    firstPartTitle={GeneralData[params.portjId].title}
                    secondPartTitle=''
                    /* Subtitle */
                    firstPartSubtitle={GeneralData[params.portjId].company}
                    secondPartSubtitle={GeneralData[params.portjId].date}/>
            </div>

            <div className={style.wrapper}>
                <div className={style.imageBx}>
                    <img src={Data[params.portjId].urlProjMedia} />
                </div>
                <div className={style.textBx}>
                    <h2>industry</h2>
                    <h4>{Data[params.portjId].industry}</h4>

                    <h2>used technology</h2>
                    <div className={style.techBx}>
                        <ParseTxtToHtml Txt={UseTech} />  
                    </div>
                    <h2>Country</h2>
                    <h4>{Data[params.portjId].country}</h4>
                </div>
            </div>

            <div className={style.overviewWrapper}>
                <h2>Overview</h2>
                <p>{Overview}
                </p>
            </div>
            <div className={style.contentBx}>
                <div className={style.paragraph01}>
                    <ParseTxtToHtml Txt={Paragraph01} />  
                </div>
                <div className={style.paragraph02}>
                    <ParseTxtToHtml Txt={Paragraph02} /> 
                </div>
                <div className={style.image01}>
                    <ParseTxtToHtml Txt={urlMedia01} />  
                </div>
                <div className={style.paragraph03}>
                    <ParseTxtToHtml Txt={Paragraph03} />
                </div>
                <div className={style.image02}>
                    <ParseTxtToHtml Txt={urlMedia02} />
                </div>
            </div>
            
            <div className={style.conclusionBx}>
                <div className={style.conculsionImage} id={style.conclusionIdImage}>                    
                    <ParseTxtToHtml Txt={urlMedia03} />
                </div>
                <div className={style.conclusionText} id={style.conclusionIdText}>
                    <ParseTxtToHtml Txt={Conclusion} />
                </div>
            </div>
            <div className={style.titleBx}>
                <a href="/portfolio"className={style.button}>Back to portfolio</a>
            </div>
        </div>
    )
}