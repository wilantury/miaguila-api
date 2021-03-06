require('dotenv').config();

const config = {
  // Firebase Config
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  //Server
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  //mongodb Config
  uri_mongo: process.env.URI_MONGO,
  //mongo_atlas Config
  uri_mongo_atlas: process.env.URI_MONGO_ATLAS,
}

module.exports = config;