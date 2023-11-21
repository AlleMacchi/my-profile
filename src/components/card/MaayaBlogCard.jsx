import style from '../../styles/components/card/MaayaBlogCard/style.module.css'
import SnakeBorderButton from '../button/SnakeBorderButton'

export default function MaayaBlogCard(props){
    const activeClass = props.hasButton ? style.active : '';

    var str = props.text;
    if(str.length > 170) str = str.substring(0,167) + '...';

    return(
        <div className={style.container}>
            <div className={style.imgBx}>
                <img src={props.urlImage} alt="blog-card" />
            </div>
            <div className={style.textBx}>
                <h4>{props.date}</h4>
                <div className={style.titleBx}>
                    <h2>{props.title}</h2>
                </div>
                <p className={style.paragraph}>{str}</p>
                <a href={props.urlButton} class={`${style.button} ${activeClass}`}>{props.textButton}</a>
            </div>
        </div>
    )
}