import style from '../../../styles/pages/blog/components/BlogPage/style.module.css'
import Data from '../../../data/Blogs/List.json'
import MyButton from '../../../components/button/SnakeBorderButton';

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

        {/* <BlogCard
                    key={DataCards[params.blogId].id} 
                    urlImage={DataCards[params.blogId].urlImage}
                    date={DataCards[params.blogId].date}
                    title={DataCards[params.blogId].title}
                    text={DataCards[params.blogId].text}
                    textButton={DataCards[params.blogId].textButton}
                    hasButton={DataCards[params.blogId].hasButton}
                    urlButton={DataCards[params.blogId].urlButton}
                /> */}