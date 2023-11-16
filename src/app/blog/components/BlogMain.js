import BlogCard from "../../../components/card/MyBlogCard";
import style from '../../../styles/pages/blog/components/BlogMain/style.module.css'

export default function BlogMain(){
    return(
        <div className={style.container}> 
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

            {/* <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> */}
        </div>
        
    )
}