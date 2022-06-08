import * as admin from "firebase-admin";

import { sentences } from "./sentences";

try {

    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.serviceAccountKey!))
    });

    const db = admin.firestore();

    console.log("Firestore initialized");

    for(const sentence of sentences) {
        const cats = sentence.cats;
        const filteredCats = Object.keys(cats).filter(key => cats[key as keyof typeof cats] === 1);        

        db.collection("sentences").add({
            text: sentence.text,
            cats: filteredCats
        }).then(function(docRef) {
            console.log("Document added with ID: ", docRef.id);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

} catch (error) {
    console.log(error);
}




