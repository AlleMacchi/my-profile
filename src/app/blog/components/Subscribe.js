import MyButton from '../../../components/button/SnakeBorderButton'
import style from '../../../styles/pages/blog/components/Subscribe/style.module.css'

export default function Subscribe(){
    return(
        <form action={'#'}>
            <div className={style.formBx}>
                <input type='text' name='EmailAddress' placeholder='Enter your email' />
                <div className={style.btn}>                
                    <MyButton
                        text='Subscribe'
                        url='/blog'
                        backgroundColor= 'rgba(45,45,45,0.9)'
                        color='var(--grey)'
                />
                </div>
            </div>
        </form>
    )
}