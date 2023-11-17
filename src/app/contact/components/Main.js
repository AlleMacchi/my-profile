import style from '../../../styles/pages/contact/components/main/style.module.css'

export default function ContactMain(){
    return(
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.contactInfo}>

                </div>

                <div className={style.contactForm}>
                    <form action={null}>
                        <h3 className={style.title}>Contac Me</h3>
                        <div className={style.inputContainer}>
                            <input type='text' name='name' className={style.input} />
                            <label for="">Username</label> 
                        </div>

                        <div className={style.inputContainer}>
                            <input type='email' name='email' className={style.input} />
                            <label for="">e-mail</label> 
                        </div>

                        <div className={style.inputContainer}>
                            <input type='tel' name='phone' className={style.input} />
                            <label for="">Phone</label> 
                        </div>

                        <div className={` ${style.inputContainer} ${style.textArea}`}>
                            <textarea name='message' className={style.input}></textarea>
                            <label for="">Message</label> 
                        </div>
                        <input type='submit' value={'Send'} className={style.btn}></input>
                    </form>
                </div>
            </div>

        </div>
    )
}