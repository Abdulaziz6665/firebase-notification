const express = require('express');
const app = express();
var admin = require("firebase-admin");

var serviceAccount = require("./testfcm-7cee9-firebase-adminsdk-bplyk-a2ac18c3a9.json");

// admin.initializeApp(serviceAccount)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registrationToken = [
  "duxgPwEmTZatqLMlNZZtPC:APA91bFDwaVuSJgUvr6Tlzp_Gszfe714N2Z0PjzdLQYuojDjmpqBy2Xt0I9gswpz6H6kaoLqRl6XRQ6Sja6NoiTI4a562GXYSTMCSnhYrAPBgjN6Bw5WlDUrNGBd6EvCNgytVoO8U1an",
  "f55vG32hR7W_L_2sFFt2rb:APA91bER8MmMEXLDzOiDRYAex1qCQ19mxnloQoh6qXgBYp1dyN3cVNW3boJ2dCGqmQwcZQqT67TCc8da2_9lMdBXoQaOdpzCguruE3NgZd72GEiwzIgxsvDkyDmDv3O1HzD-7xN6ixdq"
]

admin.messaging().sendToDevice(registrationToken, {
  notification: {
    badge: "99",
    title: "Hello World",
    body: "This is a notification that will be displayed on your device"
    
  }
})


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcGWcPJUqCUwC7fg3c4PcxBzxUjKYxY0s",
  authDomain: "testfcm-7cee9.firebaseapp.com",
  projectId: "testfcm-7cee9",
  storageBucket: "testfcm-7cee9.appspot.com",
  messagingSenderId: "5011012163",
  appId: "1:5011012163:web:47ef17413e5df46bd272f6",
  measurementId: "G-1YZZ8Z405W"
};

// Initialize Firebase
// const app1 = admin.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app1);

app.listen(3000, () => console.log(3000))
