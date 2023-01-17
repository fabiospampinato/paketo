
/* IMPORT */

import fs from 'node:fs';
import path from 'node:path';
import findUp from 'find-up-json';
import dirname from 'tiny-dirname';
import type {Package} from './types';

/* MAIN */

const read = (): Package => {

  const pkg = findUp ( 'package.json' );

  if ( !pkg ) throw new Error ( 'Could not find a "package.json" file' );

  return pkg.content;

};

const refresh = ( pkg: Package ): Package => {

  try { // Worst case scenario at least the code won't throw

    const pkgContent = JSON.stringify ( pkg );
    const distPath = dirname ( import.meta.url );
    const typesPath = path.join ( distPath, 'types.d.ts' );
    const typesContent = fs.readFileSync ( typesPath, 'utf8' );
    const typesContentNext = typesContent.replace ( /=.+;$/m, () => `= ${pkgContent};` );

    fs.writeFileSync ( typesPath, typesContentNext );

  } catch {}

  return pkg;

};

/* EXPORT */

export {read, refresh};
