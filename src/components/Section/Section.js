import React, {Fragment} from 'react';

import Popular from '../Popular';
import Search from '../Search';
import Movie from '../Movie';

function Section(){
  return (
    <Fragment>
      <Popular />
      <Search />
      <Movie />
    </Fragment>
  );
}

export default Section;
