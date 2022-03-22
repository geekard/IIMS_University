// Firebase start
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https: //firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO9mdCeGJ3OVKBQq3xnRxXiqI-MZQQWK8",
    authDomain: "contact-form-1b713.firebaseapp.com",
    projectId: "contact-form-1b713",
    storageBucket: "contact-form-1b713.appspot.com",
    messagingSenderId: "510699550999",
    appId: "1:510699550999:web:6503bd375f931beb68df52",
    measurementId: "G-C36X909M35"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase End
// my firebase config
firebase.initializeApp(firebaseConfig)
let firestore = firebase.firestore();

// Variable to access to database
let db = firestore.collection("form")

//Submit form 
document.getElementById('submit').addEventListener('click', submitForm);
// Submit Form  function
function submitForm(e) {
    e.preventDefault();
    console.log(123);
    // Get values
    let firstName = getInputVal('firstName');
    let lastName = getInputVal('lastName');
    let phoneNo = getInputVal('phoneNo');
    let email = getInputVal('email');
    let zipCode = getInputVal('zipCode');
    console.log(firstName);

    db.doc().set({
        firstName: firstName,
        lastName: lastName,
        phoneNo: phoneNo,
        email: email,
        zipCode: zipCode,

    }).then(() => {
        console.log('data saved');
    }).catch((error) => {
        console.log(error);
    })

}
// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}













// Save message to firebase

function saveMessage(firstName, lastName, phoneNo, email, zipCode) {
    let newMessagRef = messageRef.push();

    newMessagRef.set({
        firstName: firstName,
        lastName: lastName,
        phoneNo: phoneNo,
        email: email,
        zipCode: zipCode,

    });
}