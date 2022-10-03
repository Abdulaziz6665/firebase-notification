const express = require('express');
const app = express();
var admin = require("firebase-admin");

var serviceAccount = require("./react-bfd9f-firebase-adminsdk-tuvt6-35799ecf8d.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const token = [
  'cI7V1n9LWwQoF_6weYJ-EQ:APA91bFUhdmHyr-fGpqpH1ocPqEUL8xdu_18S1QSnftValhvGzaj91hrMD-f5elrqDeO2lffVVsddW9HR5s-TjWV1SfKNJWpcvFQ7V9I17iJu2OxwXZBcI4sW-dePQGapvLVz3mqe5Jy'
]

admin.messaging().sendToDevice(token, {
  notification:{
    title: "new Message",
    body: "body new Message"
  }
})

app.listen(3000, () => console.log(3000))
