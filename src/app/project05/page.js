import React from "react";
import style from '../../styles/pages/project05/layout/style.module.css'
import Main from './components/main';

export default function Project05(){
    return(       
        <div className={style.container} >
            <div className={style.main}>
                <Main />
            </div>
        </div>
        )
}
