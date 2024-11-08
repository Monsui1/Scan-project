import styles from './Result.module.css'
import  ResultItem  from '../ResultItem/ResultItem.jsx';
import { useContext, useEffect, useState } from 'react';
import ResultContext from '../../context/createContext';
import { Documents } from '../../API/data';
import { mapArr } from '../../func/map';
import { ResultForm, ResultSlider } from './ResultForm';

async function fetchDetailData(documentIds) {
  try {
    return await Documents(documentIds);
  } catch (error) {
    console.error("Failed to fetch detail data", error);
    return null;
  }
}


function getFirstN(documentList, n) {
  return documentList.slice(0, n);
}


function ResultField() {


  const context = useContext(ResultContext);
  const [countDocs, setCountDocs] = useState(4);

  const resultGeneralData = context.generalData;
  const resultData = context.data;

  const detailsData = context.detailsData;
  const setDetailsData = context.setDetailsData;

  useEffect(() => {

    console.log(resultData)

    if (resultData && resultData.data.items.length > 0) {
      const documentIds = getFirstN(resultData.data.items, countDocs).map(item => item.encodedId);
      fetchDetailData(documentIds).then(setDetailsData);
    }
  }, [resultData, countDocs]);

  const moreBtnHandler = () => {
    const countDocsIterator = 2;
    const remainingDocs = resultData.data.items.length - countDocs;
    const additionalDocs = Math.min(remainingDocs, countDocsIterator);
    setCountDocs(countDocs + additionalDocs);
  };





    return (

      <div id='container'>
        <div className={styles.result}>
            <div className={styles.result_header}>
                <div className={styles.result}>
                  <div className={styles.result_h1}>Ищем. Скоро<br /> будут результаты</div>
                  <div className={styles.result_p}>Поиск может занять некоторое время, <br/>просим сохранять терпение.</div>
                </div>
                <div className={styles.result_img}><img src='/woman.svg' alt ='woman'></img></div>
            </div>
            <div className={styles.result_block}>


            <div className={styles.subtitle}>Общая сводка</div>
            <div className={styles.subtitle_result}>Найдено
            {!resultGeneralData
                ? ` 0`
                : ` ${mapArr(resultGeneralData.data.data).length}`} вариантов
          </div>
          {<ResultSlider isLoading={!resultGeneralData} data={!resultGeneralData
              ? []
              : resultGeneralData.data.data} />}

            </div>
        </div>
        <div className={styles.resultBlock}>
          <h2 className={styles.subtitle}>Список документов</h2>
          <ul className={styles.resultList}>
            {!resultData || +resultData.data.items.length === 0
                ? <p></p>
                : !detailsData
                    ? <ResultForm />
                    : detailsData.data.map(item => <ResultItem key={item.ok.id} data={item.ok} />)}
          </ul>
          <button onClick={moreBtnHandler} className={resultData && ((countDocs) >= +resultData.data.items.length) ? styles.seeMoreBtnHidden : styles.seeMoreBtn}>Показать больше</button>
        </div>
      </div>
    )
}
  
  export default ResultField
