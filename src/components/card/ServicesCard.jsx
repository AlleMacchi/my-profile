import React from "react";
import style from '../../styles/components/card/ServicesCard/style.module.css'

export default function ServicesCard(props){

    const urlImage = props.urlImage;
    const title = props.title;
    const titleBackground = props.titleBackground;
    const content = props.content;
    const textButton = props.textButton;
    const activeClass = props.hasButton ? style.active : '';

    return(
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.imgBx} data-text={titleBackground}>
                    <img src={urlImage} alt="icon service" />
                </div>
                <div className={style.content}>
                    <div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <a className={`${style.button} ${activeClass}`} href="#">{textButton}</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}