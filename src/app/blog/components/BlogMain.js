import BlogCard from "../../../components/card/MaayaBlogCard";
import style from '../../../styles/pages/blog/components/BlogMain/style.module.css'

import Data from '../../../data/Blogs/List.json'

const DataCards = Data;

export default function BlogMain(){
    return(
        <div className={style.container}> 
            {DataCards.map((DataCards) => (
                <BlogCard
                    key={DataCards.id} 
                    urlImage={DataCards.urlImage}
                    date={DataCards.date}
                    title={DataCards.title}
                    text={DataCards.text}
                    textButton={DataCards.textButton}
                    hasButton={DataCards.hasButton}
                    urlButton={DataCards.urlButton}
                />
            ))}
        </div>        
    )
}