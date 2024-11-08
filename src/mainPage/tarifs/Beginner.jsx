import styles from './Tarifs.module.css'
import { isAuth } from "../../func/authControl.jsx";



function Beginner() {


    return (
        <div>
            <div className={styles.tarifs}>
                <div className={styles.beginner}>
                    <div className={styles.begginer_header}>
                        <div className={styles.tarifs_title}>
                            <h3>Beginner</h3>
                            <p>Для небольшого исследования</p>
                        </div>
                        <img className={styles.icon} src='/light.svg'/>
                    </div>
                    <div className={styles.tarifs_info}>
                        <div className={styles.tarifs_price}>
                            <div className={styles.price}>
                                <div className={styles.price_actually}>799</div>
                                <div className={styles.price_prev}>1 200</div>
                            </div>
                            {isAuth() ? (
                                <div className={styles.tarif_auth}>Текущий тариф</div>
                            ) : ("")}
                            <p className={styles.price_p}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                        </div>
                        <div className={styles.tarif_info}>
                            <h4>В тариф входит:</h4>
                            <ul className={styles.tarif_lists}>
                                <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Безлимитная история запросов</li>
                                <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Безопасная сделка</li>
                                <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Поддержка 24/7</li>
                            </ul>
                        </div>
                    </div>
                    {isAuth() ? (
                                <div className={styles.btn_info_auth}><button ><div className={styles.btn}>Перейти в личный кабинет</div></button></div>
                            ) : (<div className={styles.btn_info}><button ><div className={styles.btn}>Подробнее</div></button></div>)}
                
                </div>
            </div>
        </div>
  )
}

export default Beginner