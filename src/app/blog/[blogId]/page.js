import style from '../../../styles/pages/blog/components/BlogPage/style.module.css'
import Data from '../../../data/Blogs/List.json'

const DataCards = Data;

export default function BlogPage({params}){
    return(
        <div className={style.container}>      
            <div className={style.imgBx}>
                <img src={DataCards[params.blogId].urlImage}></img>
            </div>
            <div className={style.textBx}>
                <h4>{DataCards[params.blogId].date}</h4>
                <div className={style.titleBx}>
                    <h2>{DataCards[params.blogId].title}</h2>
                </div>
                <p className={style.paragraph}>{DataCards[params.blogId].text}</p>
                <a href="/blog"className={style.button}>Back to blogs</a>
            </div>
        </div>
    )
    
}
