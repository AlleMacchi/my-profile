import React from "react";
import style from '../../styles/components/card/SkillCard/style.module.css'

export default function SkillCard(props){
    return(
    <div className={style.item}>
        <div className={style.card}><img src={props.urlImage} /></div>
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
    </div>
    )
}