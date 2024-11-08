import Header from '../mainPage/header/Header.jsx'
import styles from './Registration.module.css'
import Form from './Form/Form.jsx'
function Registration(){
    return(
        <>
            <Header />
            <div id="container">
                <div className={styles.registr}>
                    <div className={styles.registr_page}>
                        <div className={styles.registr_info}>Для оформления подписки на&nbsp;тариф,&nbsp;необходимо авторизоваться.</div>
                        <div className={styles.form_menu}><Form /></div>
                        <div className={styles.registr_img}><img src='./Characters.svg'></img></div>
                    </div>
                    <div className={styles.form}><Form /></div>
                </div> 
            </div>
        </>
    )
}
export default Registration