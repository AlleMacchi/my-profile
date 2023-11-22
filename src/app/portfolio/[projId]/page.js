import Title from '../../../components/title/title'
import style from '../../../styles/pages/portfolio/components/projectPage/style.module.css'

export default function ProjectPage(){
    return(
        <div className={`animate__animated animate__fadeIn animate__slower ${style.wrapper} `}>
                <Title 
                    /* Title */
                    firstPartTitle='My First'
                    secondPartTitle='Project'
                    /* Subtitle */
                    firstPartSubtitle='Some Of My '
                    secondPartSubtitle='Works.'
                />
            <div className={style.container}>
                <div className={style.Bx} id={style.img1}> 
                    <img src='/images/Project_01_img_01.jpg'></img>
                </div>
                <div className={style.Bx} id={style.txt1}>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam quis nunc id ligula tincidunt pellentesque sed sit amet massa. Curabitur libero lorem, 
                        tristique id diam id, malesuada commodo velit. Mauris ornare feugiat hendrerit. 
                        Integer consequat erat sem. Nulla neque velit, interdum in pharetra at, tempus vitae nibh. 
                        Nulla dictum elit tempor congue semper. Fusce interdum blandit nunc, at bibendum lorem placerat quis. 
                        Proin eget condimentum quam, imperdiet commodo lectus. Vestibulum placerat ullamcorper ante vel tristique. 
                        Suspendisse placerat, neque sed faucibus dapibus, nisi augue vestibulum ex, et tincidunt dui velit quis dolor. 
                        Sed eget est elit. Phasellus volutpat dignissim ipsum, nec semper est. Pellentesque dictum lacus vel leo condimentum dignissim.
                    </p>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.Bx} id={style.txt2}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam quis nunc id ligula tincidunt pellentesque sed sit amet massa. Curabitur libero lorem, 
                        tristique id diam id, malesuada commodo velit. Mauris ornare feugiat hendrerit. 
                        Integer consequat erat sem. Nulla neque velit, interdum in pharetra at, tempus vitae nibh. 
                        Nulla dictum elit tempor congue semper. Fusce interdum blandit nunc, at bibendum lorem placerat quis. 
                        Proin eget condimentum quam, imperdiet commodo lectus. Vestibulum placerat ullamcorper ante vel tristique. 
                        Suspendisse placerat, neque sed faucibus dapibus, nisi augue vestibulum ex, et tincidunt dui velit quis dolor. 
                        Sed eget est elit. Phasellus volutpat dignissim ipsum, nec semper est. Pellentesque dictum lacus vel leo condimentum dignissim.
                    </p>
                </div>
                <div className={style.Bx} id={style.img2}> 
                    <img src='/images/Project_01_img_03.jpg'></img>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.Bx} id={style.img3}> 
                    <img src='/images/Project_01_img_02.jpg'></img>
                </div>
                <div className={style.Bx} id={style.txt3}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam quis nunc id ligula tincidunt pellentesque sed sit amet massa. Curabitur libero lorem, 
                        tristique id diam id, malesuada commodo velit. Mauris ornare feugiat hendrerit. 
                        Integer consequat erat sem. Nulla neque velit, interdum in pharetra at, tempus vitae nibh. 
                        Nulla dictum elit tempor congue semper. Fusce interdum blandit nunc, at bibendum lorem placerat quis. 
                        Proin eget condimentum quam, imperdiet commodo lectus. Vestibulum placerat ullamcorper ante vel tristique. 
                        Suspendisse placerat, neque sed faucibus dapibus, nisi augue vestibulum ex, et tincidunt dui velit quis dolor. 
                        Sed eget est elit. Phasellus volutpat dignissim ipsum, nec semper est. Pellentesque dictum lacus vel leo condimentum dignissim.
                    </p>
                </div>
            </div>
            <a href="/portfolio"className={style.button}>Back to Portfolio</a>
        </div>
    )
}