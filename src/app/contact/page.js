import React from "react";
import Title from '../../components/title/title'
import style from '../../styles/pages/contact/layout/style.module.css'
import ContactMain from "./components/Form";

export default function AboutMe(){
    return(       
        <div className={`animate__animated animate__fadeIn animate__slower ${style.container}`} >
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Contact'
                    /* Subtitle */
                    firstPartSubtitle='Get to know me, '
                    secondPartSubtitle='reach out.'
                />
            </div>
            <div className={style.main}>
                <ContactMain />
            </div>
        </div>
        )
}
