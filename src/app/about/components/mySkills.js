import SkillBar from './skillBar'
import style from '../../../styles/pages/about/components/mySkills/style.module.css'
import Title from '../../../components/title/title'

export default function MySkills(){
    return(
        <>
            <div className={style.title}>
                <Title 
                    firstPartSubtitle='Industrial Automation'
                />
            </div>
            <div className={style.container}>
                <div className={style.card}><img src='/icons/siemens_tia.png' /></div>
                <div className={style.card}><img src='/icons/Rockwell.png' /></div>
                <div className={style.card}><img src='/icons/B&R.png' /></div>
                <div className={style.card}><img src='/icons/KUKA.png' /></div>
            </div>
            <div className={style.title}>
                <Title 
                    firstPartSubtitle='Web Development'
                />     
            </div>   
            <div className={style.container}>       
                <div className={style.card}><img src='/icons/html.png' /></div>
                <div className={style.card}><img src='/icons/CSS.png' /></div>
                <div className={style.card}><img src='/icons/js.png' /></div>
            </div>     
            <div className={style.container}> 
                <div className={style.card}><img src='/icons/Bootstrap.png' /></div>
                <div className={style.card}><img src='/icons/ReactJs.png' /></div>
                <div className={style.card}><img src='/icons/nextjs.png' /></div>
                <div className={style.card}><img src='/icons/nodejs.png' /></div>

                <div className={style.card}><img src='/icons/npm.png' /></div>
                <div className={style.card}><img src='/icons/github.png' /></div>
            </div>     
            <div className={style.title}>
                <Title 
                    firstPartSubtitle='Programming languages'
                /> 
            </div>
            <div className={style.container}>   
                <div className={style.card}><img src='/icons/python.png' /></div>
                <div className={style.card}><img src='/icons/js.png' /></div>
                <div className={style.card}><img src='/icons/CSharp.png' /></div>
            </div>
            <div className={style.title}>
                <Title 
                    firstPartSubtitle='Data Base'
                />  
            </div>
            <div className={style.container}>     
                <div className={style.card}><img src='/icons/mysql.png' /></div>
                <div className={style.card}><img src='/icons/MongoDB.png' /></div>
            </div>
            <div className={style.title}>
                <Title 
                    firstPartSubtitle='3D Design'
                />    
            </div>  
            <div className={style.container} id={style.containerLastElement}>          
                <div className={style.card}><img src='/icons/Blender.png' /></div>
            </div>

        </>

    )
}