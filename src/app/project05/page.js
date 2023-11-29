import React from "react";
import style from '../../styles/pages/project05/layout/style.module.css'
import Main from './components/main';

export default function AboutMe(){
    return(       
        <div className={`animate__animated animate__fadeIn animate__slower ${style.container}`} >
            <div className={style.main}>
                <Main />
            </div>
            
        </div>
        )
}
