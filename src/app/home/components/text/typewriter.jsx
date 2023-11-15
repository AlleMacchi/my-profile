import React from "react";
import style from '../../../../styles/pages/home/text/typewriter/style.module.css'   

export default function TypewriterText(){

    return(
        <div className={style.container}>
            <div className={style.staticText}>I'm a</div>
            <ul className={style.dynamicText}>
                <li><span>PLC Developer.</span></li>
                <li><span>Robot Developer.</span></li>
                <li><span>SCADA/HMI Developer.</span></li>
                <li><span>Web Developer.</span></li>
                <li><span>Site Manager.</span></li> 
            </ul>
        </div>
    )
}