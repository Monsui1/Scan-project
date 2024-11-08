import Slider1 from './Slider/Slider.jsx'
import styles from './Advantages.module.css'
import Slider_menu from './Slider/Slider_menu.jsx'

function Advantages() {
    return (
      <div id='container'>
        <div className='advantages_main'>
            <h2 className={styles.advantages_tittle}>Почему<br/> именно мы</h2>
            <div className={styles.slider1}><Slider1 /></div>
            <div className={styles.slider2}><Slider_menu/></div>
        </div>
      </div>
    )
  }
  
  export default Advantages


