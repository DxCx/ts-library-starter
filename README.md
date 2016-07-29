# ts-library-starter

Example git project that is used for typescript libraries as a starter pack

What does it include:
----
    1. exported class as example for an npm moudle
    2. packaging for npm modules (webpack + tslint + tsloader + dts-bundle)
    3. testings for npm modules (mocha + chai)

Notes
----
Please note that you will need to rename the library name in some files:

    1. typings.json
    2. webpack.config.js (bundle_opts)
    3. package.json (ofcourse ;))

Useful Commands:
----
    npm run typings - install needed typings for compilation
    npm run prebuild - install both NPM dependancies and the typings for them
    npm run build - build the library files
    npm run build:test - build both the library and the test files for it
    npm run test - build the library, the tests, and run the tests.
    npm run pack - build the library and the tests, make sure the tests passes, and then pack the library (creates .tgz)
