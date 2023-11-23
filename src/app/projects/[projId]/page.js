"use client"
import React from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";

import style from '../../../styles/pages/portfolio/components/projectPage/style.module.css'
import Header from '../../../common/header'
import Footer from '../../../common/footer'
import Title from '../../../components/title/title'


export default function ProjectPage(){
    const [inView, setInView] = useState(false);

    return(

<       div className={`animate__animated animate__fadeIn animate__slower ${style.container} `}>
                {/* ********************************************* */}
                {/* SECTION #1 - TITLE AND MAIN PICTURE */}
                {/* ********************************************* */}
                <section className={style.section} id={style.sec1}>
                    <div className={style.nav}> <Header /></div> 
                    <div className={style.title}>  
                        <Title 
                            /* Title */
                            firstPartTitle='My '
                            secondPartTitle='Project'
                            /* Subtitle */
                            firstPartSubtitle='Some Of My '
                            secondPartSubtitle='Works.'
                        />         
                    </div>     
                    <div className={style.titleImgBx} inView={inView}>
                        <InView onChange={setInView}>
                            {({ ref, inView }) => (
                                <div className={`${style.titleImg} ${inView ? style.square : ""} `} ref={ref}>
                                </div>
                            )}
                        </InView>                         
                    </div>             
                </section>
                {/* ********************************************* */}
                {/* SECTION #2 - DESCRIPTION */}
                {/* ********************************************* */}
                <section className={style.section} id={style.sec2}>
                    <div className={style.descContainer}>
                        <div className={style.overview}>
                            <h4>Overview</h4>
                        </div>
                        <div className={style.description}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aliquam ipsum est, fringilla mollis nunc quis, pellentesque auctor est. 
                                Fusce volutpat leo vel fermentum malesuada. Ut ornare dictum mi, eget tincidunt metus congue eu. 
                                Aliquam dictum id dolor eget commodo. Nulla facilisi. Maecenas aliquam faucibus mollis. 
                                Fusce a porta massa. Nam nisi nisi, mollis non justo ac, interdum porta risus. 
                                Pellentesque varius purus eros, nec placerat velit blandit id. Donec sapien urna, 
                                mattis vitae elit non, pellentesque imperdiet turpis. Fusce finibus dapibus turpis, 
                                nec molestie risus sodales in. Duis nibh est, ullamcorper non tortor at, feugiat accumsan urna. 
                                In lectus purus, sodales in maximus posuere, maximus ut turpis. Vestibulum pharetra felis facilisis porta eleifend. 
                                Cras non turpis et turpis eleifend fringilla.
                            </p>
                        </div>
                    </div>
                </section>
                {/* ********************************************* */}
                {/* SECTION #3 - IMAGE/MEDIA */}
                {/* ********************************************* */}               
                <section className={style.section} id={style.sec3}>

                </section>
                {/* ********************************************* */}
                {/* SECTION #4 -  */}
                {/* ********************************************* */}               
                <section className={style.section} id={style.sec4}>

                </section>
                {/* ********************************************* */}
                {/* SECTION #5 -  */}
                {/* ********************************************* */}                 
                <section className={style.section} id={style.sec5}>
                    <div className={style.foot}> <Footer /></div>
                </section>

        </div>
    )
}