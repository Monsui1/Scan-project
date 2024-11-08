import { useState } from "react";
import styles from './Form.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authSet } from "../../func/authControl.jsx";
import { sendLogin } from "../../func/interfax-api.jsx";

const postData = async (url = '', data = {}) => {

    const response = await axios.post(url, {
        method: 'POST',
        body: JSON.stringify(data),
    }, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json(); 
}



function Form(){
    const navigate = useNavigate();
    const [login, setLogin] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [result, setResult] = useState(""); 
    function handleSubmit(e) {
        console.log(e);
        e.preventDefault();



        postData('https://gateway.scan-interfax.ru/api/v1/account/login', { login: login, password: password })
        .then((data) => {
            console.log(data); 
            if (data.accessToken) {
                authSet(data, login);
                navigate("/");
            } else {
                setResult(data.message);
            }
        });
    } 

    function changeLogin(value){
        setLogin(value); 
        setResult("");
    }
    
    function changePassword(value){
        setPassword(value); 
        setResult("");
    }

    return(
        <div className={styles.form}>
            <div className={styles.loginContainer}>
            <div className={styles.row}>
                <div className={styles.loginForm}>
                <form onSubmit={handleSubmit}>
                    
                    <div className={styles.loginsignup}>
                    
                    <button className={styles.login}>Войти</button>
                    <button className={styles.signup}>Зарегистрироваться</button>
                    
                    </div>
                    <div className={styles.formGroup}>
                    <label>
                        Логин или номер телефона:
                        <input
                            type="text"
                            className={styles.FormControl}
                            placeholder=""
                            value={login}
                            onChange={(e) => changeLogin(e.target.value)}
                        />
                    </label>
                    </div>
                    <div className={styles.formGroup}>
                    <label>
                        Пароль:
                        <input
                            type="password"
                            className={styles.FormControl}
                            placeholder=""
                            value={password}
                            onChange={(e) => changePassword(e.target.value)}
                    
                        />
                    </label>
                    </div>
                    <div className={styles.error}>{result}</div>
                    <button 
                    className={styles.btnSubmit}>
                        Войти
                        </button>
                    <div className={styles.formGroup}>
                    <a href="" className={styles.recoverPwd}>Восстановить пароль</a>
                    <label>Войти через:</label>
                    <div className={styles.imgsvg}>
                        <img className={styles.Google} src='./Google.svg' alt="Google" />
                        <img className={styles.facebook} src='./facebook.svg' alt="Facebook" />
                        <img className={styles.yandex} src='./yandex.svg' alt="Yandex" />
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Form