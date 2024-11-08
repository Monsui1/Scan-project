import styles from './Search.module.css'
import SearchForm from './SearchForm.jsx'


function SearchField() {
    return (

      <div id='container'>
        <div className={styles.search}>
            <div className={styles.search_info}>
                <div className={styles.search_h1}>Найдите необходимые<br/>данные в пару кликов.</div>
                <div className={styles.search_p}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</div>
                <SearchForm />
            </div>
            <div className={styles.search_img}>
                <div className={styles.img_docs}>
                  <img className={styles.document} src='/Document.svg' alt="Document"></img>
                  <img className={styles.folders} src='/Folders.svg' alt="Folders"></img>
                </div>
                <div className={styles.img_rocket}>
                  <img src='/manRocket.svg' alt="manRocket"></img>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default SearchField
