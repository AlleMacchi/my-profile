import React from "react";
import style from '../../styles/components/card/BlogCard/style.module.css'

export default function BlogCard(props){
    return(

        <div className={style.card}>
            <div className={style.imgBx}>
                <img src={props.urlImage}></img>
            </div>
            <div className={style.content}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>

    )
}