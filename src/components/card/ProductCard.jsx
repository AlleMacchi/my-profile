import React from "react";
import style from "../../styles/components/card/ProductCard/style.module.css"
import Image from "next/image";

export default function ProductCard(){
    return(
        <div className={style.container}>
            <div className={style.circle}>
                <div className={style.logo}>
                    <Image 
                        className={style.imgLogo}
                        src="/icons/codeG.png"
                        alt="Code Logo"
                        height={96}
                        width={96}
                        priority 
                    />
                    <div class={style.centered}>Code</div>
                </div>
                <div className={style.content}>
                    <h2>Code</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos soluta dolor quae? Voluptates iure ad, quibusdam autem maxime vero, 
                        possimus ex magni earum velit ab impedit error asperiores. Sint, nisi?</p>
                        <a href="/">Explore More</a>
                </div>
                <Image 
                    className={style.img}
                    src="/icons/codeW.png"
                    alt="Code Logo"
                    height={300}
                    width={300}
                    priority 
                />
            </div>
        </div>
    )
}