import React from "react";
import AnimatedCursor from "react-animated-cursor"
import Title from '../../components/title/title'
import CvDownload from './components/cvDownload'
import Services from './components/services'
import MySkills from '../about/components/mySkills'
import MyLanguages from '../about/components/myLanguages'
import style from '../../styles/pages/about/layout/style.module.css'

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
                    firstPartTitle='About '
                    secondPartTitle='Me'
                    /* Subtitle */
                    firstPartSubtitle='Get to know '
                    secondPartSubtitle='me.'
                />    
            </div>
            <div className={style.CvDownload}>
                <CvDownload />
            </div>
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Services'
                    /* Subtitle */
                    firstPartSubtitle='Learn about what '
                    secondPartSubtitle='I provide'
                />     
            </div>
            <div className={style.services}>
                <Services />
            </div>   
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Skills'
                    /* Subtitle */
                    firstPartSubtitle='Familiarize yourself with '
                    secondPartSubtitle='my skills.'
                />     
            </div>            
            <div>
                <MySkills />
            </div>
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Languages'
                    /* Subtitle */
                    firstPartSubtitle='Traveling worldwide improved '
                    secondPartSubtitle='my language skills.'
                />     
            </div>   
            <div>
                <MyLanguages />
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