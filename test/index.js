
/* IMPORT */

import {describe} from 'fava';
import Pajo from '../dist/index.js';
import Package from '../package.json' assert { type: 'json' };

/* MAIN */

describe ( 'Pajo', it => {

  it ( 'works', t => {

    t.deepEqual ( Pajo, Package );

  });

});
