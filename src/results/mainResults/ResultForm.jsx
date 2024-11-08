import React, { useRef } from 'react';
import styles from './Result.module.css';

import { mapArr } from '../../func/map';
import DotLoader from 'react-spinners/DotLoader';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

function ResultForm() {
  return (
    <div id="container">
      <div className={styles.loader}>
        <DotLoader color="grey" loading={true} size={50} aria-label="Loading Spinner" data-testid="loader" />
        <p className={styles.loading}>Загружаем данные</p>
      </div>
    </div>
  );
}

function ResultSlider({ data, isLoading }) {
  const dataListRef = useRef(null);
  const mappingData = mapArr(data);


  return (
    <>
      <div className={styles.resultSlider}>

        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.items_data}>Период</div>
            <div className={styles.items_data}>Всего</div>
            <div className={styles.items_data}>Риски</div>
          </div>
          <Swiper
              slidesPerView={7}
              className="mySwiper2"
              loop={false}
              navigation={{
                nextEl:".result-next",
                prevEl:".result-prev"
              }}
              modules={[Navigation]}
              breakpoints={{
                "0":{
                  slidesPerView:1
                },
                "376":{
                  slidesPerView:8
                }
              }}
            > 
              
               
                {isLoading ? (
                <ResultForm />
                  ) : (
                    mappingData.map((item, index) => (
                      <SwiperSlide>
                         <div ref={dataListRef} className={styles.dataList}>
                            <div key={index} className={styles.dataItem}>
                              <div className={styles.items}>{item.date}</div>
                              <div className={styles.items}>{item.totalValue}</div>
                              <div className={styles.items}>{item.riskValue}</div>
                            </div>
                          </div>
                      </SwiperSlide>
                    ))
                  )}
                             
          </Swiper>
          <div className="swiper-button-prev result-prev"></div>
          <div className="swiper-button-next result-next"></div>
        </div>

      </div>
    </>
  );
}

export { ResultSlider, ResultForm };