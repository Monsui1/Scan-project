import styles from './Main.module.css'
import { NavLink } from 'react-router-dom';
import { isAuth } from "../../func/authControl.jsx";



function Main() {
  return (
   <div id='container'>
       <div className={styles.main}>
            <div className={styles.main_h1}>
                <h1 className={styles.main_tittle}>Сервис по поиску публикаций о&nbsp;компании <br/>по его инн</h1>
                <p className={styles.info}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                
                {isAuth() ? (
                                <NavLink to="/search"><button className={styles.btn_main}><div >Запросить данные</div></button></NavLink>
                            ) : (<NavLink to="/registr"><button className={styles.btn_main}><div >Запросить данные</div></button></NavLink>)}
                
            </div>
          <img className={styles.img_main}src='/main_img.svg'/>
        </div>
    </div>
  )
}

export default Main
