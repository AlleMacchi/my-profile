"use client"
import React from "react"
import { useEffect, useState } from "react"
import style from '../../styles/components/button/backToTop/style.module.css'

export default function BackToTopButton(){

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            let vh10 = window.innerHeight/20;
            console.log('Height: ' + window.innerHeight + '10vh: '+ vh10);

            if(window.scrollY > vh10){
               setBackToTopButton(true) 
            }else{
               setBackToTopButton(false) 
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return(
        <>
            {backToTopButton && (
                <button className={style.MyButton}
                    onClick={scrollUp}
                ><img src='/icons/up-arrow.png' /></button>
            )}
        </>
    )
}