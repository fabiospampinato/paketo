
/* IMPORT */

import {read, refresh} from './utils';
import type {Package} from './types';

/* MAIN */

const Paketo: Package = refresh ( read () );

/* EXPORT */

export default Paketo;
