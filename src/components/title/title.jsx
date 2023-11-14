import React from "react";
import style from '../../styles/components/title/style.module.css'

export default function Title(props){
    return(
        <div className={style.container}>
            <h2>{props.firstPartTitle}<span>{props.secondPartTitle}</span></h2>
            <h4>{props.firstPartSubtitle}<span>{props.secondPartSubtitle}</span></h4>
        </div>
    )
}