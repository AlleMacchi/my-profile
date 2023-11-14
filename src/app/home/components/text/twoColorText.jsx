import React from "react";
import style from '../../../../styles/pages/home/text/twoColorText/style.module.css'




export default function TwoColorText(props){

    const firstTextStyle = {
        color:props.firstColor
     }
     const secondTextStyle = {
        color:props.secondColor
     }
    return(
        <>
        <h1 className={style.firstText} style={firstTextStyle}>{props.firstText}
            <span className={style.secondText} style={secondTextStyle}>
            {props.secondText}
            </span>
        </h1>
        </>
    )
}