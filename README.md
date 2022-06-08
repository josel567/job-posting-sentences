# job-posting-sentences

Server in Node.js + express.js with Typescript consisting of a basic CRUD working with Firebase firestore.

This project is still in progress. Many parts of the system are not working properly due to implementation details (W.I.P.)

Work has been done on decoupling between layers in various parts of the system, for example with external translation services or repositories.

Main scripts:

    build -> To compile Typescript files into JS files.
    start -> To execute entrypoint JS file.
    dev -> To run server in develop mode.

TODO's:

    - Improve the firestore pagination performance.
    - Improve views.
    - Add unit, acceptance and E2E tests.
