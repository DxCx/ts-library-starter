# ts-library-starter

Example git project that is used for typescript libraries as a starter pack

What does it include:
----
    1. exported class as example for an npm moudle
    2. packaging for npm modules (webpack + tslint + awesome-typescript-loader + dts-bundle)
    3. testings for npm modules (mocha + chai)
    4. code coverage (istanbul) when running tests
    5. Typescript => ES6 => ES5 (babel)
    6. Two versions embed in the package, one for node, one for browser (browserify)

Notes
----
Please note that you will need to rename the library name in some files:

    1. webpack.config.js (bundle_opts)
    2. package.json (ofcourse ;))

Useful commands:
----
    npm run prebuild   - install NPM dependancies
    npm run build      - build the library files
    npm run test       - run the tests
    npm run test:watch - run the tests
    npm run pack       - build the library, make sure the tests passes, and then pack the library (creates .tgz)
    npm publish        - publish the library in npm repositories

Files explained:
----
    1. modules - directory is used for typescript code that is part of the project
        1a. modules/Example.ts - Just an example exported library, used to should import in tests.
        1b. modules/Example.spec.ts - tests for the example class
        1c. modules/index.ts        - index, which functionality is exported from the library
        1d. modules/main.ts         - just wrapper for index
        1d. modules/main.test.ts    - test runner
	2. mocha-webpack.opts			- options for mocha-webpack (tests)
    3. package.json                 - file is used to describe the library
    4. tsconfig.json                - configuration file for the library compilation
    5. tsconfig.test.json           - configuration file for the tests compilation
    6. tslint.json                  - configuration file for the linter (both test and library)
    7. typings.json                 - typings needed for the library/tests
    8. webpack.config.js            - configuration file of the compilation automation process for the library
    9. webpack.config.test.js       - configuration file of the compilation automation process for the test

Output files explained:
----
    1. node_modules - directory npm creates with all the dependencies of the module (result of npm install)
    2. lib          - directory contains the compiled library (javascript + typings)
    3. <module_name>-<module_version>.tgz - final tgz file for publish. (result of npm run pack)
    4. html-report  - code coverage report output made by istanbul
    5. .tmp         - temporary file built for tests
