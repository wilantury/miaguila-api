// Imports libraries
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('../../config/index');
const serviceAccount = require('../../config/serviceAccount.json');

//Load JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    await firestoreService.restore(__dirname + '/trips.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();