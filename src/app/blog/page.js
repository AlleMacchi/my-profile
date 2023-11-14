import React from "react";
import AnimatedCursor from "react-animated-cursor"
import Title from '../../components/title/title'
import style from '../../styles/pages/blog/layout/style.module.css'
import ServicesCard from "../../components/card/ServicesCard";

export default function AboutMe(){
    return(       
        <div className={`animate__animated animate__fadeIn animate__slower ${style.container}`} >
            <AnimatedCursor 
                innerSize={8}
                outerSize={40}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                backgroundColor: 'var(--white)'
                }}
                outerStyle={{
                border: '2px solid var(--white)'
                }}
            />
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Blog'
                    /* Subtitle */
                    firstPartSubtitle='Get to know '
                    secondPartSubtitle='me.'
                />
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