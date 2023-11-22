import style from '../../../styles/pages/portfolio/components/project4/style.module.css'

export default function Project4({params}){
    return(
        <>
        <div className={style.container} id={style.wrapper}>      
           <h1> Project Page N#: {params.projId} </h1> 
        </div>
        <div id={style.warning_message}>
            this website is only viewable in landscape mode
        </div>
        </>
    )
    
}