import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { isAuth, authClear } from "../../func/authControl.jsx";
import { useNavigate } from "react-router-dom";
import { accountInfo } from "../../API/auth.jsx";
import { useState } from 'react';




function AuthBlock() { 

    const [companiesUsed, setCompaniesUsed] = useState("");
    const [companiesLimit, setcompaniesLimit] = useState("");
    const [userName, setUserName] = useState("");


    if(isAuth()){
        const getComp = async () => {
            const res = await accountInfo(localStorage.getItem('accessToken'));
            localStorage.setItem("CompaniesUsed", res.usedCompanyCount);
            localStorage.setItem("CompaniesLimit", res.companyLimit);
            setCompaniesUsed(res.usedCompanyCount);
            setcompaniesLimit(res.companyLimit);
            setUserName(localStorage.getItem("login"));
        };
        getComp();
    }

     
    const navigate = useNavigate();
    
    function clear(){
        console.log('clear');
        authClear();
        navigate("/");
        window.location.reload();
    }

    if(isAuth()){
        return (
            <>
                <div className={styles.limit}>
                    <div className={styles.limit_used}>
                        <div className={styles.info}>Использовано компаний </div>
                        <div className={styles.data}>{companiesUsed}</div>
                    </div>
                    <div className={styles.limit_used}>
                        <div className={styles.info}>Лимит по компаниям</div>
                        <div className={styles.dataLimit}>{companiesLimit}</div>
                    </div>    
                </div>
                <div className={styles.profileAuth}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{userName}</div>
                        <div onClick={clear} className={styles.profileLogout}>Выйти</div>
                    </div>
                    <div className={styles.profileIcon}>
                        <img src='./avaMan.png'></img>
                    </div>
                </div>
            </>
        )
    }else{
        console.log('notAuth');
        return (
            <>
                <div className={styles.profile}>
                    <div className={styles.registration}><Link to="/" className={styles.button_registration}>Зарегистрироваться</Link></div>
                    <div className={styles.login}><Link to="/registr" className={styles.button_login}>Войти</Link></div>
                </div>
            </>
        )
    }
}

export default AuthBlock;