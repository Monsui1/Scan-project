import styles from './Man.module.css'
function Man() {
    return (
    <div id='container'>
        
        <picture>
          <source srcSet="/man_mob.svg" media="(max-width: 992px)" />
          <img className={styles.img_man} src='/man.svg'/>
        </picture>
    </div>
  )
}

export default Man