
/* IMPORT */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import dirname from 'tiny-dirname';
import type {Package} from './types';

/* MAIN */

const read = (): Package => {

  const pkgPath = path.join ( process.cwd (), 'package.json' );
  const pkgContent = fs.readFileSync ( pkgPath, 'utf8' );
  const pkg = JSON.parse ( pkgContent );

  return pkg;

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
