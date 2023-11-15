import React from "react";
import style from '../../styles/components/card/BlogCard/style.module.css'

export default function BlogCard(){
    return(
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.imgBx}>
                    <img src="/images/Blog.jpg"></img>
                </div>
                <div className={style.content}>
                    <h2>Card One</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Soluta porro pariatur cumque tempora, quidem quibusdam 
                        similique at saepe molestias corrupti earum, ea quasi 
                        veniam eius nam aliquam laudantium sequi ullam.</p>
                </div>
            </div>
        </div>
    )
}