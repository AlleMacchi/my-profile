import React from "react";
import style from '../../styles/components/card/PortfolioCard/style.module.css'

export default function PortfolioCard(props){
    const activeClass = props.hasButton ? style.active : '';

    return(
    <div className={style.container}>               
        <div class={style.imgBx}>
            <img src={props.urlImage} alt="portfolio-card" />
        </div>
        <div class={style.textBx}>
            <div className={style.post_date}>
                <span>{props.company}</span>
                <span>{props.date}</span>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.post_text}>{props.text}</p>
            <a className={`${style.button} ${activeClass}`} href="#">{props.textButton}</a>
        </div>        
    </div>
    )
}