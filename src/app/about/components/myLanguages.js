import SkillBar from './skillBar'
import style from '../../../styles/pages/about/components/mySkills/style.module.css'

export default function MyLanguages(){
    return(
        <div className={style.container}>
            <div className={style.card}>
                <SkillBar 
                    title='ITALIAN'
                    perc='100%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='PORTUGUESE'
                    perc='100%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='SPANISH'
                    perc='70%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='ENGLISH'
                    perc='90%'
                />
            </div>
        </div>



    )
}