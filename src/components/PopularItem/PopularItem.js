import React from 'react';

import styles from './PopularItem.module.css';

function PopularItem(){
  return (
    <div className={styles.card}>
      <img src="..." className={styles.cardIimgTop} alt="..."></img>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>Card title</h5>
        <p className={styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className={styles.btn}>Go somewhere</a>
      </div>
    </div>
  );
}

export default PopularItem;
