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
                    firstPartSubtitle='Get to know '
                    secondPartSubtitle='me.'
                />
            </div>
            <div className={style.main}>
                <ContactMain />
            </div>
        </div>
        )
}



/*     const myComponentStyle = {
        height:50,
        width:150,
        position: "absolute",
        top:150, 
        left:1250,
     }

     const myComponentStyle2 = {
        height:450,
        width:450,
        margin:'0 0 0 90px',
     }
     const styleContainer = {
        display: 'flex',
     } */


{/*         <div style={myComponentStyle}>
            <Button 
                    url='/'
                    text='Download CV'
                    fontSize='.8'
                    backgroundColor='var(--background_button)'
                    color='var(--blue)'
                    fontFamily='sans-serif'
                    
                />
        </div> */}
 {/*        <div style={styleContainer}>
            <div style={myComponentStyle2}>
                <Card />
            </div>
            <div style={myComponentStyle2}>
                <Card />
            </div>
            <div style={myComponentStyle}>
            <Button 
                    url='/'
                    text='Download CV'
                    fontSize='.8'
                    backgroundColor='var(--background_button)'
                    color='var(--blue)'
                    fontFamily='sans-serif'
                    
                />
            </div>
        </div> */}