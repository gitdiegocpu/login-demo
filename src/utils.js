import{ initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDOnGc-Zhv3qFZMY6gJ3plD7efXRQSaO8o",
  authDomain: "fir-auth-dg.firebaseapp.com",
  projectId: "fir-auth-dg",
  storageBucket: "fir-auth-dg.appspot.com",
  messagingSenderId: "179734870276",
  appId: "1:179734870276:web:caff54941abebd48e9b851"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

