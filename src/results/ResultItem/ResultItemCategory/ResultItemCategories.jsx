import React from 'react';
import styles from './ResultItemCategories.module.css';

function ResultItemCategories({ isAnnouncement, isDigest, isTechNews }) {
    return (
        <ul className={styles.cardCategories}>
            {isAnnouncement && <li className={styles.cardCategory}>Анонсы и события</li>}
            {isDigest && <li className={styles.cardCategory}>Новости</li>}
            {isTechNews && <li className={styles.cardCategory}>Технические новости</li>}
        </ul>
    );
}
export default  ResultItemCategories