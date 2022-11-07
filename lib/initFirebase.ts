
// the below imports are option - comment out what you don't need
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
// import 'firebase/analytics'
// import 'firebase/performance'
import {getApp, getApps, initializeApp} from 'firebase/app'
import 'firebase/remote-config'
import "firebase/auth";
import "firebase/firestore";
import { getRemoteConfig } from 'firebase/remote-config';

const clientCredentials = {
    apiKey: "AIzaSyDMLla_dRSqoXOIkR-GpZdcbhsemuVAuxM",
    authDomain: "fellowship-backend.firebaseapp.com",
    projectId: "fellowship-backend",
    storageBucket: "fellowship-backend.appspot.com",
    messagingSenderId: "883998580758",
    appId: "1:883998580758:web:e5fa1ff121076fda1a5537",
    measurementId: "G-9X2QQRW468"
  };
if (!getApps().length) {
  if(typeof window !== 'undefined'){
    initializeApp(clientCredentials);
  }
}

export const config = getRemoteConfig(getApp());

