import * as admin from "firebase-admin";
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccountKey from "../services/firebase/config/serviceAccountKey.json";
import { sentences } from "./sentences";

try {

    const app = initializeApp({
        credential: cert(serviceAccountKey as admin.ServiceAccount)
    });

    const db = getFirestore(app);

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




