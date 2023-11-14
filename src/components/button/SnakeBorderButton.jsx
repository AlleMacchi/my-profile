import React from "react";
import style from '../../styles/components/button/SnakeBorderButton/style.module.css'

export default function SnakeBorderButton(props){
    
    const styleButton ={
        fontSize: 'calc(clamp(.1rem, 1vw + 1rem,  1rem)*' + props.fontSize + ')',
        background: props.backgroundColor,
        color: props.color,
        fontFamily: props.fontFamily,
    }

    return(
        <div className={style.container}>
            <a style={styleButton} href={props.url}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.text}
            </a>
        </div>

    )
}