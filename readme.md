# Paketo

A tiny library for importing your `package.json`, with proper types!

## Why?

- You could do like `JSON.parse ( fs.readFileSync ( 'package.json', 'utf8' ) )`, but the output will be of type `any`, not the type that you want. Also that's annoying to write.
- You could do `import Package from './package.json' assert { type: 'json' }`, but that's kinda weird, it's not supported everywhere yet, and the path to write will change depending on where you are importing it from, which is inconvenient.

## How?

- After reading the `package.json` file this library rewrites its own types with the content of that file.

## Limitations

- After the first run, and after you edit your `package.json` file, you might have to restart TS' LSP before you can see the updated types.
- If your dependencies are not installed in a local `node_modules` folder this library may not work properly.

## Install

```sh
npm install paketo
```

## Usage

```ts
import Package from 'paketo';

// Let's read something from our package.json, with proper types

console.log ( Package.name ); // => paketo
```

## License

MIT © Fabio Spampinato
