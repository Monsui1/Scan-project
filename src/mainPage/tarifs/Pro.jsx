import styles from './Tarifs.module.css'

function Pro() {
    return (
        <div>
            <div className={styles.tarifs}>

                    <div className={styles.pro}>
                        <div className={styles.pro_header}>
                            <div className={styles.tarifs_title}>
                                <h3>Pro</h3>
                                <p>Для HR и фрилансеров</p>
                            </div>
                            <img className={styles.icon} src='/target.svg'/>
                        </div>
                        <div className={styles.tarifs_info}>
                            <div className={styles.tarifs_price}>
                                <div className={styles.price}>
                                    <div className={styles.price_actually}>1 299</div>
                                    <div className={styles.price_prev}>2 600</div>
                                </div>
                                <p className={styles.price_p}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className={styles.tarif_info}>
                                <h4>В тариф входит:</h4>
                                <ul className={styles.tarif_lists}>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Все пункты тарифа Beginner</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Экспорт истории</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Рекомендации по приоритетам</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.btn_info}><button ><div className={styles.btn}>Подробнее</div></button></div>
                    </div>

            </div>
            
        </div>
  )
}

export default Pro