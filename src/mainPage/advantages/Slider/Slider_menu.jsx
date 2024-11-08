import styles from '../Advantages.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';



function Slider_menu(){
 
    return(
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            className="mySwiper"
            loop={true}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide>
                <div className={styles.info_menu}><div className={styles.icon}><img  src='/Clock.svg'/></div><br/>Высокая и оперативная скорость обработки заявки</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info_menu}><div className={styles.icon}><img  src='/Glass.svg'/></div><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info_menu}><div className={styles.icon}><img  src='/Lock.svg'/></div><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info_menu}><div className={styles.icon}><img  src='/Clock.svg'/></div><br/>Высокая и оперативная скорость обработки заявки</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info_menu}><div className={styles.icon}><img  src='/Glass.svg'/></div><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.info_menu}><div className={styles.icon}><img  src='/Lock.svg'/></div><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider_menu