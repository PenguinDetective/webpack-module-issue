# Explanation
-  `rollup -c` - c flag mean use the rollup.config.js if not specified others https://rollupjs.org/guide/en/#command-line-flags
- rollup.config.js & tsconfig.js - The @rollup/plugin-typescript adds typescript support (aka .tsx) but also creates the typescript definitions. The "declaration" in tsconfig enables the emit of a single ".d.ts" file, which then may import other ".d.ts" files. The "declarationDir" specifies where to put the declarations.

https://dev.to/remshams/rolling-up-a-multi-module-system-esm-cjs-compatible-npm-library-with-typescript-and-babel-3gjg