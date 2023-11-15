import style from '../../../styles/pages/about/components/services/style.module.css'
import ServiceCard from '../../../components/card/ServicesCard'

export default function Services(){
    return(
        <div className={style.container}>
            {/* PLC Developer */}
            <div className={style.card}>
                <ServiceCard 
                    urlImage='/icons/PLC.png'
                    title='PLC' 
                    titleBackground='PLC'                   
                    content="PLC developer with 20+ years' experience in industrial automation, 
                    expert in programming, troubleshooting, and optimizing PLC systems for efficiency, and
                    skilled in language AWL, LADDER, SCL/STL"

                    textButton='Read Me'
                    hasButton={false}
                />
            </div>
            {/* SCADA Developer */}
            <div className={style.card}>
                <ServiceCard 
                    urlImage='/icons/SCADA.png'
                    title='SCADA'     
                    titleBackground='SCADA'               
                    content='I specialize in SCADA and HMI development with expertise in FactoryTalk and WinCC, 
                    crafting customized and visually stunning interfaces in HTML.'

                    textButton='Read Me'
                    hasButton={false}
                />
            </div>
            {/* PC Developer */}
            <div className={style.card}>
                <ServiceCard 
                    urlImage='/icons/codeW.png'
                    title='CODE'       
                    titleBackground='CODE'              
                    content='Versatile developer skilled in JavaScript, Python, HTML, CSS, and 3D design with Blender. 
                    Proficient in creating dynamic web solutions, software, and immersive 3D visuals.'

                    textButton='Read Me'
                    hasButton={false}
                />
            </div>
            {/* ROBOT Developer */}
            <div className={style.card}>
                <ServiceCard 
                    urlImage='/icons/robot.png'
                    title='ROBOT'       
                    titleBackground='ROBOT'            
                    content='Certified KUKA developer, KUKA College grad. Proficient in robotic programming, 
                    operation, and system integration'

                    textButton='Read Me'
                    hasButton={false}
                />
            </div>
            {/* Site Manager */}
            <div className={style.card}>
                <ServiceCard 
                    urlImage='/icons/project.png'
                    title='SITE MANAGER'    
                    titleBackground='SM'               
                    content='Experienced Industrial Automation Project Manager, 
                    adept at optimizing processes, enhancing efficiency, and delivering 
                    successful projects.'

                    textButton='Read Me'
                    hasButton={false}
                />
            </div>
            {/* Consulting */}
            <div className={style.card}>
                <ServiceCard 
                    urlImage='/icons/consulting.png'
                    title='CONSULTING'    
                    titleBackground='CONS'               
                    content='Expert guidance in industrial automation: optimizing processes, 
                    enhancing efficiency, and streamlining systems for maximum performance.'

                    textButton='Read Me'
                    hasButton={false}
                />
            </div>
        </div>
            
    )
}