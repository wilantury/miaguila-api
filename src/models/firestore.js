const admin = require('firebase-admin');
let serviceAccount = require('../config/serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

//Code here de implementation of CRUD --> next challenge
