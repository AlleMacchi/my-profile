import style from '../../../styles/pages/about/components/mySkills/style.module.css'
import SkillCard from '../../../components/card/SkillCard'

import Data from '../../../data/Skills/List.json'

const DataSkills = Data;

export default function MySkillsNew(){
    return(
        <>
        <div className={style.container} id={style.firstContainer}>
              <div class={style.itemLeft}>
                <h4>Industrial Automation</h4>
              </div>
              <div class={style.itemRight}>
                {DataSkills.IndustrialAutomation.map((DataSkill,index) => (
                    <SkillCard 
                        key={DataSkill.id} 
                        urlImage={DataSkill.urlImage}
                        title={DataSkill.title}
                        subtitle={DataSkill.subtitle}
                    />
                ))}
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>Web Development</h4>
              </div>
              <div class={style.itemRight}>
                {DataSkills.WebDevelopment.map((DataSkill,index) => (
                    <SkillCard 
                        key={DataSkill.id} 
                        urlImage={DataSkill.urlImage}
                        title={DataSkill.title}
                        subtitle={DataSkill.subtitle}
                    />
                ))}
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>Programming languages</h4>
              </div>
              <div class={style.itemRight}>
                {DataSkills.ProgrammingLanguages.map((DataSkill,index) => (
                        <SkillCard 
                            key={DataSkill.id} 
                            urlImage={DataSkill.urlImage}
                            title={DataSkill.title}
                            subtitle={DataSkill.subtitle}
                        />
                    ))}
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>Data Base</h4>
              </div>
              <div class={style.itemRight}>
                {DataSkills.DataBase.map((DataSkill,index) => (
                        <SkillCard 
                            key={DataSkill.id} 
                            urlImage={DataSkill.urlImage}
                            title={DataSkill.title}
                            subtitle={DataSkill.subtitle}
                        />
                    ))}
              </div>
        </div>
        <div className={style.container}>
              <div class={style.itemLeft}>
                <h4>3D Design</h4>
              </div>
              <div class={style.itemRight}>
                {DataSkills._3dDesign.map((DataSkill,index) => (
                        <SkillCard 
                            key={DataSkill.id} 
                            urlImage={DataSkill.urlImage}
                            title={DataSkill.title}
                            subtitle={DataSkill.subtitle}
                        />
                    ))}
              </div>
        </div>
        </>
    )
}