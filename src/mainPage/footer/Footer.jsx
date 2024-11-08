import styles from './Footer.module.css'


function Footer() {
    return (
        <footer>
            <div className={styles.footer_main}>
                <div className={styles.footer_logo}><img src='/scan-logo.svg'/></div>
                <div className={styles.footer_info}>
                    <p>г. Москва, Цветной б-р, 40</p>
                    <p>+7 495 771 21 11</p>
                    <p>info@skan.ru</p>
                    <p className={styles.copyright}>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    )
  }
  
  export default Footer