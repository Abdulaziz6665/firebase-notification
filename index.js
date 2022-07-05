const express = require('express');
const app = express();
var admin = require("firebase-admin");

var serviceAccount = require("./sonia-8cf1d-firebase-adminsdk-bkilg-8090d672c1.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const registrationToken = [
  "cGOR8G4LQfKBgh6dBvHLuI:APA91bE26hGPk6JF0FIm9bt8l6z_El7LlT0dqKE2ZJGY6c9vokNmSlrxyx_40-cXZTy3LK-Gi-78BRib62nt6Vl-tllxzMWJWEivvpD6XPTDCeI5L5o7IiPbFJPCO-M1pO2OnhdaRbfc",
  "dkKYkBbBYkQzj1pn_y2dEt:APA91bEROpeS65cuXTjq8-jIZWD1vzJ2hMpdcls8BaFojBltuvSaHaBzN654gJWEopA7Y_vyXskQ05UzJ2EVAPkx0IHT2erxg9108xm6Q1_N1f9kOq1Jzay6kPKnLWDkTRiqBLkfFj6q"
]


// admin.messaging().send(a)
admin.messaging().sendToDevice(registrationToken, {
  notification: {
    "title": "dwdw",
    "body": "test qililik",
    "image": "https://images.hothardware.com/contentimages/article/3184/content/small_Sony-Xperia-5-iii-07.jpg"
  },
  "data": {
    "ownerName": 'data.name || ""',
    "phone": 'data.phone || ""',
    "userImg": 'https://backend-sonia.uz/logo/logo.png',
    "subServiceImg": 'https://backend-sonia.uz/logo/logo.png',
    "buildingName": 'data.clinic_name || ""',
    "locationAddress": "data.location_address",
    "meetingDay": "moment(data.created_at)",
    "meetingTime": "data.meeting_time",
    "title": "client",
    "accepted": "true",
    "name": "name",
    "logo": "https://backend-sonia.uz/logo/logo.png"
  }
})

app.listen(3000, () => console.log(3000))
