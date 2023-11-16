import style from '../../../styles/pages/about/components/mySkills/style.module.css'
import SkillCard from '../../../components/card/SkillCard'

export default function MySkillsNew(){
    return(
        <>
        <div className={style.container} id={style.firstContainer}>
              <div class={style.itemLeft}>
                <h4>Industrial Automation</h4>
              </div>
              <div class={style.itemRight}>
                <SkillCard 
                    urlImage='/icons/TIA-Portal-Logo.png'
                    title='PLC Siemens'
                    subtitle='AWL/LADDER/SCL'
                />              
                <SkillCard 
                    urlImage='/icons/Rockwell.png'
                    title='PLC AB'
                    subtitle='LADDER/STL'
                />   
                <SkillCard 
                    urlImage='/icons/B&R.png'
                    title='PLC B&R'
                    subtitle='LADDER/STL'
                />  
                <SkillCard 
                    urlImage='/icons/KUKA.png'
                    title='Robot KUKA'
                    subtitle='KRC4'
                />  
                <SkillCard 
                    urlImage='/icons/Sew-Eurodrive.png'
                    title='SEW Drivers'
                    subtitle='Start-up & Setting'
                /> 
                <SkillCard 
                    urlImage='/icons/siemens.png'
                    title='Siemens Drivers'
                    subtitle='Start-up & Setting'
                /> 
                <SkillCard 
                    urlImage='/icons/wincc-oa.png'
                    title='Siemens WinCC'
                    subtitle='Creation SCADA/HMI'
                /> 
                <SkillCard 
                    urlImage='/icons/FactoryTalkComplete.png'
                    title='AB FactoryTalk'
                    subtitle='Creation SCADA/HMI'
                /> 
                <SkillCard 
                    urlImage='/icons/wonderware.png'
                    title='Wonderware'
                    subtitle='Creation SCADA/HMI'
                /> 
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>Web Development</h4>
              </div>
              <div class={style.itemRight}>
                <SkillCard 
                    urlImage='/icons/html.png'
                    title='HTML'
                    subtitle='Tapping Text'
                /> 
                <SkillCard 
                    urlImage='/icons/CSS.png'
                    title='CSS'
                    subtitle='Style Sheet Language'
                /> 
                <SkillCard 
                    urlImage='/icons/JS.png'
                    title='JavaScript'
                    subtitle='Programming Language'
                /> 
                <SkillCard 
                    urlImage='/icons/Bootstrap.png'
                    title='Bootstrap'
                    subtitle='CSS framework'
                /> 
                <SkillCard 
                    urlImage='/icons/ReactJs.png'
                    title='ReactJs'
                    subtitle='JavaScript library'
                /> 
                <SkillCard 
                    urlImage='/icons/nextjs.png'
                    title='NextJs'
                    subtitle='Framework'
                /> 
                <SkillCard 
                    urlImage='/icons/nodejs.png'
                    title='NodeJs'
                    subtitle='Server JavaScript'
                /> 
                <SkillCard 
                    urlImage='/icons/npm.png'
                    title='NPM'
                    subtitle='Package Manager'
                />
                <SkillCard 
                    urlImage='/icons/github.png'
                    title='GitHub'
                    subtitle='Cloud Version Control'
                />

              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>Programming languages</h4>
              </div>
              <div class={style.itemRight}>
                <SkillCard 
                    urlImage='/icons/python.png'
                    title='Python'
                    subtitle='Programming Language'
                />
                <SkillCard 
                    urlImage='/icons/JS.png'
                    title='JavaScript'
                    subtitle='Programming Language'
                />
                <SkillCard 
                    urlImage='/icons/CSharp.png'
                    title='C#'
                    subtitle='Programming Language'
                />
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>Data Base</h4>
              </div>
              <div class={style.itemRight}>
                <SkillCard 
                    urlImage='/icons/mysql.png'
                    title='MySQL'
                    subtitle='SQL Database Sytem'
                />
                <SkillCard 
                    urlImage='/icons/MongoDB.png'
                    title='MongoDB'
                    subtitle='NoSQL Database Sytem'
                />
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>3D Design</h4>
              </div>
              <div class={style.itemRight}>
                <SkillCard 
                    urlImage='/icons/Blender.png'
                    title='Blender'
                    subtitle='3D creation suite'
                />
              </div>
        </div>
        </>
    )
}