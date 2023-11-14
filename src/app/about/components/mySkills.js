import SkillBar from './skillBar'
import style from '../../../styles/pages/about/components/mySkills/style.module.css'

export default function MySkills(){
    return(
        <div className={style.container}>
            <div className={style.card}>
                <SkillBar 
                    title='AWL'
                    perc='100%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='LADDER'
                    perc='100%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='SCL/STL'
                    perc='100%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='KUKA KRC4'
                    perc='80%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='PYTHON'
                    perc='80%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='JAVASCRIPT'
                    perc='80%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='C#'
                    perc='60%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='3D BLENDER'
                    perc='70%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='REACT.JS'
                    perc='80%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='NEXT.JS'
                    perc='70%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='SQL'
                    perc='70%'
                />
            </div>
            <div className={style.card}>
                <SkillBar 
                    title='NoSQL'
                    perc='70%'
                />
            </div>
        </div>



    )
}