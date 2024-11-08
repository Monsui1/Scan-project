import styles from './Tarifs.module.css'

function Business() {
    return (
        <div>
            <div className={styles.tarifs}>
                <div className={styles.business}>
                        <div className={styles.business_header}>
                            <div className={styles.tarifs_title}>
                                <h3>Business</h3>
                                <p>Для корпоративных клиентов</p>
                            </div>
                            <img className={styles.icon} src='/notepad.svg'/>
                        </div>
                        <div className={styles.tarifs_info}>
                            <div className={styles.tarifs_price}>
                                <div className={styles.price}>
                                    <div className={styles.price_actually}>2 379</div>
                                    <div className={styles.price_prev}>3 700</div>
                                </div>
                            </div>
                            <div className={styles.tarif_info}>
                                <h4>В тариф входит:</h4>
                                <ul className={styles.tarif_lists}>
                                    <li className={styles.tarif_list}><img className={styles.img_check}src='/check.svg'/>Все пункты тарифа Pro</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Безлимитное количество запросов</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Приоритетная поддержка</li>
                                </ul>
                            </div>
                        </div>
                    <div className={styles.btn_info}><button ><div className={styles.btn}>Подробнее</div></button></div>
                </div>
            </div>
            
        </div>
  )
}

export default Business