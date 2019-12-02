import React from 'react';

import PopularItem from '../PopularItem';
import styles from './Popular.module.css';

function Popular(){
  return (
    <div>
      <h2>Популярное</h2>
      <div className={styles.row}>
        <PopularItem />
      </div>
    </div>
  );
}

export default Popular;
