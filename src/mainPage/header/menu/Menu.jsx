import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../store/store.jsx";
import { isAuth, authClear } from "../../../func/authControl.jsx";
import styles from "./Menu.module.css"


function Menu() {

    const menuRef = useRef(null);
  
    const navigate = useNavigate();
  

    const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
    const [authStatus, setAuthStatus] = useState(localStorage.getItem("AuthStatus"));
  
    function handleMenu() {
      store.dispatch({ type: "CHANGE_MENU_STATUS" });
      setMenuStatus(!menuStatus);
    }

    
    function clear(){
      console.log('clear');
      authClear();
      navigate("/");
      window.location.reload();
  }


    if(isAuth()){
    return (
        <>

          <div
              className={menuStatus ? styles.menuButtonOpened : styles.menuButton}
              onClick={handleMenu} 
          >
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle}></div>
          </div>
  

          <div
              ref={menuRef}
              className={menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden}
          >
            <div className={styles.logo_menu}><img src="/scan-logo-white.svg" alt='logo'></img></div>

            <div className={styles.header_nav}>
                <Link to="/" className={styles.button_nav}>Главная</Link>
                <Link to="/" className={styles.button_nav}>Тарифы</Link>
                <Link to="/" className={styles.button_nav}>FAQ</Link>
            </div>
  

            <div className={styles.mobileAuth}>
              <Link to={"/"} className={styles.mobileRegister}>
                Зарегистрироваться
              </Link>

              <div onClick={clear} className={styles.login}><Link to="/" className={styles.mobileEnter}>Выйти</Link></div>
              
            </div>
          </div>
        </>
    )
  }else{
    return (
      <>
      {/* Кнопка меню */}
      <div
          className={menuStatus ? styles.menuButtonOpened : styles.menuButton}
          onClick={handleMenu} 
      >
        <div className={styles.rectangle}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.rectangle}></div>
      </div>

      {/* Мобильное меню */}
      <div
          ref={menuRef}
          className={menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden}
      >
        <div className={styles.logo_menu}><img src="/scan-logo-white.svg" alt='logo'></img></div>
        {/* Навигационное меню */} 
        {/* <nav className={styles.navMobile}>
          <Header_nav handler={handleMenu} />
</nav>*/}
        <div className={styles.header_nav}>
            <Link to="/" className={styles.button_nav}>Главная</Link>
            <Link to="/" className={styles.button_nav}>Тарифы</Link>
            <Link to="/" className={styles.button_nav}>FAQ</Link>
        </div>

        {/* Аутентификация на мобильном устройстве */}
        <div className={styles.mobileAuth}>
          <Link to={"/"} className={styles.mobileRegister}>
            Зарегистрироваться
          </Link>
         
              <div onClick='/registr' className={styles.login}><Link to="/registr" className={styles.mobileEnter}>Войти</Link></div>
         

        </div>
      </div>
    </>
    )}
  }
  
  export default Menu;