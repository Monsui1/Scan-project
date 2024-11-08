import styles from './Tarifs.module.css'
import Beginner from './Beginner'
import Pro from './Pro'
import Business from './Business'
function Tarifs() {
    return (
        <div id='container'>
        <div>
            <h2>наши тарифы</h2>
                <div className={styles.tarifs}>
                    <Beginner />
                    <Pro />
                    <Business />
                </div>
            
        </div>
    </div>
  )
}

export default Tarifs