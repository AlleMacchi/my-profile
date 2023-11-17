import React from "react";
import Title from '../../components/title/title';
import style from '../../styles/pages/blog/layout/style.module.css';
import BlogMain from "./components/BlogMain";
import Subscribe from './components/Subscribe';

export default function MyBlog(){
    return(       
        <div className={`animate__animated animate__fadeIn animate__slower ${style.container}`} >
            <div className={style.title}>
                <Title 
                    /* Title */
                    firstPartTitle='My '
                    secondPartTitle='Blog'
                    /* Subtitle */
                    firstPartSubtitle='Stay tuned for all '
                    secondPartSubtitle='my news.'
                />
            </div>
            <div className={style.main}> 
                <BlogMain />
            </div>
            <div className={style.title}>
                <Subscribe />
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