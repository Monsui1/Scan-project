import styles from './Header.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

function Login () {

    return (
        <div className={styles.profile}>
            <div className={styles.registration}><NavLink className={styles.button_registration}>Зарегистрироваться</NavLink></div>
            <div className={styles.login}><NavLink to="/login" className={styles.button_login}>Войти</NavLink></div>
        </div>
    )
}
export default Login