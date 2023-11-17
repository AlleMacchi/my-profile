import React from "react";
import style from '../../styles/components/card/MyBlogCard/style.module.css'

export default function MyBlogCard(props){
    return(
    <div className={style.container}>               
        <div class={style.imgBx}>
            <img src={props.urlImage} alt="blog-card" />
            <div class={style.dateBx}>{props.date}</div>
        </div>
        <div class={style.textBx}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>        
    </div>
    )
}
