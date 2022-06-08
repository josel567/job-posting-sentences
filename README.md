# job-posting-sentences

Server in Node.js + express.js with Typescript consisting of a basic CRUD working with Firebase firestore.

***This project is still in progress. Many parts of the system are not working properly due to implementation details (W.I.P.)***

Work has been done on decoupling between layers in various parts of the system, for example with external translation services or repositories.

**Main scripts:**

    build -> To compile Typescript files into JS files.
    start -> To execute entrypoint JS file.
    dev -> To run server in develop mode.

**Endpoints:**

    - GET /sentences -> List of all sentences (accepts a PAGE and SIZE query params to paginate)
    - GET /sentences/:sentenceId -> Get a sentence details
    - POST /sentence -> To create a sentence (body params required: text and cats)
    - PATCH /sentence -> To update a sentence (optional body params: text and cats)
    - DELETE /sentence/:sentenceId -> To delete a sentence

**Live demo: https://job-posting-sentences.herokuapp.com/sentences**

**TODO's:**

    - Improve the firestore pagination performance.
    - Improve views system.
    - Add unit, acceptance and E2E tests.
    - Endpoints validations.
