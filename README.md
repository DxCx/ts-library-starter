# ts-library-starter

Example git project that is used for typescript libraries as a starter pack

What does it include:
----
    1. exported class as example for an npm moudle
    2. packaging for npm modules (webpack + tslint + awesome-typescript-loader + dts-bundle)
    3. testings for npm modules (mocha + chai)
    4. Typescript => ES6 => ES5 (babel)
    5. Two versions embed in the package, one for node, one for browser (browserify)

Notes
----
Please note that you will need to rename the library name in some files:

    1. typings.json
    2. webpack.config.js (bundle_opts)
    3. package.json (ofcourse ;))

Useful commands:
----
    npm run typings    - install needed typings for compilation
    npm run prebuild   - install both NPM dependancies and the typings for them
    npm run build      - build the library files
    npm run build:test - build both the library and the test files for it
    npm run test       - build the library, the tests, and run the tests.
    npm run pack       - build the library and the tests, make sure the tests passes, and then pack the library (creates .tgz)
    npm publish        - publish the library in npm repositories

Files explained:
----
    1. modules - directory is used for typescript code that is part of the project
        1a. modules/Example.ts - Just an example exported library, used to should import in tests.
        1b. modules/index.ts   - index, which functionality is exported from the library
        1c. modules/main.ts    - just wrapper for index
    2. test - directory is used for typescript library testing
        2a. test/test.ts       - example typescript test code, using chai and mocha.
    3. package.json            - file is used to describe the library
    4. tsconfig.json           - configuration file for the library compilation
    5. tsconfig.test.json      - configuration file for the tests compilation
    6. tslint.json             - configuration file for the linter (both test and library)
    7. typings.json            - typings needed for the library/tests
    8. webpack.config.js       - configuration file of the compilation automation process for the library
    9. webpack.config.test.js  - configuration file of the compilation automation process for the test

Output files explained:
----
    1. node_modules - directory npm creates with all the dependencies of the module (result of npm install)
    2. typings      - directory typings creates with all the typings of the module  (result of typings install)
    3. lib          - directory contains the compiled library (javascript + typings)
    4. build        - directory contains the compiled tests (javascript only)
    5. <module_name>-<module_version>.tgz - final tgz file for publish. (result of npm run pack)
