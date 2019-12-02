import React, {Component} from 'react';

import styles from './Search.module.css';

class Search extends Component{
  render(){
    return (
    <div className={styles.d2}>
          <input type="text" placeholder="Искать здесь..." />
          <button type="submit"></button>
    </div>
    );
  }
}

export default Search;
