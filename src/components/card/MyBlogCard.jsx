import React from "react";
import style from '../../styles/components/card/MyBlogCard/style.module.css'

export default function MyBlogCard(){
    return(
    <div className={style.container}>               
        <div class={style.imgBx}>
            <img src="/images/Blog.jpg" alt="blog-one" />
            <div class={style.dateBx}>8 May,20</div>
        </div>
        <div class={style.textBx}>
            <h3>Harleys In Hawaai</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias dolore recusandae illum, corrupti quo 
                veniam saepe aliquid! Quis voluptates ratione consequuntur vel, perferendis cum provident? Magnam fugiat voluptas
                libero.</p>
        </div>        
    </div>
    )
}
