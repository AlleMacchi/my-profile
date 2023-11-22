import React from "react";
import Title from '../../components/title/title'
import style from '../../styles/pages/portfolio/layout/style.module.css'
import Main from './components/main'

export default function AboutMe(){
    return(       
        <div className={`animate__animated animate__fadeIn animate__slower ${style.container}`} >
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Portfolio'
                    /* Subtitle */
                    firstPartSubtitle='Some Of My '
                    secondPartSubtitle='Works.'
                />
            </div>
            <div className={style.main}>
                <Main />
            </div>
            
        </div>
        )
}
