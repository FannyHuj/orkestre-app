import { Injectable } from '@angular/core';
import { initializeApp,FirebaseApp } from 'firebase/app';
import { collection, addDoc,Firestore } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { LoginTrace } from '../shared/models/login-trace';

@Injectable({
  providedIn: 'root',
})
export class LoginTraceService {

  private app: FirebaseApp;
  private db: Firestore;

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAOLE64fw_WzI5alxRFP9UWURq_pfg6RpY',
      authDomain: 'orkestre-4e915.firebaseapp.com',
      projectId: 'orkestre-4e915',
      storageBucket: 'orkestre-4e915.firebasestorage.app',
      messagingSenderId: '571843847199',
      appId: '1:571843847199:web:cb34bdc2c1a272462ce12a',
      measurementId: 'G-317NF5BFDW',
    };

    // Initialize Firebase
  this.app = initializeApp(firebaseConfig);
  this.db = getFirestore(this.app);
  }

  async addLoginTrace(loginTrace :LoginTrace){

  try {
  const docRef =  await addDoc(collection(this.db, "loginTrace"), {
    email: loginTrace.email,
    loginDate: loginTrace.loginDate,
    userId: loginTrace.userId
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}


}

