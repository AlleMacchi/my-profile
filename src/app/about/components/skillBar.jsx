import React from "react";
import style from '../../../styles/pages/about/components/skillBar/style.module.css'

export default function MySkills(props){

    const MyStyle = {
        width:props.perc,
    }

    return(
        <div className={style.container}>
            <h3>{props.title}</h3>
            <span className={style.bar}>
                <span className={style.fill} style={MyStyle}>{props.perc}</span>
            </span>
        </div>
    )
}