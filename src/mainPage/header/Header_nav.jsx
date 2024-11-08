import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";

function Header_nav(props) {
    const navigation = useNavigate();

    function redirectMain() {
        props.handler(); 
        navigation("/"); 
    }
    return(
       
        <div className={styles.header_nav}>
            <Link to="/" className={styles.button_nav}>Главная</Link>
            <Link to="/" className={styles.button_nav}>Тарифы</Link>
            <Link to="/" className={styles.button_nav}>FAQ</Link>
        </div>
    )
}
export default Header_nav