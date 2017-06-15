## webpack-import-bug

> A small repo to explain bug in webpack harmony import  

### Expected
```bash
npm run expected
```
Output:  
```
> @ expected /private/tmp/webpack-import-bug
> node ./expected.js

Webpack works well
```

### Actual
```bash
npm run actual
```
Output:  
```
> @ actual /private/tmp/webpack-import-bug
> webpack && node ./dist/bundle.js

Hash: 609d0d27d02c30bd97a3
Version: webpack 2.6.1
Time: 81ms
    Asset     Size  Chunks             Chunk Names
bundle.js  3.18 kB       0  [emitted]  main
   [0] ./test.js 66 bytes {0} [built]
   [1] ./actual.js 165 bytes {0} [built]
/private/tmp/webpack-import-bug/dist/bundle.js:89
    console.log(testWebpack());
                ^

ReferenceError: testWebpack is not defined
    at test (/private/tmp/webpack-import-bug/dist/bundle.js:89:17)
    at Object.<anonymous> (/private/tmp/webpack-import-bug/dist/bundle.js:96:1)
    at __webpack_require__ (/private/tmp/webpack-import-bug/dist/bundle.js:20:30)
    at Object.defineProperty.value (/private/tmp/webpack-import-bug/dist/bundle.js:66:18)
    at Object.<anonymous> (/private/tmp/webpack-import-bug/dist/bundle.js:69:10)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
```
